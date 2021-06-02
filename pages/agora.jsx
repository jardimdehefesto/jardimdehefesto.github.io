import Link from 'next/link';
import { getAllPosts } from '/services/api.js';
import { Header } from "/components/Header.js"
import styled from 'styled-components'
import markdown from '/services/markdown.js';

export default function Agora({ posts }) {
  return (
    <>
        <Header/>
        <Container>
      <h1>Ágora</h1>
      <p>Publicações:</p>
      {
        posts.map(post => 
          <p>
            <LinkInterno href={ `/${ post.slug }` }>
              <Endereco>{ post.title } <br/> <div dangerouslySetInnerHTML={{ __html: post.content.slice(0,140) }} /> Continuar Lendo...</Endereco>
            </LinkInterno>
          </p>
        )
      }
      </Container>
    </>
  );
}

export function getStaticProps() {
  const posts = getAllPosts([ 'title', 'date', 'slug', 'content' ]);


  return {
    props: { posts }
  }
}


const Container = styled.div`
  padding: 0 10vw 0 10vw;
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