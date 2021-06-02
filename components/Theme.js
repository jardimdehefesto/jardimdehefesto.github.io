import styled from 'styled-components'
import { makeStyles} from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Link from 'next/link';


const useStyles = makeStyles((theme) => ({
    button: {
        color: theme.palette.primary.main,
    }
  }));
  
  const Cabeca = styled.div`
    min-height: 15rem;
    background-color:  ${(theme) =>theme.palette.dark.light};
    margin: 0px;
    padding: 0px;
  `
  
  const HeaderButton = styled(Button)`
    color: ${(theme) =>theme.palette.primary.main};
    background-color: ${(theme) =>theme.palette.dark.main} !important;
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
    background-color: ${(theme) =>theme.palette.primary.light};
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
    display: inline-flex;
  `
  
  const NavbarList = styled.li `
    margin-top: 0px;
    padding: 2px;
  `
  const Container = styled.div`
  padding: 0 10% 0 10%;
  `
  const Espacador = styled.hr`
  height: 2rem;
  border: none;
  `
  const Texto = styled.p `
    color: ${(theme) =>theme.text.primary};
    font-size: 2rem;
  `
  const Endereco = styled(Link)`
  
  `
  