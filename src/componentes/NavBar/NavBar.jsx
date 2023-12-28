import CartWidget from './CartWidget/CartWidget';


import './NavBar.CSS';


const NavBar = () => {
  return (
    <header>
        <h1>tienda de vinos</h1>
        <nav>
            <ul>
                <li>dulce</li>
                <li>secos</li>
                <li>espumosos</li>
            </ul>
        </nav>

        <CartWidget/>
    </header>
  )
}

export default NavBar