import React from "react";
import { Header } from "../components/Header";
import GlobalStyles from "../styles/GlobalStyles";
import * as S from "../styles/app";
import { Player } from "../components/Player";

function MyApp({ Component, pageProps }) {
  return (
    <S.Wrapper>
      <GlobalStyles />
      <S.Main>
      <Header />
      <Component {...pageProps} />
      </S.Main>
    <Player />
    </S.Wrapper>
  );
}

export default MyApp;
