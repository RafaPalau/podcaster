import React, { useState } from "react";
import { Header } from "../components/Header";
import GlobalStyles from "../styles/GlobalStyles";
import * as S from "../styles/app";
import { Player } from "../components/Player";
import { PlayerContext } from "../contexts/PlayerContext";

function MyApp({ Component, pageProps }) {
  const [episodeList, setEpisodeList] = useState([]);
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  function play(episode) {
    setEpisodeList([episode]);
    setCurrentEpisodeIndex(0);
    setIsPlaying(true)
  }

  function togglePlay(){
    setIsPlaying(!isPlaying)
  }

  function setPlayingState(state: boolean){
    setIsPlaying(state)
  }

  return (
    <PlayerContext.Provider
      value={{ episodeList, currentEpisodeIndex, play, isPlaying, togglePlay, setPlayingState }}
    >
      <S.Wrapper>
        <GlobalStyles />
        <S.Main>
          <Header />
          <Component {...pageProps} />
        </S.Main>
        <Player />
      </S.Wrapper>
    </PlayerContext.Provider>
  );
}

export default MyApp;
