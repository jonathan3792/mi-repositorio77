import { useState, useEffect } from "react";
import { getUnProducto } from "../../asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);
    const { idItem } = useParams();

    useEffect(() => {
        getUnProducto(idItem)
            .then(res => setProducto(res))
            .catch(error => console.error("Error al obtener el producto:", error));
    }, [idItem]);

    return (
        <div>
            {producto && <ItemDetail {...producto} />}
        </div>
    );
}

export default ItemDetailContainer;
