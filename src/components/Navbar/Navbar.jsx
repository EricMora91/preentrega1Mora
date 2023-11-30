import CartWidget from '../CartWidget/CartWidget.jsx';
import './Navbar.css'


const Navbar = () => {
    return (
        <nav className="navbar-container">
                <img className="logo" src="./images/logo1024.png" alt="logo accesorios Li-On" />
                <ul className="container-list">
                    <li>
                        <button className="botonNavbar">Guantes</button>
                    </li>
                    <li>
                        <button className="botonNavbar">Unillos</button>
                    </li>
                    <li>
                        <button className="botonNavbar">Medias</button>
                    </li>
                    <li>
                        <button className="botonNavbar">Contacto</button>
                    </li>
                    <li>
                        <CartWidget/>
                    </li>
                </ul>
        </nav>
    )
}

export default Navbar;