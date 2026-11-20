# 🎬 PetalCraft Florist - Project Video Presentation Script
**1st-Semester Web Development Mini-Project Walkthrough (3 to 4 Minutes)**
*Student: Lovely Professional University (LPU) • School of Computer Science & Engineering*

> **Tip for Recording:** 
> - Open **[index.html](index.html)** in Google Chrome on full screen (`F11`).
> - Keep this script open on your phone or split screen.
> - Speak at a steady, confident pace and perform the on-screen actions as described in the brackets!

---

## ⏱️ Video Timeline Breakdown:
* **0:00 – 0:35** ➔ Introduction & Problem Statement
* **0:35 – 1:15** ➔ Step 1: Flower Selection & Real-Time Calculation
* **1:15 – 1:50** ➔ Step 2: Packaging & Minimum Order Value (MOV) Growth Meter
* **1:50 – 2:35** ➔ Step 3: Delivery Form & Mobile OTP Verification
* **2:35 – 3:15** ➔ Order Confirmation, Printable Invoice & Dark Mode
* **3:15 – 3:45** ➔ Technical Summary & Conclusion

---

## 🎙️ Scene-by-Scene Script

### 📍 Scene 1: Introduction (0:00 – 0:35)
**Screen Action:**  
*Start with the homepage open. Slowly hover your mouse over the header logo and badges.*

**You Say:**
> "Hello everyone, and respected faculty members.  
> 
> My name is **[Your Name]**, a first-semester Computer Science and Engineering student at Lovely Professional University. Today, I am excited to present my web development mini-project: **PetalCraft Florist** — a local, fresh flower bouquet builder and campus delivery system.
> 
> The objective of this project is to create an interactive, responsive web application for an on-campus florist shop located near Block 34, allowing students and staff to custom-design fresh flower bouquets stem-by-stem, choose premium packaging, and schedule on-campus courier delivery with zero external dependencies."

---

### 📍 Scene 2: Step 1 – Flower Stem Selection (0:35 – 1:15)
**Screen Action:**  
*Scroll down to Step 1. Click the `+` button on Red Roses 3 times, White Lilies 1 time, and Pink Carnations 2 times. Point cursor to the live summary sidebar.*

**You Say:**
> "Let’s walk through the ordering process.  
> 
> In **Step 1**, customers choose individual fresh flower stems. We offer Red Roses at ₹30, White Lilies at ₹70, Pink Carnations at ₹35, and Yellow Sunflowers at ₹50.  
> 
> When I click the plus and minus buttons, notice how the quantity updates instantly. Behind the scenes, JavaScript handles this using our `changeQty()` function with `Math.max()`, ensuring numbers never drop below zero.  
> 
> Simultaneously, the selected card highlights in soft rose, and our Live Order Summary on the right automatically recalculates the stems subtotal in real time."

---

### 📍 Scene 3: Step 2 – Wrapping & Growth Meter (1:15 – 1:50)
**Screen Action:**  
*Scroll to Step 2. Click the Wrapping dropdown and switch from 'Kraft Paper' to 'Luxury Satin Wrap'. Then point to the green progress bar in the sidebar.*

**You Say:**
> "In **Step 2**, the customer chooses their presentation wrapping. When I change the dropdown to 'Luxury Satin Wrap', the preview card below dynamically updates its icon and description.  
> 
> Now, look at the **Interactive Growth Meter** in the sidebar. We have set a college-friendly **Minimum Order Value of ₹129**, with completely free delivery across the LPU campus.  
> 
> As items are added, JavaScript computes the percentage, animates the progress bar, and morphs the flower bud icon from a seedling `🌱` to a budding branch `🌿`, and finally to a full blooming flower `🌸` once the target is met!"

---

### 📍 Scene 4: Step 3 – Delivery Form & OTP Verification (1:50 – 2:35)
**Screen Action:**  
*Scroll to Step 3. Type a name (e.g. Priya Sharma). Enter a 10-digit mobile number (`9876543210`). Click 'Send OTP'. Type `1234` in the OTP field and click 'Verify OTP'. Fill date and address.*

**You Say:**
> "Moving to **Step 3**, the customer enters their delivery schedule and recipient details. To prevent cart abandonment and fake orders without requiring complex passwords, we implemented an **Instant Mobile OTP Verification** system, similar to Swiggy or Blinkit.  
> 
> When I enter a 10-digit mobile number and click **'Send OTP'**, the verification box appears with our demo test code `1234`.  
> 
> When I type `1234` and click **'Verify OTP'**, JavaScript validates the code, hides the input box, and displays a green `✓ Verified` badge, unlocking the order checkout."

---

### 📍 Scene 5: Bill Modal & Dark Mode (2:35 – 3:15)
**Screen Action:**  
*Click the 'Schedule & Place Delivery 💐' button. The Tax Invoice modal pops up. Scroll through the bill. Click outside or close, then click the '🌙 Dark' button in the header.*

**You Say:**
> "Now, I click **'Schedule & Place Delivery'**. Immediately, our Tax Invoice modal appears with a soft frosted-glass backdrop blur.  
> 
> It generates a unique tracking ID — like `FLR-582914` — along with an itemized breakdown of stems, container packaging, free campus delivery, and the recipient's verified phone number. Clicking 'Print / Save Bill' triggers our custom `@media print` stylesheet, which formats the bill for clean A4 printing.  
> 
> Furthermore, up in the header, we have a one-click **Dark Mode switch**. Clicking it smoothly switches the entire page into a luxury dark floral aesthetic. This is powered by native CSS Variables (`:root`), requiring just 9 lines of override code, and the user's choice is saved in `localStorage`."

---

### 📍 Scene 6: Technical Summary & Closing (3:15 – 3:45)
**Screen Action:**  
*Scroll back to the top of the page. Move mouse smoothly over the clean interface.*

**You Say:**
> "To summarize the technical architecture:
> - **Semantic HTML5** provides clean, accessible structure with zero div soup.
> - **Modern CSS3** powers the responsive 2-column layout using CSS Grid and Flexbox, with zero external UI frameworks like Bootstrap.
> - **Vanilla JavaScript** drives all state management, DOM manipulation, mathematical calculations, and OTP validation under 200 clean lines of code.
> 
> We have also included a super-simple backup version in the repository for modular demonstration. The entire codebase is hosted live on GitHub Pages.
> 
> Thank you so much for your time and attention. I am now open to any questions!"

---

## 🎯 Pro-Tips for Delivering Like a Pro:
1. **Don't rush:** Pausing for 1 second between steps makes you sound confident and in control.
2. **Point your cursor:** When you say *"look at the growth meter"*, circle your mouse cursor around that element on screen.
3. **Smile while talking:** It naturally adds energy and enthusiasm to your voice recording!
