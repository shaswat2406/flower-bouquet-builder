# 🌸 PetalCraft Florist - Basic Version
**1st-Semester Web Development Mini-Project (Super-Simple Safety Version)**

---

## 📌 Why This Version Exists
This is a **clean, lightweight, beginner-friendly alternative** to our main project.
If other college students build simple websites and you want an ultra-easy version to explain during your Viva, this version has:
- **Zero complex CSS variables**
- **Zero background SVG patterns**
- **Zero Dark Mode code**
- **Zero complex OTP code**
- Only **basic arithmetic**, **simple HTML forms**, and **simple DOM updates**.

---

## 📁 File Structure & Line Counts
```text
basic-version/
├── index.html   # ~100 lines (Header, 4 Flower items with +/- buttons, Select wrap, Delivery form, Bill box)
├── style.css    # ~140 lines (Clean Arial font, basic card styles, simple Flexbox layout)
└── script.js    # ~65 lines (prices object, quantities object, changeQty, calculateTotal, placeOrder)
```

---

## 🎓 2-Minute Viva Cheatsheet (Every Function Explained)

### 1. `changeQty(flower, amount)`
- **What it does:** Runs when the user clicks `+` or `-`.
- **How it works:** Checks `if (quantities[flower] + amount >= 0)` so numbers never go below zero. Then it updates the count on screen using `document.getElementById("qty-" + flower).innerText` and calls `calculateTotal()`.

### 2. `calculateTotal()`
- **What it does:** Computes the grand total.
- **How it works:** Multiplies quantity × price for each of the 4 flowers, adds the wrapping price from the dropdown (`wrapSelect.value`), and updates `flowerSubtotal`, `packagingCost`, and `grandTotal`.

### 3. `placeOrder()`
- **What it does:** Confirms the order.
- **How it works:** Checks that at least 1 flower is chosen (`flowerTotal > 0`) and required fields (`name`, `phone`, `address`) are not empty. Then shows a clean confirmation popup with `alert()`.
