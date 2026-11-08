// PetalCraft Florist - 1st Semester College Mini-Project
// Clean, readable Vanilla JavaScript for viva examination

// 1. Data Configurations (Local Florist Rates in INR)
const FLOWERS = { 
  rose: ["Red Roses", 30], 
  lily: ["White Lilies", 70], 
  carnation: ["Pink Carnations", 35], 
  sunflower: ["Yellow Sunflowers", 50] 
};

const WRAPPINGS = {
  kraft: ["Kraft Paper Rustic", 49, "📜", "Eco-friendly wrap with raw jute twine string"],
  satin: ["Luxury Satin Wrap", 99, "🎀", "Silky premium paper with velvet ribbon"],
  vase: ["Handmade Glass Vase", 199, "🏺", "Fluted crystal-clear cylinder vase"],
  basket: ["Artisan Woven Basket", 249, "🧺", "Natural wicker basket with floral foam"]
};

const quantities = { rose: 0, lily: 0, carnation: 0, sunflower: 0 };
let isPhoneVerified = false;

// 2. Change Flower Stem Quantity (+ / -)
function changeQty(flower, change) {
  quantities[flower] = Math.max(0, quantities[flower] + change);
  document.getElementById(`qty-${flower}`).textContent = quantities[flower];
  document.querySelector(`.flower-card[data-flower="${flower}"]`)?.classList.toggle('has-selected', quantities[flower] > 0);
  updateSummary();
}

// 3. Real-time Calculation & Order Summary Update
function updateSummary() {
  const stemsList = document.getElementById('stemsList');
  let stemSubtotal = 0, totalStems = 0;
  stemsList.innerHTML = '';

  for (const [key, [name, price]] of Object.entries(FLOWERS)) {
    const qty = quantities[key];
    if (qty > 0) {
      totalStems += qty;
      const cost = qty * price;
      stemSubtotal += cost;
      stemsList.innerHTML += `<li><span>${qty}× ${name}</span><strong>₹${cost}</strong></li>`;
    }
  }

  if (totalStems === 0) {
    stemsList.innerHTML = '<li class="empty-state">No flower stems added yet. Click + above!</li>';
  }

  const wrapKey = document.getElementById('wrappingSelect').value;
  const [wrapName, wrapPrice, wrapIcon, wrapDesc] = WRAPPINGS[wrapKey] || WRAPPINGS.kraft;
  const grandTotal = stemSubtotal + wrapPrice;
  const shortfall = Math.max(0, 129 - grandTotal);

  document.getElementById('summaryPackagingName').textContent = wrapName;
  document.getElementById('summaryPackagingCost').textContent = `₹${wrapPrice}`;
  document.getElementById('summaryStemSubtotal').textContent = `₹${stemSubtotal}`;
  document.getElementById('grandTotal').textContent = `₹${grandTotal}`;

  const hint = document.getElementById('minOrderHint');
  if (hint) {
    hint.className = grandTotal >= 129 ? 'min-order-hint min-order-met' : 'min-order-hint';
    hint.innerHTML = grandTotal >= 129 
      ? '✓ Minimum order value reached (₹129+)' 
      : `⚠️ Add ₹${shortfall} more to reach minimum order value of ₹129`;
  }

  if (document.getElementById('wrapPreviewIcon')) document.getElementById('wrapPreviewIcon').textContent = wrapIcon;
  if (document.getElementById('wrapPreviewTitle')) document.getElementById('wrapPreviewTitle').textContent = `${wrapName} (+₹${wrapPrice})`;
  if (document.getElementById('wrapPreviewDesc')) document.getElementById('wrapPreviewDesc').textContent = wrapDesc;

  return { totalStems, grandTotal, wrapName, wrapPrice, stemSubtotal };
}

// 4. Send Mobile OTP (Shows OTP Box)
function sendOtp() {
  const phone = document.getElementById('recipientPhone').value.trim();
  if (phone.length !== 10) return alert("Please enter a valid 10-digit mobile number!");
  document.getElementById('otpBox').style.display = 'block';
}

// 5. Verify Mobile OTP (Fixed Test OTP: 1234)
function verifyOtp() {
  if (document.getElementById('otpInput').value.trim() === "1234") {
    isPhoneVerified = true;
    document.getElementById('otpBox').style.display = 'none';
    document.getElementById('phoneVerifiedTag').style.display = 'inline';
    alert("Phone Verified Successfully!");
  } else {
    alert("Wrong OTP! Please enter test OTP: 1234");
  }
}

// 6. Form Validation & Order Confirmation Bill Generation
function handleOrderSubmit(event) {
  if (event) event.preventDefault();
  const { totalStems, grandTotal, wrapName, wrapPrice } = updateSummary();

  if (totalStems < 1) return alert("Please add at least 1 flower stem to your bouquet!");
  if (grandTotal < 129) return alert(`Minimum order value is ₹129. Add ₹${129 - grandTotal} more to place order.`);
  if (!isPhoneVerified) return alert("Please enter mobile number and verify with OTP (1234) first!");

  const name = document.getElementById('recipientName').value.trim();
  const phone = document.getElementById('recipientPhone').value.trim();
  const address = document.getElementById('deliveryAddress').value.trim();
  const date = document.getElementById('deliveryDate').value;
  const time = document.getElementById('timeSlot').value;
  const note = document.getElementById('giftMessage').value.trim();

  if (!name || !address || !date || !time) return alert("Please complete all required delivery fields!");

  let stemRows = '';
  for (const [key, [fName, fPrice]] of Object.entries(FLOWERS)) {
    if (quantities[key] > 0) {
      stemRows += `<tr><td>${fName}</td><td>${quantities[key]} stems</td><td>₹${fPrice}</td><td class="text-right">₹${quantities[key] * fPrice}</td></tr>`;
    }
  }

  const orderId = `FLR-${Math.floor(100000 + Math.random() * 900000)}`;
  document.getElementById('printableInvoice').innerHTML = `
    <div class="invoice-header-row">
      <div><div class="invoice-shop-name">PetalCraft Florist Tax Invoice</div><div class="invoice-meta-sub">Order #${orderId} • ${new Date().toLocaleDateString('en-IN')}</div></div>
      <div class="invoice-meta-sub text-right">Payment: <strong>Cash / UPI on Delivery</strong><br>Delivery: <strong>Campus Courier</strong></div>
    </div>
    <table class="bill-table">
      <thead><tr><th>Item Description</th><th>Qty</th><th>Unit Price</th><th class="text-right">Subtotal</th></tr></thead>
      <tbody>${stemRows}<tr><td>Packaging (${wrapName})</td><td>1</td><td>₹${wrapPrice}</td><td class="text-right">₹${wrapPrice}</td></tr></tbody>
    </table>
    <div class="bill-subtotal-block">
      <div class="bill-calc-row"><span>Stems & Packaging:</span><span>₹${grandTotal}</span></div>
      <div class="bill-calc-row"><span>Campus Delivery:</span><strong style="color:#059669">FREE</strong></div>
      <div class="bill-grand-total-row"><span>Grand Total Due:</span><span>₹${grandTotal}</span></div>
    </div>
    <div class="delivery-summary-box">
      <div><strong>Recipient:</strong> ${name}</div>
      <div><strong>Mobile:</strong> +91 ${phone} <span style="color:#059669;font-weight:700">✓ Verified</span></div>
      <div><strong>Schedule:</strong> ${date} (${time})</div>
      <div style="grid-column: 1 / -1;"><strong>Address:</strong> ${address}</div>
    </div>
    ${note ? `<div class="gift-card-preview"><strong>Handwritten Greeting Note:</strong><p>“${note}”</p></div>` : ''}
  `;

  document.getElementById('orderModal').classList.add('active');
}

// 7. Close Modal & Reset Builder
function closeModal() {
  document.getElementById('orderModal').classList.remove('active');
  document.getElementById('orderForm').reset();
  isPhoneVerified = false;
  document.getElementById('phoneVerifiedTag').style.display = 'none';
  document.getElementById('otpBox').style.display = 'none';
  document.getElementById('wrappingSelect').value = 'kraft';
  
  for (let f in quantities) {
    quantities[f] = 0;
    document.getElementById(`qty-${f}`).textContent = '0';
    document.querySelector(`.flower-card[data-flower="${f}"]`)?.classList.remove('has-selected');
  }
  updateSummary();
}

// Initialize minimum date to today and calculate starting summary
window.addEventListener('DOMContentLoaded', () => {
  const dateInput = document.getElementById('deliveryDate');
  if (dateInput) dateInput.min = new Date().toISOString().split('T')[0];
  updateSummary();
});
