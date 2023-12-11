import CartWidget from "../CartWidget/CartWidget";
import "../NavBar/NavBar.css";

const NavBar = () => {
  return (
    <nav className='NavBar'>
        <ul>
            <li>Inicio</li>
            <li>Catálogo</li>
            <li>Amorcitos</li>
            <li>Contacto</li>
           <li>
            <CartWidget />
            </li> 
        </ul>
    </nav>
  );
};

export default NavBar;