import styled from "styled-components";

export const HomePage = styled.div`
  padding: 0 4rem;
  height: calc(100vh - 6.5rem);
  // scroll somente nesse container
  overflow-y: scroll;
`;

export const Title = styled.h2`
  margin-top: 3rem;
  margin-bottom: 1.5rem;
`;

export const LatestEpisodes = styled.section``;
export const ContainerList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
`;

export const ListItems = styled.li`
  background: var(--white);
  border: 1px solid var(--gray-100);
  padding: 1.25rem;
  border-radius: 1.5rem;
  position: relative;
  display: flex;
  align-items: center;

  > img {
    width: 6rem;
    height: 6rem;
    border-radius: 1rem;
  }
`;
export const EpisodesDetails = styled.div`
  flex: 1;
  margin-left: 1rem;
`;

export const LinkEpisodes = styled.a`
  display: block;
  color: var(--gray-800);
  font-family: Lexend, sans-serif;
  font-weight: 600;
  text-decoration: none;
  line-height: 1.4rem;
  &:hover {
    text-decoration: underline;
  }
`;

export const EpisodeMembers = styled.p`
  font-size: 0.875rem;
  margin-top: 0.5rem;
  // Reduzir o tamanho do texto e add reticencias
  max-width: 70%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const PublishedAt = styled.span`
  display: inline-block;
  margin-top: 0.5rem;
  font-size: 0.875rem;
  margin-right: 0.5rem;
  padding-right: 0.5rem;
  position: relative;

  ::after {
    content: "";
    width: 4px;
    height: 4px;
    border-radius: 2px;
    background: #ddd;
    position: absolute;
    right: -4px;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const Duration = styled.span`
  display: inline-block;
  margin-top: 0.5rem;
  font-size: 0.875rem;
`;

export const ButtonPlay = styled.button`
  position: absolute;
  right: 2rem;
  bottom: 2rem;
  width: 2.5rem;
  height: 2.5rem;
  background: var(--white);
  border: 1px solid var(--gray-100);
  border-radius: 0.675rem;
  font-size: 0;
  transition: filter 0.3s;
  &:hover {
    filter: brightness(0.95);
  }
`;
export const ImagePlay = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

export const AllEpisodes = styled.section`
  padding-bottom: 2rem;
`;

export const Table = styled.table`
  width: 100%;
`;

export const Th = styled.th`
  padding: 0.75rem 1rem;
  border-bottom: 1px solid var(--gray-100);
  color: var(--gray-200);
  text-transform: uppercase;
  font: 500 0.75rem Lexend, sans-serif;
  text-align: left;
`;
export const Td = styled.td`
  padding: 0.75rem 1rem;
  border-bottom: 1px solid var(--gray-100);
  font-size: 0.875rem;
  img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 0.5rem;
  }
`;
export const TdImage = styled.td`
  padding: 0.75rem 1rem;
  border-bottom: 1px solid var(--gray-100);
  font-size: 0.875rem;
  width: 72px;
  img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 0.5rem;
  }
`;

export const TitleEpisode = styled.a`
  color: var(--gray-80);
  font-family: Lexend, sans-serif;
  font-weight: 600;
  text-decoration: none;
  line-height: 1.4rem;
  font-size: 1rem;
  &:hover {
    text-decoration: underline;
  }
`;

export const TdButton = styled.td`
  padding: 0.75rem 1rem;
  border-bottom: 1px solid var(--gray-100);
  font-size: 0.875rem;
`;
export const TdPublishedAt = styled.td`
  padding: 0.75rem 1rem;
  border-bottom: 1px solid var(--gray-100);
  font-size: 0.875rem;
  width: 100px;
`;

export const ButtonTablePlay = styled.button`
  width: 2rem;
  height: 2rem;
  background: var(--white);
  border: 1px solid var(--gray-100);
  border-radius: 0.5rem;
  font-size: 0;
  transition: filter 0.3s;
  &:hover {
    filter: brightness(0.95);
  }
`;
export const ImagePlayTable = styled.img`
  width: 1.25rem;
  height: 1.25rem;
`;
