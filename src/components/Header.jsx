import './Header.css';
import { Button } from '@material-ui/core';
import {
    // BrowserRouter as Router,
    // HashRouter,
    // Switch,
    // Route,
    Link
} from "react-router-dom";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
      primary: {
        // light: será calculada com base em palette.primary.main,
        main: 'rgba(245, 166, 35, 1)',
        // dark: será calculada com base em palette.primary.main,
        // contrastText: será calculada para contrastar com palette.primary.main
      },
      secondary: {
        // light: '#0066ff',
        main: '#1e2021',
        // dark: será calculada com base palette.secondary.main,
        contrastText: '#ff4400',
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
        // secondary: "rgba(0, 0, 0, 0.54)",
        // disabled: "rgba(0, 0, 0, 0.38)",
        // hint: "rgba(0, 0, 0, 0.38)"
    }
  });

function Header() {
    return (
        <header>
        <ThemeProvider theme={theme}>
        <section class="banner">
            <img class="banner-img" alt="" src="/jardimdeefesto/ms-icon-310x310.png" />
            <h1 class='banner-text'>Jardim de Hefésto</h1>
        </section>
        <nav class="navbar">
            <ul class="navbar-list">
                <li>
                    <Link to="/home"><Button color="primary">Home</Button></Link>
                </li><li>
                    <Link to="/agora"><Button color="primary">Ágora</Button></Link>
                </li>
            </ul>
        </nav>
        </ThemeProvider>
        </header>
    );
};

export default Header;