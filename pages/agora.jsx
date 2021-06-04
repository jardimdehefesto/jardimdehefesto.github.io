import Link from 'next/link';
import { getAllPosts } from '/services/api.js';
import { Header } from "/components/Header.js"
import styled from 'styled-components'
import Markdown from '/services/markdown.js';
import ReactMarkdown from 'react-markdown'

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
            <Endereco href={ `/${ post.slug }` }>
              <div>{ post.title } <br/> 
              <ReactMarkdown>
                {post.content.slice(0,140)}
                </ReactMarkdown>
                Continuar Lendo...
                </div>
            </Endereco>
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
const LinkInterno = styled.a`
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