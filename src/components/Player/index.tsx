import Image from "next/image";
import { useContext, useRef, useEffect } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import { PlayerContext } from "../../contexts/PlayerContext";
import * as S from "./styles";

export function Player() {
  const audioRef = useRef<HTMLAudioElement>(null);

  const {
    episodeList,
    currentEpisodeIndex,
    isPlaying,
    togglePlay,
    setPlayingState,
  } = useContext(PlayerContext);

  useEffect(() => {
    if (!audioRef.current) {
      return;
    }
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  const episode = episodeList[currentEpisodeIndex];
  return (
    <S.Container>
      <S.Header>
        <S.Img src='/playing.svg' alt='Tocando agora' />
        <S.textPlayingNow>Tocando agora</S.textPlayingNow>
      </S.Header>
      {episode ? (
        <S.CurrentEpisode>
          <Image
            width={592}
            height={592}
            src={episode.thumbnail}
            objectFit='cover'
          />
          <strong>{episode.title}</strong>
          <span>{episode.members}</span>
        </S.CurrentEpisode>
      ) : (
        <S.EmptyPlayer>
          <S.TextSelectPodcast>
            Selecione um podcast para ouvir
          </S.TextSelectPodcast>
        </S.EmptyPlayer>
      )}

      <S.Footer>
        <S.Progress>
          <S.ProgressSpan>00:00</S.ProgressSpan>
          <S.Slyder>
            {episode ? (
              <Slider
                trackStyle={{ backgroundColor: "#04D361" }}
                railStyle={{ backgroundColor: "#9F75ff" }}
                handleStyle={{ borderColor: "#04D361", borderWidth: 4 }}
              />
            ) : (
              <S.EmptySlider />
            )}
          </S.Slyder>
          <S.ProgressSpan>00:00</S.ProgressSpan>
        </S.Progress>

        {episode && (
          <audio
            src={episode.url}
            autoPlay
            ref={audioRef}
            onPlay={() => setPlayingState(true)}
            onPause={() => setPlayingState(false)}
          />
        )}

        <S.ContainerButtons>
          <S.Button disabled={!episode}>
            <S.Img src='/shuffle.svg' alt='Embaralhar' />
          </S.Button>
          <S.Button disabled={!episode}>
            <S.Img src='/play-previous.svg' alt='Tocar anterior' />
          </S.Button>

          <S.PlayButton disabled={!episode} onClick={togglePlay}>
            {isPlaying ? (
              <S.Img src='/play.svg' alt='Tocar' />
            ) : (
              <S.Img src='/pause.svg' alt='Tocar' />
            )}
          </S.PlayButton>

          <S.Button disabled={!episode}>
            <S.Img src='/play-next.svg' alt='Tocar próxima' />
          </S.Button>
          <S.Button disabled={!episode}>
            <S.Img src='/repeat.svg' alt='Repetir' />
          </S.Button>
        </S.ContainerButtons>
      </S.Footer>
    </S.Container>
  );
}
