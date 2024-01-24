import cartwitget from '../CartWitget/cartwitget'
import './NavBar.css'
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <header>
            <Link to="/">
           
            <h1>Tienda Mia</h1>
            </Link>
            <nav>
                <ul>
                    
                <li> 
                    <NavLink to="/categoria/2">
                    vinos espumosos
                        </NavLink>
                        </li>
                <li>
                    <NavLink to="/categoria/3">
                    vinos tintos
                    </NavLink>
                </li>
            </ul>
            </nav>
           
            <cartwitget/>
        </header>
    )
}

export default NavBar