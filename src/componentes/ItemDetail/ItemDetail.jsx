import react from 'react';
import './ItemDetail.css';

const ItemDetail = ({id, nombre, precio, img}) => {
    return(  
    <div className='contenedorItem'>
        <h2>nombre: {nombre} </h2>
        <h3>precio: {precio} </h3>
        <p> ID: {id} </p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores aspernatur fugit esse magni minima culpa pariatur repellendus omnis ipsam at nemo eaque quasi numquam nam, dignissimos quae voluptates laudantium explicabo.</p>
        <img src="img" alt="nombre" />


    </div>
    )
}


export default ItemDetail