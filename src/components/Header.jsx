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
import {theme, useStyles, HeaderButton, AppHeader, Cabeca, BannerImg} from "./Theme.js"





function Header() {
    const estilo = useStyles();
    return (
        <Cabeca>
            <ThemeProvider theme={theme}>
                <section class="banner">
                    {/* <img class="banner-img" alt="" src="/ms-icon-150x150.png" />
                    <h1 class='banner-text'>Jardim de Hefésto</h1> */}
                    <BannerImg src={'/image/jardimdeHefestosombra.png'}/>
                </section>
                <nav class="navbar">
                    <ul class="navbar-list">
                        <li>
                            <Link to="/home"><HeaderButton>Home</HeaderButton></Link>
                        </li>
                        <li>
                            <Link to="/agora"><HeaderButton>Ágora</HeaderButton></Link>
                        </li>
                        <li>
                            <Link to="/sobre"><HeaderButton>Sobre Nós</HeaderButton></Link>
                        </li>
                    </ul>
                </nav>
            </ThemeProvider>
        </Cabeca>
    );
};

export default Header;