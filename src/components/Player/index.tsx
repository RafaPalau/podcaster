import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import { PlayerContext, usePlayer } from "../../contexts/PlayerContext";
import * as S from "./styles";
import { convertDurationToTimeString } from "../../utils/convertDurationsToTimeString";

export function Player() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [progress, setProgress] = useState(0);

  const {
    episodeList,
    currentEpisodeIndex,
    isPlaying,
    togglePlay,
    isShuffling,
    toggleSuffle,
    setPlayingState,
    playNext,
    isLooping,
    toggleLoop,
    playPrevious,
    hasNext,
    hasPrevious,
    clearPlayerState,
  } = usePlayer();

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

  function setupProgressListener() {
    audioRef.current.currentTime = 0;
    audioRef.current.addEventListener("timeupdate", () => {
      setProgress(Math.floor(audioRef.current.currentTime));
    });
  }
  function handleSeek(amount: number) {
    audioRef.current.currentTime = amount;
    setProgress(amount);
  }
  function hanldeEpisodeEnded() {
    if (hasNext) {
      playNext();
    } else {
      clearPlayerState();
    }
  }

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
          <S.ProgressSpan>
            {convertDurationToTimeString(progress)}
          </S.ProgressSpan>
          <S.Slyder>
            {episode ? (
              <Slider
                max={episode.duration}
                value={progress}
                onChange={handleSeek}
                trackStyle={{ backgroundColor: "#04D361" }}
                railStyle={{ backgroundColor: "#9F75ff" }}
                handleStyle={{ borderColor: "#04D361", borderWidth: 4 }}
              />
            ) : (
              <S.EmptySlider />
            )}
          </S.Slyder>
          <S.ProgressSpan>
            {convertDurationToTimeString(episode?.duration ?? 0)}
          </S.ProgressSpan>
        </S.Progress>

        {episode && (
          <audio
            src={episode.url}
            autoPlay
            onEnded={hanldeEpisodeEnded}
            loop={isLooping}
            ref={audioRef}
            onPlay={() => setPlayingState(true)}
            onPause={() => setPlayingState(false)}
            onLoadedMetadata={setupProgressListener}
          />
        )}

        <S.ContainerButtons>
          <S.Button
            disabled={!episode || episodeList.length === 1}
            onClick={toggleSuffle}
          >
            <S.Img src='/shuffle.svg' alt='Embaralhar' />
          </S.Button>
          <S.Button disabled={!episode || !hasPrevious} onClick={playPrevious}>
            <S.Img src='/play-previous.svg' alt='Tocar anterior' />
          </S.Button>

          <S.PlayButton disabled={!episode} onClick={togglePlay}>
            {isPlaying ? (
              <S.Img src='/pause.svg' alt='Pausar' />
            ) : (
              <S.Img src='/play.svg' alt='Tocar' />
            )}
          </S.PlayButton>

          <S.Button disabled={!episode || !hasNext} onClick={playNext}>
            <S.Img src='/play-next.svg' alt='Tocar próxima' />
          </S.Button>
          <S.Button disabled={!episode} onClick={toggleLoop}>
            <S.Img src='/repeat.svg' alt='Repetir' />
          </S.Button>
        </S.ContainerButtons>
      </S.Footer>
    </S.Container>
  );
}
