const billInput = document.getElementById('bill_value')
const tipInput= document.getElementById('tip_value')


billInput.value = '0';
tipInput.value = '0';
totalPrice();

billInput.addEventListener("input", totalPrice)
function totalPrice() {
    
}