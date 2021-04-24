import { createContext, useState, ReactNode, useContext } from "react";

type Episode = {
  title: string;
  members: string;
  thumbnail: string;
  duration: number;
  url: string;
};

type PlayerContextData = {
  episodeList: Episode[];
  currentEpisodeIndex: number;
  isPlaying: boolean;
  isLooping: boolean;
  play: (episode: Episode) => void;
  setPlayingState: (state: boolean) => void;
  togglePlay: () => void;
  toggleLoop: () => void;
  playNext: () => void;
  playPrevious: () => void;
  playList: (list: Episode[], index: number) => void;
  hasNext: boolean;
  hasPrevious: boolean;
};

export const PlayerContext = createContext({} as PlayerContextData);

type PlayerContextProviderProp = {
  children: ReactNode;
};
export function PlayerContextProvider({ children }: PlayerContextProviderProp) {
  const [episodeList, setEpisodeList] = useState([]);
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLooping, setIsLooping] = useState(false);

  function play(episode: Episode) {
    setEpisodeList([episode]);
    setCurrentEpisodeIndex(0);
    setIsPlaying(true);
  }

  function playList(list: Episode[], index: number) {
    setEpisodeList(list);
    setCurrentEpisodeIndex(index);
    setIsPlaying(true);
  }

  function togglePlay() {
    setIsPlaying(!isPlaying);
  }
  function toggleLoop() {
    setIsLooping(!isLooping);
  }

  function setPlayingState(state: boolean) {
    setIsPlaying(state);
  }
  const hasPrevious = currentEpisodeIndex > 0;
  const hasNext = currentEpisodeIndex + 1 < episodeList.length;

  function playNext() {
   
    if (hasNext) {
      setCurrentEpisodeIndex(currentEpisodeIndex + 1);
    }
  }

  function playPrevious() {
    if (hasPrevious) {
      setCurrentEpisodeIndex(currentEpisodeIndex - 1);
    }
  }

  return (
    <PlayerContext.Provider
      value={{
        playList,
        episodeList,
        currentEpisodeIndex,
        play,
        isLooping,
        toggleLoop,
        playNext,
        playPrevious,
        isPlaying,
        togglePlay,
        setPlayingState,
        hasNext, 
        hasPrevious,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
}
export const usePlayer = () => { 
  return useContext(PlayerContext)
}
