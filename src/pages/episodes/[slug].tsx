import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import { api } from "../../services/api";
import { convertDurationToTimeString } from "../../utils/convertDurationsToTimeString";
import ptBR from "date-fns/locale/pt-BR";

import * as S from "../../styles/stylesEpisodes";

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params;
  const { data } = await api.get(`/episodes/${slug}`);

  const episode = {
    id: data.id,
    title: data.title,
    thumbnail: data.thumbnail,
    members: data.members,
    publishedAt: format(parseISO(data.published_at), "d MMM yy", {
      locale: ptBR,
    }),
    durationAsString: convertDurationToTimeString(Number(data.file.duration)),
    duration: Number(data.file.duration),
    description: data.description,
    url: data.file.url,
  };
  return {
    props: {
      episode,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};

type Episode = {
  id: string;
  title: string;
  thumbnail: string;
  members: string;
  duration: number;
  durationAsString: string;
  description: string;
  url: string;
  publishedAt: string;
};

type EpisodeProps = {
  episode: Episode;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await api.get('episodes', {
    params: {
      _limit: 2,
      _sort: "published_at",
      _order: "desc",
    },
  });

  const paths = data.map((episode) => {
    return {
      params: {
        slug: episode.id,
      },
    };
  });

  return {
    paths,
    fallback: "blocking",
  };
};
export default function Episode({ episode }: EpisodeProps) {
  return (
    <S.ContainerEpisode>
      <S.ThumbnailContainer>
        <Link href='/'>
          <S.ButtoncontainerBack type='button'>
            <img src='/arrow-left.svg' alt='Voltar' />
          </S.ButtoncontainerBack>
        </Link>
        <Image
          width={700}
          height={160}
          src={episode.thumbnail}
          objectFit='cover'
        />
        <S.ButtoncontainerPlay type='button'>
          <img src='/play.svg' alt='Tocar episódio' />
        </S.ButtoncontainerPlay>
      </S.ThumbnailContainer>

      <S.Header>
        <S.Title>{episode.title}</S.Title>
        <S.Span>{episode.members}</S.Span>
        <S.SpanSecond>{episode.publishedAt}</S.SpanSecond>
        <S.SpanSecond>{episode.durationAsString}</S.SpanSecond>
      </S.Header>

      <S.Description
        // Converter e remover script do texto
        dangerouslySetInnerHTML={{ __html: episode.description }}
      />
    </S.ContainerEpisode>
  );
}
