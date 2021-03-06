import styled from 'styled-components'
import { Button } from '@material-ui/core';
import Head from 'next/head';



export function Header() {
    return (
        <Cabeca>
            <Head>
                <link rel="shortcut icon" href="/favicon.ico" />
            </Head>
            <BannerImg src={'/image/jardimdeHefestosombra2.png'} />
            <NavbarListContainer>
                <NavbarListUnordened>
                    <NavbarList>
                        <a href="/home"><HeaderButton>Home</HeaderButton></a>
                    </NavbarList>
                    <NavbarList>
                        <a href="/agora"><HeaderButton>Ágora</HeaderButton></a>
                    </NavbarList>
                    <NavbarList>
                        <a href="/sobre"><HeaderButton>Sobre Nós</HeaderButton></a>
                    </NavbarList>
                </NavbarListUnordened>
            </NavbarListContainer>
        </Cabeca>
    );
  };




    
  const Cabeca = styled.div`
  min-height: 15rem;
  background-color:  ${({theme}) => theme.navBack};
  margin: 0px;
  padding: 0px;
`

const HeaderButton = styled(Button)`
  color: ${({theme}) => theme.primary};
  background-color: rgba(0, 0, 0, 0.54);
  font-size: 0.875rem;
  min-width: 64px;
  box-sizing: border-box;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 500;
  line-height: 1.75;
  border-radius: 4px;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  border: 0;
cursor: pointer;
margin: 0;
display: inline-flex;
outline: 0;
padding: 0;
position: relative;
align-items: center;
border-radius: 0;
vertical-align: middle;
-moz-appearance: none;
justify-content: center;
text-decoration: none;
-moz-user-select: none;
background-color: transparent;
-webkit-appearance: none;
-webkit-tap-highlight-color: transparent;
`
const AppHeader = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`
const Banner = styled.div `
  display: inline-flex;
  width: 100% !important;
  margin: 0px;
  padding: 0px;
`

const BannerImg = styled.img `
  width: 100%;
  padding: 0px;
  background-color: rgba(245, 166, 35, 1);
`

const BannerText = styled.h1 `
  margin-top: 3rem;
  font-size: 5rem;
  font-weight: 500;
  color:tomato;
  font-family: Cinzel , serif;
  margin-left: 2rem;
`

const NavbarListContainer = styled.nav `
    
`
const NavbarListUnordened = styled.ul`
    list-style: none;
    display: inline-flex;
    margin: 0px;
    padding: 0px;
    background-color: ${({theme}) => theme.navBack};
`

const NavbarList = styled.li `
  margin-top: 0px;
  padding: 2px;
`

const Espacador = styled.hr`
height: 2rem;
border: none;
`
const Texto = styled.p `
  color: ${({theme}) => theme.textPrimary};
  font-size: 2rem;
`

