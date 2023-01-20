// ITERATION 1

function updateSubtotal(product) {
  let priceElement = document.querySelector(".price span").innerText;
  let quantityElement = document.querySelector(".quantity input").value;
  // let subtotalPrice = parseInt(priceElement * quantityElement);
  let subTotalElement = document.querySelector(".subtotal span").innerText;

  console.log(
    'Calculating subtotal, yey!',
    priceElement,
    quantityElement,
    subTotalElement    )

    document.querySelector(".subtotal span").innerText = parseInt(priceElement * quantityElement).toFixed(2)  
    

    return subTotalElement; 
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2

  const products = document.getElementsByClassName("product")
   for(let i = 0; i < products.length; i++) {



    updateSubtotal(products[i])
 }

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click',()=>{
    // let productName = document.querySelector(".name span").innerText
    // console.log(productName) 
    calculateAll()
  });

});
