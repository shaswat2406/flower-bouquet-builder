// Basic Version - Simple Vanilla JavaScript (Easy for Viva)

// 1. Flower Prices (in Rupees)
const prices = {
  rose: 30,
  lily: 70,
  carnation: 35,
  sunflower: 50
};

// 2. Stores selected quantities
const quantities = {
  rose: 0,
  lily: 0,
  carnation: 0,
  sunflower: 0
};

// 3. Increment / Decrement Quantity
function changeQty(flower, amount) {
  // Prevent negative numbers
  if (quantities[flower] + amount >= 0) {
    quantities[flower] = quantities[flower] + amount;
    document.getElementById("qty-" + flower).innerText = quantities[flower];
    calculateTotal();
  }
}

// 4. Calculate Bill Total
function calculateTotal() {
  // Calculate flower subtotal
  let flowerTotal = (quantities.rose * prices.rose) +
                    (quantities.lily * prices.lily) +
                    (quantities.carnation * prices.carnation) +
                    (quantities.sunflower * prices.sunflower);

  // Get selected packaging price
  let wrapPrice = parseInt(document.getElementById("wrapSelect").value);

  // Calculate final total
  let finalAmount = flowerTotal + wrapPrice;

  // Update numbers on page
  document.getElementById("flowerSubtotal").innerText = "₹" + flowerTotal;
  document.getElementById("packagingCost").innerText = "₹" + wrapPrice;
  document.getElementById("grandTotal").innerText = "₹" + finalAmount;

  return { flowerTotal, finalAmount };
}

// 5. Confirm Order
function placeOrder() {
  let { flowerTotal, finalAmount } = calculateTotal();
  let name = document.getElementById("custName").value.trim();
  let phone = document.getElementById("custPhone").value.trim();
  let address = document.getElementById("custAddress").value.trim();

  // Basic validation
  if (flowerTotal === 0) {
    alert("Please select at least 1 flower!");
    return;
  }
  if (name === "" || phone === "" || address === "") {
    alert("Please fill in all delivery details (Name, Phone, Address)!");
    return;
  }

  // Success Confirmation
  alert("🎉 Order Placed Successfully!\n\nCustomer: " + name + "\nPhone: " + phone + "\nAddress: " + address + "\nTotal Amount: ₹" + finalAmount + "\n\nThank you for choosing PetalCraft Florist!");
}
