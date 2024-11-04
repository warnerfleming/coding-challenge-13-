//Task 2

document.addEventListener(`DOMContentLoaded`, ()=>{
    const productContainer = document.getElementById(`productContainer`)
    const error = document.getElementById(`error`)

    fetch(`https://www.course-api.com/javascript-store-products`)
    .then(response => {
     if (!response.ok){
        throw new Error(`No response`)
     }
     return response.json()
    })
    .then(info =>{
        displayProducts(info)
    })

//Task 4
    .catch(errorOccur => {
        error.textcontent = `Error: Failure to display products`

    })
})

//Task 3 

function displayProducts(products){
    const productContainer = document.getElementById(`productContainer`)

    products.forEach(product =>{
        const productE = document.createElement(`div`)

        productE.innerHTML = 
        <img src="${product.fields.image[0].url}" alt="${product.fields.name}">
        </img>
        productContainer.appendChild(productE)
    })
}
