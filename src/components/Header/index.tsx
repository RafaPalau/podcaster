import format from "date-fns/format";
import ptBR from "date-fns/locale/pt-BR";
import Link from "next/link";
import * as S from "./styles";

export function Header() {
  const currentDate = format(new Date(), "EEEEEE, d MMMM", {
    locale: ptBR,
  });
  return (
    <S.HeaderContainer>
      {/* No next todas as coisas que estão na pasta public podem ser exportadas dessa maneira */}
      <Link href='/'>
      <S.Img src='/logo.svg' alt='Podcaster' />
      </Link>
      <S.Text>O melhor para você ouvir, sempre</S.Text>
      <S.Span>{currentDate}</S.Span>
    </S.HeaderContainer>
  );
}
