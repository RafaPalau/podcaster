// Tres formas de consumir API da melhor pra pior

// ----------------------------------------
// SSG  Só funciona em produção, precisa gerar uma build
export default function Home(props) {
  return <p>{JSON.stringify(props.episodes)}</p>;
}
export async function getStaticProps() {
  const response = await fetch("http://localhost:3333/episodes");
  const data = await response.json();

  return {
    props: {
      episodes: data,
    },
    // quantop tempo em milessegundo eu quero fazer uma nova requisição na página
    revalidate: 60 * 60 * 8, // A cada 8h que a pessoa acessar vai ter uma nova requisição
  };
}
// ----------------------------------------
// SSR
// export default function Home(props) {
//   return(
// <p>{JSON.stringify(props.episodes)}</p>
//   )
// }
// export async function getServerSideProps() {
//   const response = await fetch("http://localhost:3333/episodes");
//   const data = await response.json();

//   return {
//     props: {
//       episodes: data,
//     },
//   };
// }
// ----------------------------------------

// ---------------------------------------
// SPA  não é problema usar fetch para chamar mas não é a melhor opção
// import { useEffect, useState } from "react";

// export default function Home() {
// const [data, setData] = useState()
//   useEffect(() => {
//     fetch("http://localhost:3333/episodes")
//       .then((response) => response.json())
//       .then((data) => console.log(data));
//       setData(data)
//       console.log(data)
//   }, []);

//   return(
// <p>map para os itens</p>
//   )
// }
// ------------------------------------------


