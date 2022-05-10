const productsCart = [
    {
        nome: "Marcador de texto",
        preco: 1.00
    },
    {
        nome: "Caneta",
        preco: 1.50
    },
    {
        nome: "Lápis",
        preco: 1.00
    },
    {
        nome:"Agenda",
        preco: 10.00
    }
]
let soma = 0
function somaProduto(productsCart){
    for(let i = 0; i < productsCart.length; i++){
        soma += productsCart[i].preco
    }
    return soma
}


const h1     = document.createElement("h1")
h1.innerHTML ="<strong>Papelaria</strong>"
const button = document.createElement("button")
const main   = document.createElement("main")
const li     = document.createElement("li")
li.innerHTML = `${productsCart[0].nome}: R$${productsCart[0].preco} `
const li1    = document.createElement("li")
li1.innerHTML= `${productsCart[1].nome}: R$${productsCart[1].preco}`
const li2    = document.createElement("li")
li2.innerHTML= `${productsCart[2].nome}: R$${productsCart[2].preco}` 
const li3    = document.createElement("li")
li3.innerHTML= `${productsCart[3].nome}: R$${productsCart[3].preco}`
const li4    = document.createElement("li")
li4.innerHTML= `Total: R$${somaProduto(productsCart)}`
const ul     = document.createElement("ul")
ul.appendChild(li)
ul.appendChild(li1)
ul.appendChild(li2)
ul.appendChild(li3)
ul.appendChild(li4)
ul.appendChild(button)
main.appendChild(ul)
document.querySelector("body").appendChild(main)
document.querySelector("body").appendChild(h1)
button.innerHTML = "Finalizar"

const detalhes = [soma, button]


