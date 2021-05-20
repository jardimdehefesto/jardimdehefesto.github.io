import { Link } from '@material-ui/core';
import './Header.css';
import {HeaderButton, Cabeca, BannerImg, NavbarListContainer, NavbarList} from "./Theme.js"









function Header() {
    return (
        <Cabeca>
                    <BannerImg src={'/image/jardimdeHefestosombra2.png'}/>
                <NavbarListContainer class="navbar">
                    <ul class="navbar-list">
                        <NavbarList>
                            <Link to="/home"><HeaderButton>Home</HeaderButton></Link>
                        </NavbarList>
                        <NavbarList>
                            <Link to="/agora"><HeaderButton>Ágora</HeaderButton></Link>
                        </NavbarList>
                        <NavbarList>
                            <Link to="/sobre"><HeaderButton>Sobre Nós</HeaderButton></Link>
                        </NavbarList>
                    </ul>
                </NavbarListContainer>
        </Cabeca>
    );
};

export default Header;