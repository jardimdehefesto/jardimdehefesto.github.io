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
                    <Link to="/">Home</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Header;