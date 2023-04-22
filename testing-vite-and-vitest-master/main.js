import './style.css'
import './src/components/cardElement/cardElement.js'

const productContainer = document.querySelector('#products-container');
const categoryButtons = document.querySelectorAll('#categories button');


categoryButtons.forEach(btn => btn.addEventListener('click', ()=> setCategory(btn)));

async function getData(category){
    try {
    let response = await fetch('https://apimocha.com/json-logitech-s8/all-products');
    let data = await response.json();
    console.log(category);
    organiceData(data,category);
    } catch (e) {
    console.log(e);
        }
}

console.log(getData());
// fetch('https://apimocha.com/json-logitech-s8/all-products')
// .then(response => response.json())
// .then(data => console.log(data));


function organiceData(array, category){
  let filteredProducts = [];
  productContainer.innerHTML='';
  if(!category){
    filteredProducts = array;
  } else {
    filteredProducts = array.filter(product => product.type === category)
  }

  filteredProducts.forEach(product => {
    const productObj = document.createElement('card-element');
    productObj.setAttribute('name', product.name);
    productObj.setAttribute('description', product.description);
    productObj.setAttribute('price', product.price);
    productObj.setAttribute('image', product.url[0]);
    productObj.setAttribute('type', product.type);
    productContainer.append(productObj);
    
});
}

function setCategory(elem){
  const category = elem.textContent;
  console.log(elem.textContent);
  getData(category)
}