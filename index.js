class ProductManager {
    static idIncremento = 0 ;

    constructor() {
        this.products = [];
    }

    getProducts() {
        return this.products;
    }
    
    addProducts( titulo, descripcion, precio, imagen, codigo, stock) {
        ProductManager.idIncremento++;
        const code = this.products.find(c => c.codigo === codigo);
        const nuevoProducto = {
            id: ProductManager.idIncremento,
            title: titulo,
            desc: descripcion,
            price: precio,
            thumbnai: imagen,
            codigo: codigo,
            stock: stock,
            
        }
    
    if(code) {
        console.error ('Este codigo ya existe');
        return;
    }
        return this.products.push(nuevoProducto);
    }

    getProductsById(IdP) {
        const encontrar = this.products.findIndex(e => e.id ===IdP);
        if(encontrar < 0) {
            console.error('Not found');
            return;
        }
    const productoEncontrado = this.products[encontrar];
    return productoEncontrado; 
    
    }
};

const myProductManager = new ProductManager ();
console.log(myProductManager.getProducts());
console.log(myProductManager.addProducts('Producto Prueba','Este es un producto de prueba', 300, 'Sin imagen', 'abc123', 25));
console.log(myProductManager.addProducts('producto prueba','Este es un producto de prueba', 300, 'Sin imagen', 'abc123', 25));
console.log(myProductManager.addProducts('Este es un producto de prueba', 300, 'Sin imagen', 'abc1234', 25));
console.log(myProductManager.getProducts());
console.log(myProductManager.getProductsById(1));

