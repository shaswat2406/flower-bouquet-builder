# 🎓 1st-Semester Web Development Viva Question Bank
### Project: PetalCraft Florist (HTML5, CSS3, Vanilla JavaScript)
> **Instructions:** Try to answer each question in your head or out loud first, then click **"💡 Reveal Answer"** to check your answer!

---

# 🟢 LEVEL 1: EASY (Fundamentals & Basics)
*Questions 1 to 40 — Every 1st-semester student MUST know these.*

<details>
<summary><b>Q1: What does HTML stand for?</b></summary>

> **Answer:** HyperText Markup Language. It provides the skeleton and structure of a webpage.
</details>

<details>
<summary><b>Q2: What is the purpose of <code>&lt;!DOCTYPE html&gt;</code> at the top of the file?</b></summary>

> **Answer:** It is a document type declaration that tells the web browser to render the page in standard HTML5 mode.
</details>

<details>
<summary><b>Q3: What does CSS stand for?</b></summary>

> **Answer:** Cascading Style Sheets. It controls the visual design, colors, layouts, and presentation of the HTML elements.
</details>

<details>
<summary><b>Q4: What is the difference between HTML, CSS, and JavaScript in simple words?</b></summary>

> **Answer:** 
> - **HTML** is the skeleton (content and structure).
> - **CSS** is the skin/clothing (styling, layout, colors).
> - **JavaScript** is the brain/muscles (interactivity, logic, dynamic updates).
</details>

<details>
<summary><b>Q5: What are the three ways to add CSS to an HTML document?</b></summary>

> **Answer:**
> 1. **External CSS** (using `<link rel="stylesheet" href="style.css">` — *best practice, used in our project*).
> 2. **Internal CSS** (using `<style>` tags inside `<head>`).
> 3. **Inline CSS** (using the `style="..."` attribute inside a tag).
</details>

<details>
<summary><b>Q6: Why is External CSS better than Inline CSS?</b></summary>

> **Answer:** It separates structure from presentation, keeps HTML clean, allows the same styles to be reused across multiple pages, and enables browser caching for faster loading.
</details>

<details>
<summary><b>Q7: What is the difference between a block-level element and an inline element?</b></summary>

> **Answer:** 
> - **Block-level** (`<div>`, `<section>`, `<p>`, `<h1>`): Takes up the full width available and always starts on a new line.
> - **Inline** (`<span>`, `<a>`, `<strong>`, `<em>`): Takes only as much width as its content and sits side-by-side on the same line.
</details>

<details>
<summary><b>Q8: What does the <code>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</code> tag do?</b></summary>

> **Answer:** It ensures proper responsive rendering on mobile devices by setting the viewport width equal to the physical screen width of the device.
</details>

<details>
<summary><b>Q9: What is the difference between an <code>id</code> and a <code>class</code> in HTML?</b></summary>

> **Answer:** 
> - An `id` must be **unique** to one element on the page (prefixed with `#` in CSS).
> - A `class` can be **reused** across multiple elements (prefixed with `.` in CSS).
</details>

<details>
<summary><b>Q10: What are the two essential attributes of an <code>&lt;img&gt;</code> tag?</b></summary>

> **Answer:** 
> 1. `src` (source path/URL of the image file).
> 2. `alt` (alternative text displayed if the image fails to load, also used for screen readers and accessibility).
</details>

<details>
<summary><b>Q11: What is an empty or void tag in HTML? Give two examples.</b></summary>

> **Answer:** Tags that do not have closing tags and cannot contain content. Examples: `<input>`, `<img>`, `<hr>`, `<br>`, `<meta>`.
</details>

<details>
<summary><b>Q12: What does the <code>&lt;a&gt;</code> tag do and what is its most important attribute?</b></summary>

> **Answer:** It creates a hyperlink. Its most important attribute is `href` (Hypertext Reference), which points to the target URL or phone link (e.g. `href="tel:+919773006980"`).
</details>

<details>
<summary><b>Q13: What is the CSS Box Model? Name its 4 layers from inside to outside.</b></summary>

> **Answer:** 
> 1. **Content** (text/images)
> 2. **Padding** (space around content inside border)
> 3. **Border** (the line surrounding padding)
> 4. **Margin** (space outside the border separating neighboring elements)
</details>

<details>
<summary><b>Q14: What is the difference between Margin and Padding?</b></summary>

> **Answer:** 
> - **Padding** is inner space *inside* the element's border (has the element's background color).
> - **Margin** is outer space *outside* the element's border (transparent space between elements).
</details>

<details>
<summary><b>Q15: What does <code>box-sizing: border-box;</code> do?</b></summary>

> **Answer:** It makes an element's total `width` and `height` include its content, padding, and border. Without it, adding padding expands the element beyond its defined width, breaking layouts.
</details>

<details>
<summary><b>Q16: What is the Universal Selector in CSS?</b></summary>

> **Answer:** The asterisk `*`. It selects every single element on the page, commonly used for the CSS reset: `* { box-sizing: border-box; margin: 0; padding: 0; }`.
</details>

<details>
<summary><b>Q17: What does RGB and RGBA stand for in CSS?</b></summary>

> **Answer:** Red, Green, Blue. The **A** stands for **Alpha** (opacity/transparency from `0.0` completely transparent to `1.0` solid). Example: `rgba(0, 0, 0, 0.05)`.
</details>

<details>
<summary><b>Q18: What is a Hex Color code in CSS?</b></summary>

> **Answer:** A 6-character hexadecimal color notation preceded by `#` representing Red, Green, and Blue values from `00` to `FF`. Example: `#ffffff` (white), `#000000` (black).
</details>

<details>
<summary><b>Q19: What does <code>rem</code> unit mean in CSS? How does it differ from <code>px</code>?</b></summary>

> **Answer:** 
> - `px` is an absolute, fixed pixel unit.
> - `rem` (Root EM) is a relative unit relative to the root `<html>` font size (usually `1rem = 16px`). If a user zooms or changes browser font size, `rem` scales proportionally.
</details>

<details>
<summary><b>Q20: What is the default font-size of a browser for body text?</b></summary>

> **Answer:** `16px` (equivalent to `1rem`).
</details>

<details>
<summary><b>Q21: How do you link an external Google Font into HTML?</b></summary>

> **Answer:** Using `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=...">` inside the `<head>` section.
</details>

<details>
<summary><b>Q22: What is the CSS property used to make text bold?</b></summary>

> **Answer:** `font-weight: bold;` or numeric values like `font-weight: 700;`.
</details>

<details>
<summary><b>Q23: How do you center text horizontally in CSS?</b></summary>

> **Answer:** `text-align: center;`.
</details>

<details>
<summary><b>Q24: What is the difference between <code>visibility: hidden;</code> and <code>display: none;</code>?</b></summary>

> **Answer:**
> - `display: none;`: Removes the element completely from document layout (takes up zero space).
> - `visibility: hidden;`: Hides the element visually, but its empty blank space remains on the page.
</details>

<details>
<summary><b>Q25: What does the HTML <code>&lt;form&gt;</code> element do?</b></summary>

> **Answer:** It acts as a container for user input controls (text boxes, dropdowns, buttons) to collect and submit data.
</details>

<details>
<summary><b>Q26: What are the two types of buttons in an HTML form?</b></summary>

> **Answer:** 
> 1. `<button type="button">`: Standard clickable button that does not submit the form (used for OTP, counter, theme).
> 2. `<button type="submit">`: Triggers the form submission.
</details>

<details>
<summary><b>Q27: What is the purpose of the <code>&lt;label&gt;</code> tag and the <code>for</code> attribute?</b></summary>

> **Answer:** It provides a caption for an input. Setting `for="recipientName"` matches `id="recipientName"`, so clicking the text label automatically focuses the input field.
</details>

<details>
<summary><b>Q28: What is the HTML <code>&lt;select&gt;</code> element used for?</b></summary>

> **Answer:** It creates a dropdown menu containing `<option>` tags (used in our project for wrapping options).
</details>

<details>
<summary><b>Q29: What is the HTML <code>&lt;textarea&gt;</code> element used for?</b></summary>

> **Answer:** Multi-line text input (used in our project for the Delivery Address and Gift Message card).
</details>

<details>
<summary><b>Q30: What does the <code>required</code> attribute in an input field do?</b></summary>

> **Answer:** It enables built-in HTML5 browser validation, preventing the form from submitting if the field is empty.
</details>

<details>
<summary><b>Q31: What is the difference between <code>let</code> and <code>const</code> in JavaScript?</b></summary>

> **Answer:** 
> - `const`: Variables whose reference cannot be reassigned (used for rates, prices, fixed configuration).
> - `let`: Variables whose values can be reassigned over time (used for quantities, totals, verified state).
</details>

<details>
<summary><b>Q32: What are the basic primitive data types in JavaScript?</b></summary>

> **Answer:** String, Number, Boolean, Undefined, Null, BigInt, Symbol.
</details>

<details>
<summary><b>Q33: What is the difference between <code>true</code> and <code>"true"</code> in JavaScript?</b></summary>

> **Answer:** `true` is a Boolean data type; `"true"` is a String of characters.
</details>

<details>
<summary><b>Q34: How do you declare a function in JavaScript?</b></summary>

> **Answer:** 
> ```javascript
> function functionName(parameters) {
>   // code block
> }
> ```
</details>

<details>
<summary><b>Q35: What is the DOM in JavaScript?</b></summary>

> **Answer:** Document Object Model. It is a tree representation of the HTML document created by the browser, allowing JavaScript to read and modify HTML tags, styles, and attributes.
</details>

<details>
<summary><b>Q36: Which JavaScript method is used to select an element by its ID?</b></summary>

> **Answer:** `document.getElementById('elementId')`.
</details>

<details>
<summary><b>Q37: What is the difference between <code>textContent</code> and <code>innerHTML</code>?</b></summary>

> **Answer:** 
> - `textContent`: Gets or sets plain text only (safe, escapes HTML).
> - `innerHTML`: Parses and inserts full HTML tags and markup.
</details>

<details>
<summary><b>Q38: How do you write a single-line and multi-line comment in CSS?</b></summary>

> **Answer:** CSS only supports `/* comment here */` for both single and multi-line comments.
</details>

<details>
<summary><b>Q39: How do you write comments in JavaScript?</b></summary>

> **Answer:** `// single line comment` and `/* multi-line comment */`.
</details>

<details>
<summary><b>Q40: How do you write a comment in HTML?</b></summary>

> **Answer:** `<!-- comment here -->`.
</details>

---

# 🟡 LEVEL 2: MEDIUM (Project Architecture & Implementation)
*Questions 41 to 80 — Specific to PetalCraft Florist code & practical frontend skills.*

<details>
<summary><b>Q41: What are Semantic HTML5 tags and which ones are used in PetalCraft?</b></summary>

> **Answer:** Tags that convey meaning to both browser and developer. In our project:
> - `<header>`: Top brand bar and badges.
> - `<main>`: Central content container.
> - `<section>`: Step 1, Step 2, and Step 3 cards.
> - `<article>`: Individual flower cards (Rose, Lily, Carnation, Sunflower).
> - `<aside>`: Live Order Summary sidebar.
> - `<footer>`: Bottom store address and Google Map.
</details>

<details>
<summary><b>Q42: What are CSS Custom Properties (CSS Variables) and how are they declared?</b></summary>

> **Answer:** Variables defined inside `:root` with a double-dash prefix `--`. Example:
> ```css
> :root {
>   --primary: #a84252;
>   --bg-card: #ffffff;
> }
> ```
> Accessed anywhere using `var(--primary)`.
</details>

<details>
<summary><b>Q43: How does the Dark Mode toggle work in our project in both JS and CSS?</b></summary>

> **Answer:**
> - In **JS**: `toggleTheme()` toggles `.dark-mode` on `document.body` and stores `'dark'` in `localStorage`.
> - In **CSS**: `body.dark-mode` overrides only the 7 CSS variables (`--bg-page: #151012; --bg-card: #221a1c;`, etc.), automatically recoloring all cards, inputs, and modals without writing individual rules.
</details>

<details>
<summary><b>Q44: What is <code>localStorage</code> and why did we use it for Dark Mode?</b></summary>

> **Answer:** A web storage API that saves key-value pairs in the user's browser with no expiration date. We used `localStorage.setItem('petalcraft_theme', 'dark')` so the user's theme preference persists even after refreshing the page or reopening the browser.
</details>

<details>
<summary><b>Q45: Explain the CSS Grid layout used for the flower cards: <code>repeat(auto-fit, minmax(220px, 1fr))</code>.</b></summary>

> **Answer:**
> - `repeat()`: Repeats column definitions.
> - `auto-fit`: Automatically fits as many columns as will fit across the container width.
> - `minmax(220px, 1fr)`: Each card must be at least `220px` wide, but expands to fill available fractional space (`1fr`). This creates responsive cards without requiring `@media` queries!
</details>

<details>
<summary><b>Q46: What does the fractional unit (<code>fr</code>) represent in CSS Grid?</b></summary>

> **Answer:** It represents a fraction of the remaining free space in the grid container. `1.7fr 1fr` means the left builder gets 1.7 parts (~63%) and the right summary gets 1 part (~37%).
</details>

<details>
<summary><b>Q47: What does <code>display: flex;</code> do when applied to a container?</b></summary>

> **Answer:** It establishes a flexible box formatting context, transforming all direct children into flex items aligned horizontally in a row by default.
</details>

<details>
<summary><b>Q48: What is the difference between <code>justify-content</code> and <code>align-items</code> in Flexbox?</b></summary>

> **Answer:**
> - `justify-content`: Aligns items along the **Main Axis** (horizontal by default, e.g. `space-between`).
> - `align-items`: Aligns items along the **Cross Axis** (vertical by default, e.g. `center`).
</details>

<details>
<summary><b>Q49: How did you implement the Google Maps embed in the footer without an API key?</b></summary>

> **Answer:** Using the HTML5 `<iframe>` tag with the embed URL of Block 34 (School of Computer Engineering, LPU), configured with `loading="lazy"` and `referrerpolicy="strict-origin-when-cross-origin"`.
</details>

<details>
<summary><b>Q50: What does the <code>loading="lazy"</code> attribute do on an iframe or img?</b></summary>

> **Answer:** It defers loading the iframe/image until the user scrolls near it, saving bandwidth and significantly speeding up initial page load.
</details>

<details>
<summary><b>Q51: Explain how the +/- quantity counter works in JavaScript: <code>changeQty(flower, change)</code>.</b></summary>

> **Answer:**
> 1. Calculates new quantity using `Math.max(0, quantities[flower] + change)` to prevent negative numbers.
> 2. Updates the span counter: `document.getElementById('qty-' + flower).textContent = quantities[flower]`.
> 3. Toggles the `.has-selected` highlight class on the flower card.
> 4. Calls `updateSummary()` to recalculate live totals and the growth meter.
</details>

<details>
<summary><b>Q52: What is the difference between <code>Math.max(0, val)</code> and an <code>if</code> condition?</b></summary>

> **Answer:** `Math.max(0, val)` is a clean 1-line mathematical expression that returns whichever number is larger (0 or `val`), ensuring the result is never less than 0 without needing an `if (qty < 0)` block.
</details>

<details>
<summary><b>Q53: How does the live order calculation work in <code>updateSummary()</code>?</b></summary>

> **Answer:**
> 1. Iterates through the flowers object with a `for...of Object.entries(FLOWERS)` loop.
> 2. Multiplies quantity by rate to compute `stemSubtotal`.
> 3. Reads the packaging dropdown rate (`wrapPrice`).
> 4. Adds them together: `grandTotal = stemSubtotal + wrapPrice`.
> 5. Updates DOM elements with Indian Rupee formatting (`₹`).
</details>

<details>
<summary><b>Q54: How does the Flower Bouquet Growth Progress Bar work?</b></summary>

> **Answer:**
> - Computes completion percentage: `pct = Math.min(100, Math.round((grandTotal / 129) * 100))`.
> - Sets the CSS width: `progressFill.style.width = pct + '%'`.
> - Dynamically changes the bud icon emoji: `🌱` (<40%) ➔ `🌿` (40-69%) ➔ `🌷` (70-99%) ➔ `🌸` (100%).
> - When `pct >= 100`, adds the `.is-complete` class to turn the progress bar bright green.
</details>

<details>
<summary><b>Q55: How is client-side phone validation handled in Step 3?</b></summary>

> **Answer:**
> - HTML level: `<input type="tel" maxlength="10" placeholder="9876543210" required>`.
> - JS level: In `sendOtp()`, checks `if (phone.length !== 10)` and prompts an alert if invalid.
</details>

<details>
<summary><b>Q56: How does the demo OTP verification work in <code>verifyOtp()</code>?</b></summary>

> **Answer:**
> It compares the entered code against the fixed demo OTP `"1234"`. If `otpInput === "1234"`, sets `isPhoneVerified = true`, hides the OTP box, and displays the green `✓ Verified` tag.
</details>

<details>
<summary><b>Q57: Why is <code>event.preventDefault()</code> used in <code>handleOrderSubmit(event)</code>?</b></summary>

> **Answer:** By default, submitting an HTML `<form>` causes the browser to reload or send a GET/POST request to a server. `event.preventDefault()` stops this default behavior so JavaScript can validate fields and display the confirmation modal without reloading.
</details>

<details>
<summary><b>Q58: What is <code>position: sticky;</code> and where is it used?</b></summary>

> **Answer:** Used on `.summary-sticky-card`. An element behaves like `position: relative` until the user scrolls past `top: 1.5rem`, at which point it "sticks" to that position on the screen, keeping the Order Summary visible during scrolling.
</details>

<details>
<summary><b>Q59: What is <code>position: fixed;</code> and where is it used?</b></summary>

> **Answer:** Used on `.modal-overlay`. It pulls the modal out of the normal document flow and pins it relative to the browser viewport (`inset: 0`), ensuring the dark overlay covers the entire screen regardless of scrolling.
</details>

<details>
<summary><b>Q60: What is <code>z-index</code> and why is it set to <code>9999</code> on the modal?</b></summary>

> **Answer:** It controls the 3D stacking order along the Z-axis (depth). Setting `z-index: 9999` guarantees the modal popup appears on top of every other element, including maps and sticky sidebars.
</details>

<details>
<summary><b>Q61: What does <code>backdrop-filter: blur(4px);</code> do?</b></summary>

> **Answer:** It applies a graphical blur effect to the background content directly *behind* the semi-transparent modal overlay, creating a modern frosted-glass visual effect.
</details>

<details>
<summary><b>Q62: What is the purpose of the <code>transform: translateY(-2px);</code> on flower cards?</b></summary>

> **Answer:** It lifts the card upward by 2 pixels when hovered (`:hover`), providing visual micro-interaction feedback to make cards feel interactive.
</details>

<details>
<summary><b>Q63: What does <code>transition: transform 0.2s, border-color 0.2s;</code> do?</b></summary>

> **Answer:** It smoothly animates the transform and border color changes over `0.2` seconds instead of snapping abruptly.
</details>

<details>
<summary><b>Q64: What is <code>classList.toggle('dark-mode')</code>?</b></summary>

> **Answer:** A JavaScript DOM token method. If the class `dark-mode` is present on the element, it removes it and returns `false`; if absent, it adds it and returns `true`.
</details>

<details>
<summary><b>Q65: What is the purpose of <code>window.addEventListener('DOMContentLoaded', ...)</code>?</b></summary>

> **Answer:** It ensures JavaScript runs only after the complete HTML document structure has been parsed and loaded into the DOM, preventing errors where JS tries to find elements that don't exist yet.
</details>

<details>
<summary><b>Q66: How do we prevent customers from picking a delivery date in the past?</b></summary>

> **Answer:** In `DOMContentLoaded`, we set `deliveryDateInput.min = new Date().toISOString().split('T')[0];`, setting the HTML5 `min` attribute to today's date so past calendar dates are disabled.
</details>

<details>
<summary><b>Q67: How does <code>window.print()</code> work in our project?</b></summary>

> **Answer:** It triggers the browser's native Print dialog. Paired with `@media print`, it formats the bill into a clean invoice receipt suitable for saving as PDF or printing.
</details>

<details>
<summary><b>Q68: What does the <code>novalidate</code> attribute on <code>&lt;form&gt;</code> do?</b></summary>

> **Answer:** It disables the browser's default HTML form validation popups so our custom JavaScript validation (`handleOrderSubmit`) can handle alerts smoothly.
</details>

<details>
<summary><b>Q69: What are JavaScript Template Literals?</b></summary>

> **Answer:** Strings wrapped in backticks (`` ` ``) that allow embedded expressions `${variable}` and multi-line strings without string concatenation (`+`). Example: `` `₹${grandTotal}` ``.
</details>

<details>
<summary><b>Q70: How does the Minimum Order Value (MOV) check work?</b></summary>

> **Answer:** We enforce a ₹129 minimum order threshold. If `grandTotal < 129`, the sidebar displays how much more is needed (`129 - grandTotal`), and `handleOrderSubmit` blocks checkout with an alert.
</details>

<details>
<summary><b>Q71: What is the purpose of the <code>closeModal()</code> function?</b></summary>

> **Answer:** It closes the invoice modal (`modal.classList.remove('active')`), resets the form inputs (`orderForm.reset()`), resets flower quantities to zero, and recalculates the summary.
</details>

<details>
<summary><b>Q72: What does <code>display: none;</code> vs <code>display: block;</code> do for the OTP box?</b></summary>

> **Answer:** By default, the OTP box has `style="display: none;"` (hidden). When the user clicks "Send OTP", JS sets `otpBox.style.display = 'block'`, making it visible.
</details>

<details>
<summary><b>Q73: What is the difference between <code>==</code> and <code>===</code> in JavaScript?</b></summary>

> **Answer:** 
> - `==` (abstract equality) compares values after type conversion (`5 == "5"` is true).
> - `===` (strict equality) compares both value **and** data type without conversion (`5 === "5"` is false). Best practice is always `===`.
</details>

<details>
<summary><b>Q74: What is the pseudo-class <code>:hover</code> in CSS?</b></summary>

> **Answer:** It applies styles to an element specifically when the user points their mouse cursor over it.
</details>

<details>
<summary><b>Q75: What is the pseudo-class <code>:focus</code> in CSS?</b></summary>

> **Answer:** It applies styles to an input or button when it has received focus (via click or tab key navigation).
</details>

<details>
<summary><b>Q76: How does <code>@media (max-width: 900px)</code> make the project responsive?</b></summary>

> **Answer:** When the browser viewport width is 900px or less (tablets/phones), it switches `.main-container` from 2 columns to a single column (`grid-template-columns: 1fr;`) and makes the summary card static.
</details>

<details>
<summary><b>Q77: What does <code>object-fit: cover;</code> do on an image?</b></summary>

> **Answer:** It scales the image to fill its container while preserving its aspect ratio, cropping edges rather than distorting or stretching the photo.
</details>

<details>
<summary><b>Q78: How do we generate unique order tracking IDs in JavaScript?</b></summary>

> **Answer:** Using `` `FLR-${Math.floor(100000 + Math.random() * 900000)}` ``, which generates a random 6-digit order ID prefixed with `FLR-` (e.g. `FLR-582914`).
</details>

<details>
<summary><b>Q79: What does <code>String.trim()</code> do in JavaScript?</b></summary>

> **Answer:** It strips leading and trailing whitespace characters from a string, ensuring inputs containing only spaces are flagged as empty.
</details>

<details>
<summary><b>Q80: What is the role of <code>flex-direction: column;</code>?</b></summary>

> **Answer:** It changes the flex container's main axis from horizontal (row) to vertical, stacking flex child elements from top to bottom.
</details>

---

# 🔴 LEVEL 3: TOUGH & TRICKY (Strict Examiner Questions)
*Questions 81 to 110 — The questions strict professors ask to test deep understanding.*

<details>
<summary><b>Q81: What is CSS Specificity and what is its hierarchy order?</b></summary>

> **Answer:** Specificity is the weight algorithm browsers use to resolve conflicting CSS rules:
> 1. `!important` (overrides everything)
> 2. Inline styles (`style="..."` = 1000)
> 3. IDs (`#header` = 100)
> 4. Classes, attributes, pseudo-classes (`.card`, `[type="text"]`, `:hover` = 10)
> 5. Elements and pseudo-elements (`div`, `p`, `::before` = 1)
</details>

<details>
<summary><b>Q82: In the Box Model, if an element has <code>width: 200px; padding: 20px; border: 5px solid black;</code>, what is its total rendered width in <code>content-box</code> vs <code>border-box</code>?</b></summary>

> **Answer:**
> - In `content-box` (default): `200 + (20×2) + (5×2) = 250px`.
> - In `border-box` (`* { box-sizing: border-box; }`): **Exactly 200px** (padding and border are absorbed inside the 200px).
</details>

<details>
<summary><b>Q83: Why is <code>client-side</code> validation not sufficient for production security?</b></summary>

> **Answer:** Client-side JavaScript validation can be easily bypassed by disabling JavaScript or sending requests directly via Postman/curl. It is designed for user convenience and instant feedback; production systems must always re-validate data on the server side.
</details>

<details>
<summary><b>Q84: What is Event Bubbling in JavaScript?</b></summary>

> **Answer:** When an event happens on an inner element (e.g., clicking a button inside a card), the event triggers on the inner element first and then "bubbles" upward through its parents in the DOM tree unless stopped with `event.stopPropagation()`.
</details>

<details>
<summary><b>Q85: What is the difference between synchronous and asynchronous code in JavaScript?</b></summary>

> **Answer:** 
> - **Synchronous:** Code executes line-by-line sequentially; each line must finish before the next runs (our project uses clean synchronous vanilla JS).
> - **Asynchronous:** Operations (like network requests, timers) run in the background and trigger callbacks/promises when done without blocking the browser.
</details>

<details>
<summary><b>Q86: What is a Stacking Context in CSS and how does <code>z-index</code> behave across different stacking contexts?</b></summary>

> **Answer:** A stacking context is a 3D conceptual layering formed by elements with properties like `position: fixed`, `opacity < 1`, or `z-index`. An element with `z-index: 9999` inside a lower stacking context cannot appear above an element in a higher stacking context.
</details>

<details>
<summary><b>Q87: What is the difference between <code>localStorage</code> and <code>sessionStorage</code>?</b></summary>

> **Answer:** 
> - `localStorage`: Data persists indefinitely until explicitly cleared by user or code.
> - `sessionStorage`: Data is deleted automatically as soon as the browser tab is closed.
</details>

<details>
<summary><b>Q88: Why did you place the <code>&lt;script src="script.js"&gt;&lt;/script&gt;</code> tag at the bottom of the <code>&lt;body&gt;</code> rather than in the <code>&lt;head&gt;</code>?</b></summary>

> **Answer:** Placing scripts at the bottom ensures HTML elements are parsed and displayed on screen before the browser downloads and executes JavaScript, preventing blocking and DOM element reference errors.
</details>

<details>
<summary><b>Q89: How does <code>@media print</code> selectively hide elements during printing?</b></summary>

> **Answer:** 
> ```css
> @media print {
>   body * { visibility: hidden; }
>   .modal-overlay, .modal-overlay * { visibility: visible; }
>   .modal-actions, .site-header, .site-footer { display: none !important; }
> }
> ```
> It hides everything using `visibility: hidden;`, re-enables visibility only for the modal receipt, and removes headers/buttons from taking space with `display: none !important;`.
</details>

<details>
<summary><b>Q90: What is the difference between pseudo-classes and pseudo-elements in CSS?</b></summary>

> **Answer:**
> - **Pseudo-class** (single colon `:`, e.g. `:hover`, `:focus`): Styles an element in a specific *state*.
> - **Pseudo-element** (double colon `::`, e.g. `::before`, `::after`): Styles a specific *part* of an element or inserts virtual content.
</details>

<details>
<summary><b>Q91: What is the purpose of the <code>aria-*</code> and <code>role</code> attributes on the modal?</b></summary>

> **Answer:** `role="dialog"`, `aria-modal="true"`, and `aria-labelledby="modalTitle"` are WAI-ARIA accessibility attributes. They inform assistive technologies (screen readers) that a dialog popup has appeared and identify its title.
</details>

<details>
<summary><b>Q92: How does <code>Object.entries()</code> work in our <code>updateSummary()</code> function?</b></summary>

> **Answer:** `Object.entries(FLOWERS)` converts an object into an array of `[key, value]` pairs, allowing a `for...of` loop to iterate through each flower key (`rose`, `lily`) and its corresponding data array (`[name, price]`).
</details>

<details>
<summary><b>Q93: What happens if an image URL in <code>&lt;img src="..."&gt;</code> fails to load?</b></summary>

> **Answer:** The browser displays a broken image icon and renders the text provided in the `alt` attribute instead.
</details>

<details>
<summary><b>Q94: What is the difference between Flexbox and CSS Grid, and why use both?</b></summary>

> **Answer:**
> - **Flexbox** is 1-dimensional (arranging items along a row OR a column). Best for components, buttons, navigation bars.
> - **CSS Grid** is 2-dimensional (arranging items in rows AND columns simultaneously). Best for overall page layouts and card galleries.
> - Using both combines Grid's structural layout strength with Flexbox's alignment agility.
</details>

<details>
<summary><b>Q95: What is CSS inheritance and which properties inherit by default?</b></summary>

> **Answer:** The mechanism where child elements inherit CSS properties from their parent. Typography properties (`font-family`, `color`, `line-height`) inherit by default, whereas box model properties (`margin`, `padding`, `border`, `background`) do not.
</details>

<details>
<summary><b>Q96: What does the <code>!important</code> declaration do and why should it be used sparingly?</b></summary>

> **Answer:** It overrides all other specificity rules. It should be used sparingly because it breaks the natural CSS cascade and makes debugging and overriding styles difficult.
</details>

<details>
<summary><b>Q97: What is the purpose of <code>document.getElementById('orderForm').reset()</code> in <code>closeModal()</code>?</b></summary>

> **Answer:** It natively restores all form inputs (name, phone, date, address, note) back to their default empty values in a single call.
</details>

<details>
<summary><b>Q98: What does <code>JSON.stringify()</code> and <code>JSON.parse()</code> do in JavaScript?</b></summary>

> **Answer:**
> - `JSON.stringify(obj)`: Converts a JavaScript object into a JSON string (used when storing objects in `localStorage`).
> - `JSON.parse(str)`: Converts a JSON string back into a JavaScript object.
</details>

<details>
<summary><b>Q99: What is the difference between an inline SVG and an SVG Data URI in CSS?</b></summary>

> **Answer:**
> - **Inline SVG**: SVG code written directly in HTML tags (`<svg>...</svg>`).
> - **SVG Data URI**: SVG code encoded directly inside CSS `url("data:image/svg+xml,...")` as a background pattern (used for our floral background wallpaper without external files).
</details>

<details>
<summary><b>Q100: How do you explain the overall data flow of the PetalCraft application?</b></summary>

> **Answer:**
> 1. **User Interaction:** User clicks +/- on flowers or picks packaging from dropdown.
> 2. **State Update:** `quantities` object updates in JavaScript.
> 3. **Calculation & DOM Sync:** `updateSummary()` computes subtotal, compares against ₹129 minimum order value, animates the bouquet progress bar, and updates the bill.
> 4. **Authentication:** User inputs 10-digit mobile number and verifies test OTP (`1234`).
> 5. **Output Generation:** Clicking "Place Order" validates required fields and renders an itemized printable tax invoice receipt.
</details>
