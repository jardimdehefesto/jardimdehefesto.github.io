import './Header.css';
import {
    // BrowserRouter as Router,
    // HashRouter,
    // Switch,
    // Route,
    Link
} from "react-router-dom";

function Header() {
    return (
        <header>
        <section class="banner">
            <img class="banner-img" src="/jardimdeefesto/ms-icon-310x310.png" />
        </section>
        <nav class="navbar">
            <ul class="navbar-list">
                <li>
                    <Link to="/home">Home</Link>
                </li><li>
                    <Link to="/agora">Ágora</Link>
                </li>
            </ul>
        </nav>
        </header>
    );
};

export default Header;