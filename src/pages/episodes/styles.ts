import styled from "styled-components";

export const ContainerEpisode = styled.div`
  max-width: 45rem;
  padding: 3rem 2rem;
  margin: 0 auto;
`;

export const ThumbnailContainer = styled.div`
  position: relative;
  img {
    border-radius: 1rem;
  }
`;
export const ButtoncontainerBack = styled.button`
  width: 3rem;
  height: 3rem;
  border-radius: 0.75rem;
  border: 0;
  position: absolute;
  z-index: 5;
  font-size: 0;

  &:hover {
    filter: brightness(0.9);
  }
  left: 0;
  top: 50%;
  background: var(--purple-500);
  transform: translate(-50%, -50%);
`;
export const ButtoncontainerPlay = styled.button`
  width: 3rem;
  height: 3rem;
  border-radius: 0.75rem;
  border: 0;
  position: absolute;
  z-index: 5;
  font-size: 0;

  &:hover {
    filter: brightness(0.9);
  }
  right: 0;
  top: 50%;
  background: var(--green-500);
  transform: translate(50%, -50%);
`;

export const Header = styled.header`
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--gray-100);
`;

export const Title = styled.h1`
  margin-top: 2rem;
  margin-bottom: 1.5rem;
`;

export const Span = styled.span`
  display: inline-block;
  font-size: 0.875rem;
`;

export const SpanSecond = styled.span`
  display: inline-block;
  font-size: 0.875rem;
  margin-left: 1rem;
  padding-left: 1rem;
  position: relative;
  &::before {
    content: "";
    width: 4px;
    height: 4px;
    border-radius: 2px;
    background: #ddd;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;
export const Description = styled.div`
margin-top: 2rem;
line-height: 1.675rem;
color: var(--gray-800);
p{
  margin: 1.5rem 0;
}

`;