import styled from "styled-components";

export const Container = styled.div`
  width: 26.5rem;
  height: 100vh;
  padding: 3rem 4rem;
  background: var(--purple-500);
  color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
export const Img = styled.img``;

export const textPlayingNow = styled.p`
  font-family: Lexend, sans-serif;
  font-weight: 600;
`;
export const EmptyPlayer = styled.div`
  width: 100%;
  height: 20rem;
  border: 1.5px dashed var(--purple-300);
  border-radius: 1.5rem;
  background: linear-gradient(
    143.8deg,
    rgba(145, 100, 250, 0.8) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  padding: 4rem;
  text-align: center;
  justify-content: center;
`;
export const TextSelectPodcast = styled.strong``;

export const Progress = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.875rem;
`;

export const ProgressSpan = styled.span`
  display: inline-block;
  width: 4rem;
  text-align: center;
`;
export const Slyder = styled.div`
  flex: 1;
`;

export const EmptySlider = styled.div`
  width: 100%;
  height: 4px;
  background: var(--purple-300);
  border-radius: 2px;
`;
export const ContainerButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2.5rem;
  gap: 1.5rem;
`;
export const Button = styled.button`
  background: transparent;
  border: 0;
  font-size: 0;
  &:disabled {
    cursor: default;
  }
  &:hover:not(:disabled) {
    filter: brightness(0.8);
  }
`;
export const PlayButton = styled.button`
  background: transparent;
  border: 0;
  font-size: 0;
  width: 4rem;
  height: 4rem;
  border-radius: 1rem;
  background: var(--purple-400);
  transition: filter 0.2s;
  &:disabled {
    cursor: default;
  }
  &:hover:not(:disabled) {
    filter: brightness(0.9);
  }
`;

export const Footer = styled.footer`
  align-self: stretch;
  /* margin: 0 auto; */
`;

export const CurrentEpisode = styled.div`
  text-align: center;
  img {
    border-radius: 1.5rem;
  }
  strong {
    display: block;
    margin-top: 2rem;
    font: 600 1.25rem Lexend, sans-serif;
    line-height: 1.75rem;
  }
  span {
    display: block;
    margin-top: 1rem;
    opacity: 0.6;
    line-height: 1.5rem;
  }
`;
