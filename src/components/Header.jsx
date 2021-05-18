import './Header.css';
import {
    // BrowserRouter as Router,
    // HashRouter,
    // Switch,
    // Route,
    Link
} from "react-router-dom";
import { ThemeProvider } from '@material-ui/core/styles';
import {theme, useStyles, HeaderButton, AppHeader, Cabeca, BannerImg} from "./Theme.js"





function Header() {
    const estilo = useStyles();
    return (
        <Cabeca>
            <ThemeProvider theme={theme}>
                
                    <BannerImg src={'/image/bannerVazadoSombra.png'}/>
                
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