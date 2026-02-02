# LinkedIn-Project
# Livestorm‑Style Landing Page (Pure HTML, CSS & JavaScript)

## Project Overview

This project is a hand coded responsive landing page inspired by the Livestorm marketing page. It was built using only HTML, CSS and JAVASCRIPT (no frameworks or libraries) to demonstrate real frontend fundamentals, semantic markup, and DOM manipulation.

The main focus of this project is to:

* Use proper semantic HTML elements and explain why they are used
* Build a responsive layout that works on desktop and mobile
* Implement form validation using JavaScript (no libraries)
* Manipulate the DOM directly (menu toggle, form behaviour)

---

## Technologies Used

* HTML5 – Page structure and semantics
* CSS – Layout, responsiveness, and styling
* JavaScript – Interactivity and validation
* Netlify / Vercel – Deployment

---

## HTML Structure & Elements (What I Used and Why)

### `<header>`

The `<header>` element is used to contain the top navigation and branding. It clearly defines the introductory section of the page and improves semantic meaning for screen readers and search engines.

### `<nav>`

The `<nav>` element holds the navigation links. This tells the browser and other technologies that these links are meant for page navigation. A separate mobile navigation container is also used for responsive behaviour.

### `<section>`

Multiple `<section>` elements are used to divide the page into logical content areas (hero section, features, form section, etc.). This improves readability, structure, and accessibility.

### `<div>`

`<div>` elements are used as layout containers where no specific semantic element is required. They help group content for styling and positioning with CSS.

### `<h1> – <h3>`

Heading tags are used in the correct hierarchy to structure the content. `<h1>` is used for the main page title, while lower‑level headings introduce subsections. This improves SEO and accessibility.

### `<p>`

Paragraph elements are used for descriptive text to keep content readable and semantically correct.

### `<form>`

The `<form>` element wraps the input fields and submit button. It provides a semantic container for user input and allows JavaScript to manage validation and submission behaviour.

### `<input>`

Input fields are used for collecting user data such as email and password. Different `type` attributes are used to enable browser‑level validation support.

### `<button>`

The `<button>` element is used instead of clickable `<div>`s to ensure accessibility and correct form behaviour.

---

## CSS (Styling & Responsiveness)

### Layout

* Flexbox is used for layout alignment and spacing
* Media queries are used to adapt the design for mobile and desktop screens

### Responsiveness

* Navigation switches to a mobile menu on smaller screens
* Images and containers scale properly based on screen width
* Padding and font sizes adjust for readability on mobile devices

### Why CSS Was Written This Way

* No frameworks were used to demonstrate understanding of core CSS
* Class‑based styling keeps the CSS reusable and maintainable
* Mobile‑first considerations were applied during layout decisions

---

## JavaScript (DOM Manipulation & Validation)

### Mobile Menu Toggle

A JavaScript function (`toggleMenu`) is used to show and hide the mobile navigation menu.

**How it works:**

* The function selects the mobile navigation element using `getElementById`
* It toggles an `active` class on click
* CSS handles the visibility based on that class

This demonstrates direct DOM manipulation without any libraries.



## Deployment

The project was deployed as a static site using Vercel. This shows understanding of how frontend projects are shipped and accessed via a live URL.

---

## Build Log (Short)

* Designed the page structure using semantic HTML
* Styled the layout with pure CSS and media queries
* Implemented mobile navigation using JavaScript
* Deployed the project and documented the implementation

---

## What I Learned

* How to structure pages using semantic HTML
* How responsive layouts work without frameworks
* How to manipulate the DOM with  JavaScript


## Live Demo

👉 Live URL: https://livestorm.vercel.app/

---

This project demonstrates real frontend fundamentals, not framework‑dependent knowledge.
