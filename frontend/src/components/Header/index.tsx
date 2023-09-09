import logo from '../../assets/img/logostarwarsblue.png';
import './style.css';

function Header() {
    return (
        <header>
            <div className="logo-container">
                <img src={logo} alt="AntD+React+Node-SWAPI" />
                <p>
                    Desenvolvido por <a href="https://linkedin.com/in/renatohvo">@renatohvo</a>
                </p>
            </div>
        </header>
    )
}

export default Header;
