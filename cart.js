if (document.readyState == 'loading') {
   document.addEventListener('DOMcontentLoaded', ready)
} else{
   ready()
}
function ready() {

var removeCartItemButtons = document.getElementsByClassName('remove-button') 

var removeCartTable = document.getElementsByClassName('cart-table') 


 for (var i = 0; i < removeCartItemButtons.length; i++){
    var cartButton = removeCartItemButtons[i]
    cartButton.addEventListener('click', removeCartItem)
 } 

 var quantityInputs = document.getElementsByClassName('cart-quantity-input')
 for (var i = 0; i < quantityInputs.length; i++){
   var input = quantityInputs[i]
   input.addEventListener('click', quantityChanged)
   } 

 var addToCartButtons = document.getElementsByClassName('btn')
 for (var i = 0; i < addToCartButtons.length; i++){
   var button = addToCartButtons[i]
   button.addEventListener('click', addToCartClicked)
 }

}

function removeCartItem(event){
   var cartButtonClicked = event.target
   cartButtonClicked.parentElement.parentElement.parentElement.parentElement.remove()
   updateCartTotal()
}

function quantityChanged(event){
   var input = event.target
   if(isNaN(input.value) || input.value <= 0) {
      input.value = 1
   }
   updateCartTotal()
}

function addToCartClicked(event){
   var button = event.target
   var shopItem = button.parentElement.parentElement.parentElement
   console.log(shopItem)

//    var title = shopItem.getElementsByClassName('shop-item-title')[2].innerText
   // console.log(title)
}

 function updateCartTotal(){
     var cartItemContainer = document.getElementsByClassName('cart-table-container')[0]
     var cartRows = document.getElementsByClassName('cart-table')
     var total = 0
     for (var i = 0; i < cartRows.length; i++){
         var cartRow = cartRows[i]
         var priceElement = cartRow.getElementsByClassName('cart-price')[0]
         var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]

         var price = parseFloat(priceElement.innerText.replace('$', ''))
         var quantity = quantityElement.value
         total = total + (price * quantity)
 }
 total = Math.round(total * 100) / 100
 document.getElementsByClassName('cart-total-price')[0].innerText = '$' +  total
}