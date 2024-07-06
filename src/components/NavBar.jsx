import "./navbar.css"
import CartWidget from "./CartWidget";
import Logo from "./Logo";
 const NavBar = () => {
  return (
    <header className="barra">
    <Logo/>
      
      <nav className='navbar'>
            <CartWidget/>
            
        <ul className="font-nav">
             
            <li><a href="">Inicio</a></li>
            <li><a href="">Shop</a></li>
            <li><a href="">Nosotros</a></li>
            <li><a href="">Contacto</a></li>
           
            

        </ul>
      
    </nav>
  
    </header>
    
  )
}
export default NavBar;