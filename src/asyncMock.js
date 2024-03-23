const products = [
    {id: 1, name: "Playstation 4", img: "https://res.cloudinary.com/dkekabdhg/image/upload/v1707348295/4859741fc0a30dbefd88d70f23ad31d5_z3ecnn.jpg", price: 500000, category: "playstation", description: "Playstation 4", stock: 37},
    {id: 2, name: "Playstation 5", img: "https://res.cloudinary.com/dkekabdhg/image/upload/v1707348194/cd43672a63f6356bd4199d4ae6d1d480_whndaw.jpg", price: 1200000, category: "playstation", description: "Playstation 5", stock: 24},
    {id: 3, name: "Xbox series S", img: "https://res.cloudinary.com/dkekabdhg/image/upload/v1707348370/0e6910baa26ca378e54da0b05475e60b_olzuzw.jpg", price: 550000, category: "xbox", description: "Xbox series S", stock: 49},
    {id: 4, name: "Xbox series X", img: "https://res.cloudinary.com/dkekabdhg/image/upload/v1707348370/0e6910baa26ca378e54da0b05475e60b_olzuzw.jpg", price: 850000, category: "xbox", description: "Xbox series X", stock: 31},
    {id: 5, name: "Nintendo Switch", img: "https://res.cloudinary.com/dkekabdhg/image/upload/v1707348337/24b50b4196e3b4471902ea5243670f56_ped7yr.jpg", price: 550000, category: "portatil", description: "Nintendo Switch", stock: 25},
    {id: 6, name: "Steam Deck", img: "https://res.cloudinary.com/dkekabdhg/image/upload/v1707348471/ae1e7735bd78ee76704bcf3f482b9c8d_f7jmdb.jpg", price: 1300000, category: "portatil", description: "Steam Deck", stock: 37},
];

export const getProducts = () => {
return new Promise((resolve, reject) => {
    if (products.length > 0) {
        setTimeout(() => {
        resolve(products);
        }, 2000);
    } else {
        reject("No hay productos");
    }
    });
};

export const getProduct = (id) => {
return new Promise((resolve, reject) => {
    if (products.length > 0) {
        const item = products.find((product) => product.id === id);

        setTimeout(() => {
        if (item) {
            resolve(item);
        } else {
            reject(`No se encuentra el producto con el id ${id}`);
        }
        }, 500);
    } else {
        reject("No hay productos");
    }
    });
};