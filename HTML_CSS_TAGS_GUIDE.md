# 📘 Complete HTML5 & CSS3 Tags and Properties Guide
### Course: CSE 326 (Internet Programming / Web Development Laboratory)
**School of Computer Science & Engineering, Lovely Professional University (LPU)**

---

### 🎓 Student & Academic Details
| Parameter | Details |
| :--- | :--- |
| **Student Name** | **Shaswat Sinha** |
| **Registration Number** | **12629556** |
| **Program & Specialization** | **B.Tech. CSE (Data Science with Machine Learning)** |
| **Current Semester** | **Semester 1** |
| **Course Code & Title** | **CSE 326: Internet Programming Laboratory** |
| **Faculty & Guide** | **Abass Hassan Sir** |
| **Project Reference** | **PetalCraft Florist (Bouquet Builder & Delivery System)** |

---

# 🌐 PART 1: HTML5 TAGS & THEIR WORK

| Tag | Tag Name | Its Exact Work & Purpose | Example from PetalCraft Code |
| :--- | :--- | :--- | :--- |
| `<!DOCTYPE html>` | Document Type | Tells the browser this document is written in **HTML5** standards. | `<!DOCTYPE html>` |
| `<html lang="en">` | HTML Root | The top-level root container of the webpage. `lang="en"` defines English language. | `<html lang="en">` |
| `<head>` | Head Section | Container for page metadata, character encoding, title, and external stylesheets (not rendered on screen). | `<head> ... </head>` |
| `<meta charset="UTF-8">` | Character Encoding | Enforces **UTF-8** encoding so emojis (`🌸`, `🌿`, `₹`) and special symbols render without corrupting. | `<meta charset="UTF-8">` |
| `<meta name="viewport">` | Viewport Meta | Sets the viewport width to the device screen width, ensuring **mobile responsiveness**. | `<meta name="viewport" content="width=device-width, initial-scale=1.0">` |
| `<title>` | Page Title | Sets the title text displayed in the browser tab and bookmarks. | `<title>PetalCraft \| Local Florist</title>` |
| `<link>` | Link Tag | Links external resources to the document (e.g. `style.css` and Google Web Fonts). | `<link rel="stylesheet" href="style.css">` |
| `<body>` | Body Tag | Container for all visible webpage content (headings, buttons, cards, footer). | `<body> ... </body>` |
| `<header>` | Semantic Header | Defines the introductory top banner or navigation bar of the page. | `<header class="site-header">` |
| `<h1>` | Heading Level 1 | The main, most important heading on the webpage (used once for SEO and hierarchy). | `<h1 class="brand-title">PetalCraft Florist</h1>` |
| `<h2>` | Heading Level 2 | Secondary section headings (used for Steps 1, 2, 3 and Order Summary). | `<h2>Select Fresh Flower Stems</h2>` |
| `<h3>` | Heading Level 3 | Sub-headings for specific components (e.g., individual flower names). | `<h3>Red Roses</h3>` |
| `<p>` | Paragraph Tag | Standard container for blocks of descriptive sentences and body text. | `<p class="brand-tagline">Fresh Flower...</p>` |
| `<span>` | Generic Inline Tag | Inline container used to style a specific word, emoji, or price without starting a new line. | `<span class="flower-price">₹30</span>` |
| `<a>` | Anchor Tag | Creates hyperlinks. `href="tel:..."` allows users to click to initiate a phone call. | `<a href="tel:+919773006980">📞 Call</a>` |
| `<button>` | Button Tag | Clickable interactive control. `type="button"` prevents unintended form submission. | `<button type="button" onclick="sendOtp()">` |
| `<main>` | Main Content | Represents the dominant, central content unique to this document. | `<main class="main-container">` |
| `<section>` | Semantic Section | Represents a thematic group of content, typically with its own heading. | `<section class="card-section">` |
| `<article>` | Article Tag | Represents an independent, self-contained item that could stand alone. | `<article class="flower-card" data-flower="rose">` |
| `<aside>` | Aside Sidebar | Contains content tangentially related to the main content (used for Live Order Summary). | `<aside class="summary-column">` |
| `<div>` | Division Tag | Generic block-level container used to group elements together for CSS layout and styling. | `<div class="builder-column">` |
| `<img>` | Image Tag | Embeds raster/vector images using `src` (source) and `alt` (accessibility description). | `<img src="images/rose.jpg" alt="Red Rose">` |
| `<form>` | HTML Form | Container that collects user inputs. `onsubmit` attaches JavaScript submission logic. | `<form id="orderForm" onsubmit="...">` |
| `<label>` | Form Label | Accessible text description for an input control. `for="id"` binds clicking label to focus the input. | `<label for="recipientPhone">Mobile *</label>` |
| `<input type="text">` | Single-Line Text | Standard text entry field for names, addresses, or coupon codes. | `<input type="text" id="recipientName">` |
| `<input type="tel">` | Telephone Input | Input optimized for phone numbers on mobile keypads. | `<input type="tel" id="recipientPhone" maxlength="10">` |
| `<input type="date">` | Date Picker | Native calendar selector control for picking delivery schedules. | `<input type="date" id="deliveryDate" required>` |
| `<select>` | Dropdown List | Creates a selectable dropdown menu. `onchange` triggers recalculation when picked. | `<select id="wrappingSelect" onchange="...">` |
| `<option>` | Dropdown Option | Defines an individual selectable item inside a `<select>` dropdown. | `<option value="satin">Luxury Satin (+₹99)</option>` |
| `<textarea>` | Multi-Line Input | Allows users to write multi-line text (e.g. street addresses and greeting card notes). | `<textarea id="deliveryAddress" rows="2"></textarea>` |
| `<ul>` | Unordered List | Container for bulleted list items (used for the list of selected stems in summary). | `<ul class="stems-list" id="stemsList">` |
| `<li>` | List Item | An individual entry inside a list (`<ul>` or `<ol>`). | `<li>3× Red Roses - ₹90</li>` |
| `<table>` | Data Table | Container for 2D tabular data (used for the printable Tax Invoice receipt). | `<table class="bill-table">` |
| `<thead>` | Table Header Block | Groups the header row cells of a table. | `<thead><tr><th>Item</th></tr></thead>` |
| `<tbody>` | Table Body Block | Groups the data row cells of a table. | `<tbody><tr><td>Red Roses</td></tr></tbody>` |
| `<tr>` | Table Row | Represents a single horizontal row of cells inside a table. | `<tr><td>Red Roses</td><td>₹30</td></tr>` |
| `<th>` | Table Header Cell | Special bold, centered cell used for column titles in a table. | `<th>Item Description</th>` |
| `<td>` | Table Data Cell | Standard data cell holding numbers or text in a table row. | `<td>₹90</td>` |
| `<strong>` | Strong Importance | Semantically marks text with strong importance (rendered bold by default). | `<strong>✓ Verified</strong>` |
| `<small>` | Small Print | Represents secondary fine-print, legal disclaimers, or auxiliary notes. | `<small>/ stem</small>` |
| `<hr>` | Horizontal Rule | Represents a thematic break or separator line between content sections. | `<div class="divider"></div>` |
| `<address>` | Address Block | Semantically supplies contact information and physical location for a business. | `<address class="store-address">` |
| `<iframe>` | Inline Frame | Embeds an external HTML webpage or document (used for Block 34 Google Maps). | `<iframe src="https://google.com/maps/..." loading="lazy">` |
| `<script>` | JavaScript Tag | Embeds or links executable JavaScript code to provide dynamic interactivity. | `<script src="script.js"></script>` |

---

# 🎨 PART 2: CSS3 PROPERTIES & THEIR WORK

| CSS Property | Category | Its Exact Work & Purpose | Example from PetalCraft Code |
| :--- | :--- | :--- | :--- |
| `:root` | Variables | Selects the root `<html>` element to define global CSS Custom Properties. | `:root { --primary: #a84252; }` |
| `var(--name)` | Variables | Reads and applies the value stored in a CSS custom variable. | `background: var(--bg-card);` |
| `box-sizing: border-box` | Box Model | Forces `width` and `height` to include padding and border, preventing layout breaking. | `*, *::before, *::after { box-sizing: border-box; }` |
| `display: flex` | Layout (Flexbox) | Activates Flexbox formatting, aligning child elements into a single-direction row. | `.brand { display: flex; align-items: center; }` |
| `flex-direction: column` | Layout (Flexbox) | Changes the flex main axis from horizontal to vertical, stacking children top-to-bottom. | `.builder-column { flex-direction: column; }` |
| `justify-content` | Layout (Flexbox) | Aligns items along the **Main Axis** (e.g. `space-between` pushes logo left, badges right). | `justify-content: space-between;` |
| `align-items` | Layout (Flexbox) | Aligns items along the **Cross Axis** (e.g. `center` centers text with an icon vertically). | `align-items: center;` |
| `gap` | Layout | Sets exact spacing between child elements in Flexbox and Grid without margin hacks. | `gap: 1.5rem;` |
| `flex: 1` | Layout (Flexbox) | Instructs a flex child to expand and occupy an equal share of remaining space. | `.btn-primary, .btn-secondary { flex: 1; }` |
| `flex-wrap: wrap` | Layout (Flexbox) | Allows flex child items to wrap onto a new line if container width is exceeded. | `.header-badges { flex-wrap: wrap; }` |
| `display: grid` | Layout (Grid) | Activates 2-dimensional CSS Grid (rows and columns simultaneously). | `.main-container { display: grid; }` |
| `grid-template-columns` | Layout (Grid) | Defines the widths and number of columns (e.g. `1.7fr 1fr` for 63%/37% split). | `grid-template-columns: 1.7fr 1fr;` |
| `repeat(auto-fit, minmax())` | Layout (Grid) | Responsive card grid: fits as many columns as possible, each at least `220px` wide. | `repeat(auto-fit, minmax(220px, 1fr))` |
| `flex-direction: column` | Layout (Flexbox) | Stacks child elements vertically one beneath another (e.g. form inputs). | `display: flex; flex-direction: column;` |
| `place-items: center` | Layout (Grid) | Shorthand that centers children both vertically and horizontally in 1 line. | `display: grid; place-items: center;` |
| `position: sticky` | Positioning | Keeps the element in regular document flow until scrolled past `top`, then sticks in place. | `.summary-sticky-card { position: sticky; top: 1.5rem; }` |
| `position: fixed` | Positioning | Removes element from document flow and locks it relative to the browser window. | `.modal-overlay { position: fixed; inset: 0; }` |
| `inset: 0` | Positioning | Shorthand for `top: 0; right: 0; bottom: 0; left: 0;` (covers 100% of the screen). | `inset: 0;` |
| `z-index` | Layering | Controls the 3D stacking order; higher numbers appear on top of lower numbers. | `z-index: 9999;` (ensures modal sits above all content) |
| `rgba(36, 31, 32, 0.65)` | Color / Alpha | Semi-transparent dark background color overlay that dims the background behind the modal. | `background: rgba(36, 31, 32, 0.65);` |
| `transform: translateY(-2px)` | Transforms | Lifts an element upward by 2 pixels when hovered for a physical tactile effect. | `.flower-card:hover { transform: translateY(-2px); }` |
| `transition` | Motion | Animates changes smoothly over a specified duration rather than snapping instantly. | `transition: transform 0.2s, border-color 0.2s;` |
| `border-radius: 999px` | Border Shape | Creates a perfect pill/capsule shape with completely rounded semicircle ends. | `border-radius: var(--radius-full);` |
| `object-fit: cover` | Media Sizing | Scales an `<img>` to fill its container while preserving aspect ratio without distortion. | `object-fit: cover;` |
| `:hover` | Pseudo-Class | Applies special styles specifically when the user's mouse hovers over an element. | `.btn-qty:hover { background: var(--primary); }` |
| `:focus` | Pseudo-Class | Applies styles when an input or dropdown is active/focused by keyboard or click. | `input:focus { border-color: var(--primary); }` |
| `@media (max-width: 900px)` | Media Query | Applies responsive rules only when the screen width is 900px or less (tablets/mobiles). | `@media (max-width: 900px) { ... }` |
| `@media print` | Print Styles | Formats the page specifically for printing (`Ctrl + P`), hiding navbars and buttons. | `@media print { body * { visibility: hidden; } }` |

---

# 🔑 PART 3: ESSENTIAL HTML ATTRIBUTES & THEIR WORK

| Attribute | What It Does | Why It Is Important in Our Project |
| :--- | :--- | :--- |
| `id="..."` | Provides a **unique identifier** for an element on the page. | Used by JavaScript to select and modify elements (`document.getElementById`). |
| `class="..."` | Assigns **reusable styling classes** to one or more elements. | Allows common CSS rules to apply across all flower cards, buttons, and badges. |
| `src="..."` | Specifies the **source file path or URL** of an image, script, or iframe. | Loads `images/rose.jpg`, `script.js`, and the Google Maps embed URL. |
| `href="..."` | Specifies the **hyperlink destination** URL or phone protocol. | Connects `<link rel="stylesheet">` and the `tel:+919773006980` customer care link. |
| `alt="..."` | Provides **alternative text** for images when not loaded or for screen readers. | Accessibility best practice (`alt="Red Rose"`). |
| `type="..."` | Defines the specific **behavior or input mode** of an input or button. | `type="button"` (no submit), `type="tel"` (phone keypad), `type="date"` (calendar). |
| `placeholder="..."` | Displays light grey hint text inside an input field before the user types. | Guides user: `placeholder="e.g. Priya Sharma"`. |
| `required` | Built-in browser validation; **blocks submission** if the input is left blank. | Enforces mandatory fields (Name, Phone, Delivery Date, Address). |
| `maxlength="10"` | Restricts the maximum number of characters the user can type. | Prevents entering more than 10 digits for Indian phone numbers. |
| `pattern="[0-9]{10}"`| Regular expression enforcing that input contains **only 10 numeric digits**. | Validates mobile numbers strictly on the client side. |
| `novalidate` | Disables default browser validation popups so custom JavaScript handles errors. | Allows our JavaScript `handleOrderSubmit` to display custom alerts. |
| `loading="lazy"` | Defers loading off-screen images or iframes until the user scrolls near them. | Speeds up initial page load time on the Google Maps iframe. |
| `onclick="..."` | Inline event handler that executes a JavaScript function on click. | `onclick="changeQty('rose', 1)"`, `onclick="verifyOtp()"`, `onclick="toggleTheme()"`. |
| `onchange="..."` | Executes JavaScript when the user changes a form control value. | `onchange="updateSummary()"` on the wrapping dropdown. |
| `role="dialog"` | ARIA accessibility attribute indicating this element is a modal dialog popup. | Informs assistive screen readers that an invoice confirmation dialog is active. |

---

### 💡 Golden Viva Tip:
> *"HTML tags provide the semantic meaning and structure; HTML attributes provide configuration, validation, and connectivity; and CSS properties control the visual layout, box-sizing, typography, and responsive presentation."*
