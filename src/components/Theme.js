import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import styled from 'styled-components/'

export const theme = createMuiTheme({
    palette: {
        primary: {
            // light: será calculada com base em palette.primary.main,
            main: 'rgba(245, 166, 35, 1)',
            // dark: será calculada com base em palette.primary.main,
            // contrastText: será calculada para contrastar com palette.primary.main
        },
        secondary: {
            // light: será calculada com base palette.secondary.main,
            main: '#1e2021',
            // dark: será calculada com base palette.secondary.main,
            contrastText: '#ff4400',
        },
        dark: {
            // light: será calculada com base em palette.primary.main,
            main: 'rgba(0, 0, 0, 0.54)',
            // dark: será calculada com base em palette.primary.main,
            // contrastText: será calculada para contrastar com palette.primary.main
        },
        // Usado por `getContrastText()` para maximizar o contraste entre
        // o plano de fundo e o texto.
        contrastThreshold: 3,
        // Usado pelas funções abaixo para mudança de uma cor de luminância por aproximadamente
        // dois índices dentro de sua paleta tonal.
        // Por exemplo, mude de Red 500 para Red 300 ou Red 700.
        tonalOffset: 0.2,
    },
    text: {
        primary: "rgba(0, 0, 0, 0.87)",
    }
});
export const useStyles = makeStyles((theme) => ({
    button: {
        color: theme.palette.primary.main,
    }
}));

export const Cabeca = styled.header`
    min-height: 15rem;
    background-color:  ${theme.palette.dark.light};
    margin: 0px;
    padding: 0px;
`

export const HeaderButton = styled(Button)`
    color: ${theme.palette.primary.main};
    background-color: ${theme.palette.dark.main} !important;
`
export const AppHeader = styled.div`
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`
export const Banner = styled.div `
    display: inline-flex;
    width: 100% !important;
    margin: 0px;
    padding: 0px;
`

export const BannerImg = styled.img `
    width: 103%;
    margin-left: -4px;
    margin-top: -3%;
    padding: 0px;
    background-color: ${theme.palette.primary.light};
`

export const BannerText = styled.h1 `
    margin-top: 3rem;
    font-size: 5rem;
    font-weight: 500;
    color:tomato;
    font-family: Cinzel , serif;
    margin-left: 2rem;
`

export const NavbarListContainer = styled.div `
    display: inline-flex;
`

export const NavbarList = styled.li `
    margin-top: 0px;
    padding: 2px;
`
