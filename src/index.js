//console.log('%c HI', 'color: firebrick')

//CHALLENGE ONE
// const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
// Add JavaScript that:

// on page load, fetches the images using the url above ⬆️
// parses the response as JSON
// adds image elements to the DOM for each 🤔 image in the array

// document.addEventListener("DOMContentLoaded", () => {
//     const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
//     console.log(imgUrl)
// })

const container = document.querySelector("#dog-image-container")
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = "https://dog.ceo/api/breeds/list/all"
const ulContainer = document.querySelector("#dog-breeds")
const dropDown = document.querySelector("#breed-dropdown")
let breedsArray = []

ulContainer.addEventListener('click',handleClick)
dropDown.addEventListener('change', handleChange)

function  getImages(){
fetch(imgUrl)
.then(resp => resp.json())
.then(images => {
    const imgs = images.message
    let imgsArray =createImgElement(imgs) 
    renderImg(imgsArray)

})
}
function createImgElement(imgs){
    return imgs.map((img) => {
        let i = `<img src=${img}>`
        return i
})

   
}

function renderImg(imgsArray){
    imgsArray.forEach(element => {
    container.innerHTML += element

})
}

function renderElement(element){
    ulContainer.innerHTML += element
}



//CHALLENGE TWO
// js
// const breedUrl = "https://dog.ceo/api/breeds/list/all";
// ```

// After the first challenge is completed, add JavaScript that:

// - on page load, fetches all the dog breeds using the url above ⬆️
// - adds the breeds to the page in the `<ul>` provided in `index.html`

function  getBreeds(){
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(breeds => {
        breedsArray = Object.keys(breeds.message)
        const breedsLis = createLiElement(breedsArray)
        renderLis(breedsLis)
        createLiElement(breedsArray)
    })
    }
    

    function createLiElement(breedsArray){
        return breedsArray.map((breed) => {
            let li = `<li>${breed}</li>`
            return li
    })
    
       
    }

    function renderLis(breedsLis){
        breedsLis.forEach(element => {
        renderElement(element)
    
    })
    }

    
    //CHALLENGE THREE

//     Once all of the breeds are rendered in the `<ul>`, add JavaScript so that, when
// the user clicks on any one of the `<li>`s, the font color of that `<li>`
// changes. This can be a color of your choosing.

function handleClick(event){
    if (event.target.nodeName === 'LI'){
   if(event.target.style.color === 'red'){
    event.target.style.color= 'black'
   } else {
    event.target.style.color = 'red'
   }
   }
}





//    ## Challenge 4

// Once we are able to load _all_ of the dog breeds onto the page, add JavaScript
// so that the user can filter breeds that start with a particular letter using a
// [dropdown](https://www.w3docs.com/learn-html/html-select-tag.html).

// For example, if the user selects 'a' in the dropdown, only show the breeds with
// names that start with the letter a. For simplicity, the dropdown only includes
// the letters a-d. However, we can imagine expanding this to include the entire
// alphabet.

// ---

// ![dog ceo](https://dog.ceo/img/dog.jpg)

function handleChange(event){
    const letter = event.target.value
    
    //FILTER OUT THE BREEDS THAT START WITH THE LETTER.
    const filteredBreeds = breedsArray.filter(breed => breed.startsWith(letter))
    const filteredBreedsLi =  createLiElement(filteredBreeds)
    ulContainer.innerHTML = ''
    renderLis(filteredBreedsLi)

    
}

    getBreeds()
    getImages()
    