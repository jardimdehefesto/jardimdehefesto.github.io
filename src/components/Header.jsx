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
import { makeStyles } from "@material-ui/core/styles"



const theme = createMuiTheme({
    palette: {
        primary: {
            main: 'rgba(245, 166, 35, 1)',
        },
        secondary: {
            main: '#1e2021',
            contrastText: '#ff4400',
        },
        contrastThreshold: 3,

        tonalOffset: 0.2,
    },
    text: {
        primary: "rgba(0, 0, 0, 0.87)",
    }
});

const useStyles = makeStyles((theme) => ({
    button: {
        color: 'rgba(245, 166, 35, 1)',
    }
}));

function Header() {
    const estilo = useStyles();
    return (
        <header>
            <ThemeProvider theme={theme}>
                <section class="banner">
                    <img class="banner-img" alt="" src="/jardimdehefesto/ms-icon-310x310.png" />
                    <h1 class='banner-text'>Jardim de Hefésto</h1>
                </section>
                <nav class="navbar">
                    <ul class="navbar-list">
                        <li>
                            <Link to="/home"><Button className={estilo.button} color="primary">Home</Button></Link>
                        </li>
                        <li>
                            <Link to="/agora"><Button className={estilo.button} color="primary">Ágora</Button></Link>
                        </li>
                        <li>
                            <Link to="/sobre"><Button className={estilo.button} color="primary">Sobre Nós</Button></Link>
                        </li>
                    </ul>
                </nav>
            </ThemeProvider>
        </header>
    );
};

export default Header;