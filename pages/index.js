import { Header } from "/components/Header.js"
import styled from 'styled-components'
import Link from 'next/link';
import barracas from "/data/barracas.js"
import PropagandaLateral from "/components/PropagandaLateral.js"


  var informacaBarraca = barracas

export default function Index() {
  const imgBase = "/image/";
  const barracas = (
    <>
      {informacaBarraca.map((barraca) =>
        <div key={barraca.id}>
          <Endereco label={barraca.title + " - " + barraca.url} href={barraca.url} target="_blank" rel="noopener noreferrer" >



            <BarracaImg className="grid-img" alt="" src={imgBase + barraca.img} />
            <BarracaTitulo>{barraca.title}</BarracaTitulo>
            <BarracaTexto>{barraca.content}</BarracaTexto>


          </Endereco>
        </div>
      )}
    </>
  )
  return (
    <>
      <Header />

      <Container>
        <BarracaGrid>
          <BarracaItem>
            {barracas}
          </BarracaItem>

        </BarracaGrid>

      </Container>
      <PropagandaLateral/>
    </>
  )
}






const Container = styled.div`
    padding: 0 10% 0 10%;
    `
const BarracaGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 10px;
`
const BarracaItem = styled.div`
  background-color: hsla(0,0%,100%,.1);
  border: 1px solid rgba(0,0,0,.2);
  margin: 20px;
  font-size: 30px;
  text-align: center;
`
const BarracaImg = styled.img`
  max-width: 20vw;
  width: 100%;
  height: 100%;
  transition: transform .5s ease,-webkit-transform .5s ease;
&:hover{
  transform: scale(1.2);
}
`
const BarracaTitulo = styled.h3`
  color: #000;
  margin: 0px;
  font-size: 3vw;
`;
const BarracaTexto = styled.p`
  margin: 0px;
  color: #000;
`;
const Endereco = styled.a`
  text-decoration: none;
  &:hover{
    text-decoration: none;
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
  &:hover{
    text-decoration: none;
  }
  &:visited{
    text-decoration: none;
  }
  &:link{
    text-decoration: none;
  }
`