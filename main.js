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

    .catch(errorOccur => {
        error.textcontent = `Error: Failure to display products`

    })
})
