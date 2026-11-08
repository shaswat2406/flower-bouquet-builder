# 🌸 PetalCraft Florist - Local Fresh Flower Bouquet Builder & Delivery System
**1st-Semester College Web Development Mini-Project**

---

## 📌 Project Overview
**PetalCraft Florist** is an interactive, responsive frontend web application built for an independent florist boutique located directly on campus. It allows customers to custom-design their fresh flower bouquet stem-by-stem, pick packaging/containers via a styled dropdown selector, verify their mobile phone number via an instant 4-digit OTP, and schedule on-campus or local courier delivery with an instant itemized bill and order confirmation receipt.

All pricing has been localized in **Indian Rupees (₹)** with realistic florist rates and smart delivery fee logic.

---

## 📁 Project Structure & Code Line Counts
```text
flower-bouquet-builder/
├── index.html        # 211 lines - Semantic HTML5 (Header, 3-Step Builder, Phone OTP, Bill Modal, LPU Map)
├── style.css         # 168 lines - Modern CSS3 (Variables, Flexbox, Grid, Min Order Meter, Print Styles)
├── script.js         # 168 lines - Pure Vanilla JS (DOM Updates, Live Calculation, Basic 1234 OTP, MOV Logic)
└── README.md         # Project documentation & Viva examination Q&A guide
```

---

## 📱 Mobile Number & Instant OTP Verification
- In **Step 3 (Delivery Details)**, users enter their 10-digit mobile number (`+91`).
- Clicking **"Send OTP"** displays the verification box with the demo test code (`1234`).
- Entering `1234` and clicking **"Verify OTP"** confirms ownership and unlocks checkout.
- On the final bill receipt, the phone appears marked as **`✓ Verified`**.

---

## 📍 Physical Campus Store & Customer Care
- **Store Location**: Shop No. G-12, Ground Floor, Near Block 34 (School of Computer Engineering), Lovely Professional University (LPU), Phagwara, Punjab 144411
- **Campus Map**: Embedded interactive Google Map preview of **Block 34 CSE building, LPU** using an HTML5 `<iframe>`.
- **Customer Care Helpline**: `+91 97730 06980`
- **Store & Delivery Timings**:
  - Weekdays (Mon–Fri): 9:00 AM – 9:00 PM
  - Weekends (Sat–Sun): 10:00 AM – 5:00 PM

---

## 💰 Localized Pricing & Delivery Rules

### 1. 🌹 Fresh Flower Stems
- **Red Roses**: ₹30 / stem
- **White Lilies**: ₹70 / stem
- **Pink Carnations**: ₹35 / stem
- **Yellow Sunflowers**: ₹50 / stem

### 2. 🎀 Wrapping & Container Dropdown
- **📜 Kraft Paper Rustic**: ₹49 *(Eco-friendly wrap with raw jute twine string)*
- **🎀 Luxury Satin Wrap**: ₹99 *(Silky premium paper with velvet ribbon)*
- **🏺 Handmade Glass Vase**: ₹199 *(Fluted crystal-clear cylinder vase)*
- **🧺 Artisan Woven Basket**: ₹249 *(Natural wicker basket with floral foam)*

### 3. 🚚 Campus Delivery & Minimum Order Value
- **Campus Delivery**: **100% FREE** for all orders on campus.
- **Minimum Order Value (MOV)**: **₹129** (Orders must total at least ₹129 in flower stems and packaging to place an order).
- **Interactive MOV Meter**: The live order sidebar displays how much more (₹) is needed to hit the ₹129 threshold, turning green once met.

---

## 🎓 1st-Semester Viva & Oral Exam Q&A Guide

### Q1: How did you implement OTP verification in JavaScript?
**Answer:**
When the user clicks "Send OTP", `sendOtp()` checks that the mobile number has 10 digits (`phone.length !== 10`) and displays the OTP verification box with the demo test code (`1234`). When the user clicks "Verify OTP", `verifyOtp()` compares if the input equals `"1234"`. If it matches, `isPhoneVerified` is set to `true`, unlocking checkout.

### Q2: Why is Mobile OTP better than password login for this project?
**Answer:**
Modern Indian on-demand apps (Swiggy, Zomato, Blinkit) use Mobile OTP authentication instead of usernames and passwords. It provides instant verification without requiring users to remember credentials, avoids cart abandonment, and works completely offline during a college demo.

### Q3: How did you embed the Google Map in your project?
**Answer:**
We used the HTML5 `<iframe>` tag with `loading="lazy"` and `referrerpolicy="strict-origin-when-cross-origin"`. It embeds the interactive map of our store location at Block 34 (School of Computer Engineering, LPU) directly into the page without external JavaScript libraries or API keys.

---

## 🚀 How to Run
1. Go to `C:\Users\asus\.gemini\antigravity\scratch\flower-bouquet-builder`.
2. Double-click **`index.html`** in any web browser (Chrome, Edge, Firefox).
