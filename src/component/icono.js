const productos = [
    {
        id: 1,
        nombre: "Remera",
        descripcion: "Remera es un producto de la familia de remeras",
        precio: 15,
        stock: 10,
    },
    {
        id: 2,
        nombre: "Short",
        descripcion: "Short es un producto de la familia de shorts",
        precio: 25,
        stock: 9,
    },
    {
        id: 3,
        nombre: "Pantalon",
        descripcion: "Pantalon es un producto de la familia de pantalones",
        precio: 35,
        stock: 8,
    },
    {
        id: 4,
        nombre: "Camiseta",
        descripcion: "Camiseta es un producto de la familia de camisetas",
        precio: 45,
        stock: 7,
    },
]

const promesa = new Promise((resolve, reject) => {
    if(false){
    resolve ("Esto se resolvio")
    }
    reject ("no funciono")
})

console.log(promesa)

promesa.then((data) => {console.log(data)}).catch((err) => {console.log(err)})
/*
fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))
*/

for (let index = 0; index < productos.length; index++) {
    const element = productos[index];
    console.log(element)
    
}

const persona1 = {nombre: "Pablo"}
const persona2 = persona1

console.log(persona1)
console.log(persona2)

persona1.nombre = "Micaela"

console.log(persona1)
console.log(persona2)

const persona3 = {nombre: "Betty"}
const persona4 = {...persona3}
persona3.nombre= "Roberto"
console.log(persona3)
console.log(persona4)

const dataHTML = []

productos.forEach(e => {
    let html = 
})