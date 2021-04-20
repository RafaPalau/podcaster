import * as S from "./styles";

export function Player() {
  return (
    <S.Container>
      <S.Header>
        <S.Img src='/playing.svg' alt='Tocando agora' />
        <S.textPlayingNow>Tocando agora</S.textPlayingNow>
      </S.Header>
      <S.EmptyPlayer>
        <S.TextSelectPodcast>
          Selecione um podcast para ouvir
        </S.TextSelectPodcast>
      </S.EmptyPlayer>
      <S.Footer>
        <S.Progress>
          <S.ProgressSpan>00:00</S.ProgressSpan>
          <S.Slyder>
          <S.EmptySlider />
          </S.Slyder>
        
          <S.ProgressSpan>00:00</S.ProgressSpan>
        </S.Progress>
        <S.ContainerButtons>
          <S.Button>
            <S.Img src='/shuffle.svg' alt='Embaralhar' />
          </S.Button>
          <S.Button>
            <S.Img src='/play-previous.svg' alt='Tocar anterior' />
          </S.Button>
          <S.PlayButton>
            <S.Img src='/play.svg' alt='Tocar' />
          </S.PlayButton>
          <S.Button>
            <S.Img src='/play-next.svg' alt='Tocar próxima' />
          </S.Button>
          <S.Button>
            <S.Img src='/repeat.svg' alt='Repetir' />
          </S.Button>
        </S.ContainerButtons>
      </S.Footer>
    </S.Container>
  );
}
