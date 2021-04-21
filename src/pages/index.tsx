import { GetStaticProps } from "next";
import Image from "next/image";
import { format, parseISO } from "date-fns"; //! parseISO converte data string em Date()
import ptBR from "date-fns/locale/pt-BR";
import { api } from "../services/api";
import { convertDurationToTimeString } from "../utils/convertDurationsToTimeString";

import * as S from "./homeStyles";
//! O que tem de typo em cada episódio
type EpisodeProps = {
  id: string;
  title: string;
  thumbnail: string;
  description: string;
  members: string;
  duration: number;
  durationAsString: string;
  url: string;
  publishedAt: string;
};
//! Tipo do Array episódios
type HomeProps = {
  latestEpisodes: EpisodeProps[]; // Array<EpisodeProps>;  // As duas formas são certas
  allEpisodes: EpisodeProps[]; // Array<EpisodeProps>;  // As duas formas são certas
};

//! Consumindo API com axios no next.
export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get(`episodes`, {
    params: {
      _limit: 12,
      _sort: "published_at",
      _order: "desc",
    },
  });

  //! Formatar os dados logo após a chama da API
  const episodes = data.map((episode) => {
    return {
      id: episode.id,
      title: episode.title,
      thumbnail: episode.thumbnail,
      members: episode.members,
      publishedAt: format(parseISO(episode.published_at), "d MMM yy", {
        locale: ptBR,
      }),
      durationAsString: convertDurationToTimeString(
        Number(episode.file.duration)
      ),
      duration: Number(episode.file.duration),
      description: episode.description,
      url: episode.file.url,
    };
  });

  const latestEpisodes = episodes.slice(0, 2);
  const allEpisodes = episodes.slice(2, episodes.length);

  return {
    props: {
      latestEpisodes,
      allEpisodes,
    },
    revalidate: 60 * 60 * 8,
  };
};

export default function Home({ latestEpisodes, allEpisodes }: HomeProps) {
  return (
    <S.HomePage>
      <S.LatestEpisodes>
        <S.Title>Últimos lançamentos</S.Title>
        <S.ContainerList>
          {latestEpisodes.map((episode) => {
            return (
              <S.ListItems key={episode.id}>
                 {/* imagem vindas de outros domains cria o arquivo
                 next.config.js */}
                <Image
                  width={192}
                  height={192}
                  src={episode.thumbnail}
                  alt={episode.title}
                  objectFit='cover'
                />
                <S.EpisodesDetails>
                  <S.LinkEpisodes href=''>{episode.title}</S.LinkEpisodes>
                  <S.EpisodeMembers>{episode.members}</S.EpisodeMembers>
                  <S.PublishedAt>{episode.publishedAt}</S.PublishedAt>
                  <S.Duration>{episode.durationAsString}</S.Duration>
                </S.EpisodesDetails>
                <S.ButtonPlay>
                  <S.ImagePlay src='/play-green.svg' alt='Tocar episódio' />
                </S.ButtonPlay>
              </S.ListItems>
            );
          })}
        </S.ContainerList>
      </S.LatestEpisodes>

      <S.AllEpisodes></S.AllEpisodes>
    </S.HomePage>
  );
}
