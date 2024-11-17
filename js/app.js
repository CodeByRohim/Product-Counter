
document.querySelectorAll(".card").forEach(card => {
let counterInput = card.querySelector(".counter .counterInput");
let plusBtn = card.querySelector(".plusBtn");
let minusBtn = card.querySelector(".minusBtn");
let addCart = card.querySelector(".add-cart");
let cardText = document.querySelector(".card-text1");
const productAndCost = {
  // "product": "Product 1",
  item: 0,
  cost: 0,
}




// alert products items and cost
function addAlert(){
  if(counterInput.value){
    alert(`You have (${counterInput.value}) item: Cost($${counterInput.value * 120}) in your cart.
 Total VAT : ${counterInput.value * 120} * 0.05 = $${counterInput.value * 120 * .05}
 Thank You.`) ;
  }
 else{
  cardText.textContent = `Your cart is empty.`
 }
}
addCart.addEventListener("click",addAlert)

//  update cardtext
function updateCardText() {
  if(counterInput.value > 0){
    cardText.textContent = `You have ${counterInput.value} item,cost ($${counterInput.value * 120}) in your cart.`;
    
  }
 else if(counterInput.value < 0){
    cardText.textContent = `Your products will be displayed here`;
  }
 else{
  cardText.textContent = `Your cart is empty.`;
 }
}
addCart.addEventListener("click",updateCardText);
// Increment counter
function updateCounter() {
let value = Number(counterInput.value);
  counterInput.value = value + 1;
  updateCardText();
}
plusBtn.addEventListener("click",updateCounter);


// Decrement counter
function ruinCounter() {
if(counterInput.value > 1){
  let value = Number(counterInput.value);
  counterInput.value = value - 1;
  updateCardText();
} else{
  counterInput.value = 1;
} 
  }
minusBtn.addEventListener("click",ruinCounter);

// Ensure the input only accepts positive number
function possitiveNumber(){
  let possitiveValue = Math.abs(counterInput.value);
  counterInput.value = possitiveValue;
  updateCardText();
}
counterInput.addEventListener("keyup",possitiveNumber); 

updateCardText();

});





























// let counterInput = document.querySelector(".counter .counterInput");
// let plusBtn =      document.querySelector(".plusBtn");
// let minusBtn =     document.querySelector(".minusBtn");
// let cardText =     document.querySelector(".card-text1");
// let addCart = document.querySelector(".add-cart");


// // alert products items and cost
// function addAlert(){
//   if(counterInput.value){
//     alert(`You have (${counterInput.value}) item: cost($${counterInput.value * 120}) in your cart.
//  Thank You.`) ;
//   }
//  else{
//   cardText.textContent = `Your cart is empty.`
//  }
// }
// addCart.addEventListener("click",addAlert)

// //  update cardtext
// function updateCardText() {
//   if(counterInput.value == 0){
//     cardText.textContent = `Your products will be displayed here`
//   }
//  else if(counterInput.value){
//     cardText.textContent = `You have ${counterInput.value} item,cost ($${counterInput.value * 120}) in your cart.`;
//   }
//  else{
//   cardText.textContent = `Your cart is empty.`
//  }
// }

// function updateCounter() {
// let value = Number(counterInput.value);
//   counterInput.value = value + 1;
//   updateCardText();
// }
// plusBtn.addEventListener("click",updateCounter);



// function ruinCounter() {
// if(counterInput.value > 1){
//   let value = Number(counterInput.value);
//   counterInput.value = value - 1;
//   updateCardText();
// } else{
//   counterInput.value = 1;
// } 
//   }
// minusBtn.addEventListener("click",ruinCounter);


// function possitiveNumber(){
//   let possitiveValue = Math.abs(counterInput.value);
//   counterInput.value = possitiveValue;
//   updateCardText();
// }
// counterInput.addEventListener("keyup",possitiveNumber); 

// updateCardText();


/*
// Select all product cards
document.querySelectorAll(".card").forEach(card => {
  // Get elements specific to each card
  const counterInput = card.querySelector(".counterInput");
  const plusBtn = card.querySelector(".plusBtn");
  const minusBtn = card.querySelector(".minusBtn");
  const addCart = card.querySelector(".add-cart");
  const cardText = document.querySelector(".card-text1");

  // Update the cart text dynamically
  function updateCardText() {
    const count = Number(counterInput.value);
    if (count === 0) {
      cardText.textContent = `Your products will be displayed here`;
    } else {
      const totalCost = count * 120;
      cardText.textContent = `You have ${count} item(s), cost ($${totalCost}) in your cart.`;
    }
  }

  // Handle Add to Cart button
  addCart.addEventListener("click", () => {
    const count = Number(counterInput.value);
    if (count > 0) {
      alert(`You have (${count}) item(s): cost ($${count * 120}) in your cart.\nThank You.`);
    } else {
      cardText.textContent = `Your cart is empty.`;
    }
  });

  // Increment counter
  plusBtn.addEventListener("click", () => {
    counterInput.value = Number(counterInput.value) + 1;
    updateCardText();
  });

  // Decrement counter
  minusBtn.addEventListener("click", () => {
    let count = Number(counterInput.value);
    if (count > 1) {
      counterInput.value = count - 1;
    } else {
      counterInput.value = 0;
    }
    updateCardText();
  });

  // Ensure the input only accepts positive numbers
  counterInput.addEventListener("keyup", () => {
    counterInput.value = Math.abs(counterInput.value) || 0;
    updateCardText();
  });

  // Initialize the card text
  updateCardText();
});
*/
