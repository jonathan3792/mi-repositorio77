const productos = [
    {id: "1",nombre : "vinos tintos", precio: 500, img: "../img/vinotinto.jpg",idCat: "2"},
    {id: "2",nombre : "vinos blancos", precio: 400, img: "../img/vinoblanco.jpg",idCat: "2"},
    {id: "3",nombre : "vinos dulces", precio: 300, img: "../img/vinodulce.jpg",idCat: "3"},
    {id: "4",nombre : "vinos espumosos", precio: 200, img: "../img/vinoespumoso.jpg",idCat: "3"},

]

export const getProductos = () => {
    return new Promise ( (resolve)  =>  {
        setTimeout( ()=> {
            resolve(productos);
            
        }, 100);

    })
}




export const getProductosPorCategoria = () => {
    return new promise (resolve => {
        setTimeout (() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria)
            resolve (productosCategoria);
        }, 100)
    })
}