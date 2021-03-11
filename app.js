// // Phone Increase

document.getElementById('phone-increase').addEventListener('click', function(){
    // const phoneAmount = document.getElementById('phone-amount').value;
    // const phoneIncreaseNumber = parseInt(phoneAmount);
    // const phoneNewIncreaseNumber = phoneIncreaseNumber + 1;
    // document.getElementById('phone-amount').value = phoneNewIncreaseNumber;
    // const phoneTotal = phoneNewIncreaseNumber *1219;
    // document.getElementById('phone-price').innerText = phoneTotal;
    handleProductPrice('phone',true);
 })

// Phone Decrease

document.getElementById('phone-decrease').addEventListener('click', function(){
    // const phoneAmount = document.getElementById('phone-amount').value;
    // const phoneDecreaseNumber = parseInt(phoneAmount);
    // const phoneNewDecreaseNumber = phoneDecreaseNumber -1;
    // document.getElementById('phone-amount').value = phoneNewDecreaseNumber;
    // const phoneTotal = phoneNewDecreaseNumber *1219;
    // document.getElementById('phone-price').innerText = phoneTotal;
    handleProductPrice('phone',false);
})


// Function For Phone Increase & Decrease
function handleProductPrice(product, isIncrease){
    const productAmount = document.getElementById(product + '-amount').value;
    const productNumber = parseInt(productAmount);
    // const phoneNewDecreaseNumber = phoneDecreaseNumber -1;
    let productNewNumber =0;
    if(isIncrease ==true){
        productNewNumber = productNumber +1;
    }
    if(isIncrease == false && productNumber > 0){
        productNewNumber = productNumber -1;
    }
    document.getElementById(product+ '-amount').value = productNewNumber;
    // const productTotal = productNewNumber *1219;
    let productTotal =0;
    if(product == 'phone'){
        productTotal = productNewNumber *1219;
    }
    if(product == 'case'){
        productTotal = productNewNumber *59;
    }
    document.getElementById(product + '-price').innerText = productTotal;

    calculateTotalPrice();
}


//  Case Increase

document.getElementById('case-increase').addEventListener('click',function(){
    handleProductPrice('case', true)
})
// Case Decrease
document.getElementById('case-decrease').addEventListener('click',function(){
    handleProductPrice('case', false)
})


function calculateTotalPrice(){
    // const phoneAmount = document.getElementById('phone-amount').value;
    // const phoneAmountNumber = parseInt(phoneAmount);

    const phoneAmountNumber = getInputValue('phone');

    // const caseAmount = document.getElementById('case-amount').value;
    // const caseAmountNumber= parseInt(caseAmount);

    const caseAmountNumber = getInputValue('case');

    const totalPrice = phoneAmountNumber * 1219 + caseAmountNumber *59;
    document.getElementById('price-total').innerText = totalPrice;

    const tax = Math.round(totalPrice * 0.1);
    document.getElementById('tax-id').innerText = tax;

    const grandTotal = totalPrice + tax;
    document.getElementById('grand-total').innerText = grandTotal;
}

function getInputValue(product){
    const productAmount = document.getElementById( product+ '-amount').value;
    const productAmountNumber= parseInt(productAmount);
    return productAmountNumber;
}




















// document.getElementById('phone-increase').addEventListener('click', function(){
//     // const phoneAmount = document.getElementById('phone-amount').value;
//     // const phoneIncreaseNumber = parseInt(phoneAmount);
//     // const phoneNewIncreaseNumber = phoneIncreaseNumber + 1;
//     // document.getElementById('phone-amount').value = phoneNewIncreaseNumber;
//     // const phoneTotal = phoneNewIncreaseNumber * 1219;
//     // document.getElementById('phone-price').innerText = phoneTotal;
//     handleProductPrice('phone', true);

// })

// // Phone Decrease

// document.getElementById('phone-decrease').addEventListener('click', function(){
//     // const phoneDecrease = document.getElementById('phone-amount').value;
//     // const phoneDecreaseNumber = parseInt(phoneDecrease);
//     // const phoneNewDecreaseNumber = phoneDecreaseNumber -1;
//     // document.getElementById('phone-amount').value = phoneNewDecreaseNumber;
//     // const phoneTotal = phoneNewDecreaseNumber *1219;
//     // document.getElementById('phone-price').innerText = phoneTotal;

//     handleProductPrice('phone', false);
     
// })


// // Function For Phone Increase & Decrease
// function handleProductPrice(product, isIncrease){
//     const productAmount = document.getElementById(product+'-amount').value;
//     const productAmountNumber = parseInt(productAmount);
//     // const phoneNewDecreaseNumber = phoneDecreaseNumber -1;

//     let productNewNumber = 0;
//     if(isIncrease ==true){
//         productNewNumber = productAmountNumber +1;
//     }
//     if(isIncrease == false && productAmountNumber > 0){
//         productNewNumber = productAmountNumber -1;
//     }

//     document.getElementById(product+'-amount').value = productNewNumber;
//     // const productTotal = productNewNumber *1219;

//     let productTotal =0;

//     if(product == 'phone'){
//        productTotal = productNewNumber *1219;
//     }
//     if(product == 'case'){
//         productTotal = productNewNumber * 59;
//     }

//     document.getElementById(product + '-price').innerText = productTotal;

//     calculateTotalPrice();
// }


// // For Case

// // Increase
// document.getElementById('case-increase').addEventListener('click', function(){
//     handleProductPrice('case', true)
// })
// // Decrease
// document.getElementById('case-decrease').addEventListener('click', function(){
//     handleProductPrice('case', false)
// })


// function calculateTotalPrice(){
//     // const phoneAmount = document.getElementById('phone-amount').value;
//     // const phoneAmountNumber = parseInt(phoneAmount);
//         const phoneAmountNumber = getInputValue('phone');

//     // const caseAmount = document.getElementById('case-amount').value;
//     // const caseAmountNumber = parseInt(caseAmount);
//         const caseAmountNumber= getInputValue('case');

//     const totalPrice = phoneAmountNumber * 1219 + caseAmountNumber * 59;

//     document.getElementById('price-total').innerText = totalPrice;

//     const tax = Math.round(totalPrice * 0.1);
//     document.getElementById('tax-id').innerText = tax;
//     const grandTotal = totalPrice + tax;
//     document.getElementById('grand-total').innerText = grandTotal;
// }

// function getInputValue(product){
//     const productAmount = document.getElementById(product + '-amount').value;
//     const productAmountNumber = parseInt(productAmount);
//     return productAmountNumber;
// }
