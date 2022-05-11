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
button.innerHTML = "Finalizar"
const main   = document.createElement("main")
const li     = document.createElement("li")
li.innerHTML = `${productsCart[0].nome}: R$${productsCart[0].preco} `
const li1    = document.createElement("li")
li1.innerHTML= `${productsCart[1].nome}: R$${productsCart[1].preco}`
const li2    = document.createElement("li")
li2.innerHTML= `${productsCart[2].nome}: R$${productsCart[2].preco}` 
const li3    = document.createElement("li")
li3.innerHTML= `${productsCart[3].nome}: R$${productsCart[3].preco}`

const detalhes = [somaProduto(productsCart), button]
const ul     = document.createElement("ul")
//Button e total

const ul2    = document.createElement("ul")
const li4    = document.createElement("li")
li4.appendChild(detalhes[1])
const li5    = document.createElement("li")
li5.innerHTML= `Total: R$${detalhes[0]}`

ul.appendChild(li)
ul.appendChild(li1)
ul.appendChild(li2)
ul.appendChild(li3)
main.appendChild(ul)
ul2.appendChild(li4)
ul2.appendChild(li5)
ul.appendChild(ul2)
document.querySelector("body").appendChild(main)
document.querySelector("body").appendChild(h1)
li5.setAttribute("id", "total")
li4.setAttribute("id", "finalizar")
ul2.setAttribute("id", "lista2")
console.log(main)

