# 🌸 PetalCraft Florist - Local Fresh Flower Bouquet Builder & Delivery System
**Course Project for CSE 326 (Internet Programming / Web Development Laboratory)**  
*School of Computer Science & Engineering, Lovely Professional University (LPU), Punjab*

**Student:** Shaswat Sinha (Reg. No: 12629556) • B.Tech CSE (DS & ML), Semester 1  
**Faculty Evaluator:** Abass Hassan Sir  
**🎥 Video Presentation Walkthrough:** **[Watch on YouTube](https://youtu.be/ju_i3vaFXE0)** (`https://youtu.be/ju_i3vaFXE0`)

---

## 📌 Project Overview
**PetalCraft Florist** is an interactive, responsive frontend web application built for an independent florist boutique located directly on campus. It allows customers to custom-design their fresh flower bouquet stem-by-stem, pick packaging/containers via a styled dropdown selector, verify their mobile phone number via an instant 4-digit OTP, and schedule on-campus or local courier delivery with an instant itemized bill and order confirmation receipt.

All pricing has been localized in **Indian Rupees (₹)** with realistic florist rates and smart delivery fee logic.

---

## 📁 Project Structure & Code Line Counts
```text
flower-bouquet-builder/
├── index.html        # 217 lines - Semantic HTML5 (Header, Dark/Light Switch, 3-Step Builder, Phone OTP, Bill Modal, LPU Map)
├── style.css         # Standard Developer Format - Modern CSS3 (CSS Variables, Dark Theme, Floral SVG Wallpaper, Grid, Print Styles)
├── script.js         # 193 lines - Pure Vanilla JS (Theme Toggle & LocalStorage, DOM Updates, Live Calculation, Flower Progress Bar, Basic 1234 OTP)
└── README.md         # Project documentation & Viva examination Q&A guide
```

---

## 🌙 Dark & Light Mode Switch
- **One-Click Theme Toggle**: Located in the top header (`🌙 Dark` / `☀️ Light`).
- **CSS Custom Properties (`:root`)**: Instead of hardcoding colors, colors are defined as CSS variables (`--bg-page`, `--bg-card`, `--text-main`, `--border`). Toggling the `.dark-mode` class on `document.body` instantly switches the whole site from pastel peach/cream to a sophisticated dark velvet floral aesthetic.
- **LocalStorage Persistence**: Uses browser `localStorage.setItem('petalcraft_theme', 'dark')` so that the user's theme preference is saved and restored automatically on page refresh.

## 🌸 Floral Background & Bouquet Progress Bar
- **Ditsy Floral Pattern Background**: The page features a subtle, lightweight repeating SVG background pattern of delicate pastel flower blossoms (`🌸`, `🌼`, `🌱`) that adds an authentic boutique florist feel while keeping content cards crisp and readable.
- **Interactive Bouquet Growth Bar**: In the Live Order Summary sidebar, a real-time progress bar tracks progress towards the ₹129 minimum order value. As blooms are added, the flower icon blooms from a seedling `🌱` ➔ `🌿` ➔ `🌷` ➔ full blooming flower `🌸`!

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

### Q4: How is the Dark and Light mode switch implemented?
**Answer:**
We use modern CSS Custom Properties (`:root` variables) for all colors (`--bg-page`, `--bg-card`, `--text-main`, etc.). In JavaScript, the `toggleTheme()` function toggles the `.dark-mode` class on `document.body` (`document.body.classList.toggle('dark-mode')`). When active, CSS overrides the variable values, smoothly recoloring the entire UI without modifying individual elements. We also save the preference in `localStorage` so it persists across page reloads.

---

## 🚀 How to Run
1. Go to `C:\Users\asus\.gemini\antigravity\scratch\flower-bouquet-builder`.
2. Double-click **`index.html`** in any web browser (Chrome, Edge, Firefox).
