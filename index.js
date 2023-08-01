const ProductManager = require("./productManager")


const pm = new ProductManager('./products.json')
const test = async () => {
    let products = await pm.getProducts()
    console.log('Productos:', products) 
    await pm.addProduct('Producto prueba', 'Este es un producto de prueba', 200, 'Sin imagen', 'abc123', 25) 
    products = await pm.getProducts()
    console.log('Productos:', products) 
    await pm.addProduct('Producto prueba', 'Este es un producto de prueba', 200, 'Sin imagen', 'abc123', 25)
    
    let product = await pm.getProductById(1) 
    console.log(product) 
    product = await pm.getProductById(0)
    console.log(product) 

    await pm.updateProduct({id: 0, stock: 24})
    product = await pm.getProductById(0)
    console.log(product)

    await pm.deleteProduct(1)
    await pm.deleteProduct(0)
    products = await pm.getProducts()
    console.log('Productos:', products) 
}

test()
