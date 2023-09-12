import logo from '../../assets/img/logostarwarsblue.png';
import './style.css';

function Header() {
    return (
        <header>
            <div className="logo-container">
                <img src={logo} alt="AntD+React+Node-SWAPI" />
            </div>
        </header>
    )
}

export default Header;
