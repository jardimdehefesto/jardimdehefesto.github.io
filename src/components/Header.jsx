import './Header.css';
import {HeaderButton, Cabeca, BannerImg, NavbarListContainer, NavbarList, Endereco} from "./Theme.js"









function Header() {
    return (
        <Cabeca>
                    <BannerImg src={'/image/jardimdeHefestosombra2.png'}/>
                <NavbarListContainer class="navbar">
                    <ul class="navbar-list">
                        <NavbarList>
                            <Endereco to="/home"><HeaderButton>Home</HeaderButton></Endereco>
                        </NavbarList>
                        <NavbarList>
                            <Endereco to="/agora"><HeaderButton>Ágora</HeaderButton></Endereco>
                        </NavbarList>
                        <NavbarList>
                            <Endereco to="/sobre"><HeaderButton>Sobre Nós</HeaderButton></Endereco>
                        </NavbarList>
                    </ul>
                </NavbarListContainer>
        </Cabeca>
    );
};

export default Header;