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
        <nav class="navbar">
            <ul>
                <li>
                    <Link to="/home">Home</Link>
                </li><li>
                    <Link to="/agora">Ágora</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Header;