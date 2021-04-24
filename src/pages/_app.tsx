// import React, { useState } from "react";
import { Header } from "../components/Header";
import GlobalStyles from "../styles/GlobalStyles";
import * as S from "../styles/app";
import { Player } from "../components/Player";
import { PlayerContextProvider } from "../contexts/PlayerContext";

function MyApp({ Component, pageProps }) {
  return (
    <PlayerContextProvider>
      <S.Wrapper>
        <GlobalStyles />
        <S.Main>
          <Header />
          <Component {...pageProps} />
        </S.Main>
        <Player />
      </S.Wrapper>
    </PlayerContextProvider>
  );
}

export default MyApp;
