// Importamos a nossa função getAllPosts()
import { getPost, getAllPosts } from '/services/api.js';
import markdown from '/services/markdown.js';
import { Header } from "/components/Header.js"
import styled from 'styled-components'
import Link from 'next/link';

export default function Page({ post }) {
  return (
    <>
    <Header/>
    <Container>
    <Titulo>{ post.title }</Titulo>
      <p>{ post.author } · { post.date }</p>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </Container>
    </>
  );
}

/**
 * Transformamos a função getStaticProps
 * em assincrona
 */
 export async function getStaticProps({ params }) {
  const post = getPost(params.slug, [
    'title',
    'date',
    'author',
    'slug',
    'content'
  ]);

  /**
   * Como a função toHTML é async, ela
   * retorna uma Promise, então devemos 
   * aguardar ela ser finalizada com o await.
   */ 
  post.content = await markdown.toHTML(post.content);

  return {
    props: { post }
  }
}

// Usamos a função do Next.js, getStaticPaths()
export function getStaticPaths() {
  // Buscamos todos os slugs e date de todos os posts
  const posts = getAllPosts(['slug', 'date']);

  return {
    /**
     * Retornamos para cada rota o parâmetro slug,
     * para conseguirmos usá-lo na função
     * getStaticProps acima.
     */
    paths: posts.map(post => ({
        params: {
          slug: post.slug
        }
    })),
    /**
     * A opção fallback: false fala para o Next.js
     * não tentar executar essa rota se o arquivo
     * markdown para ela não existir
     */
    fallback: false
  };
}

const Container = styled.div`
  padding: 0 10vw 0 10vw;
`
const Titulo = styled.h1`

`
const Endereco = styled.a`
  text-decoration: none;
  cursor: pointer;
  &:hover{
    text-decoration: none;
    cursor: pointer;
  }
  &:visited{
    text-decoration: none;
  }
  &:link{
    text-decoration: none;
  }
`
const LinkInterno = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  &:hover{
    text-decoration: none;
    cursor: pointer;
  }
  &:visited{
    text-decoration: none;
  }
  &:link{
    text-decoration: none;
  }
`