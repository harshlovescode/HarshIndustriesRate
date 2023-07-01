document.getElementById('calculator-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    var priceInput = document.getElementById('price-input');
    var quantityInput = document.getElementById('quantity-input');
    var resultDiv = document.getElementById('result');
    
    var priceWithTax = parseFloat(priceInput.value);
    var quantity = parseInt(quantityInput.value);
    
    if (!isNaN(priceWithTax) && !isNaN(quantity) && quantity > 0) {
      var unitPrice = calculateUnitPrice(priceWithTax, quantity);
      resultDiv.textContent = 'The unit price is: ' + unitPrice.toFixed(2);
      resultDiv.classList.remove('hidden');
    } else {
      resultDiv.textContent = 'Invalid input. Please enter valid values.';
      resultDiv.classList.remove('hidden');
    }
    
    priceInput.value = '';
    quantityInput.value = '';
  });
  
  function calculateUnitPrice(priceWithTax, quantity) {
    var priceWithoutTax = priceWithTax / 1.18;
    var unitPrice = priceWithoutTax / quantity;
    return unitPrice;
  }
  