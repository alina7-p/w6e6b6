# Assignment #6 — jQuery (Selectors, Effects, Animations)

- **Name:** Alina Ibadulla
- **Group:** SE-2540
- **Subject:** Web Technologies 1. Front-End Development

---

## Project Description

This project is a personal portfolio website developed using HTML, CSS, JavaScript, and jQuery.

The main purpose of this assignment is to demonstrate the use of jQuery selectors, DOM manipulation, effects, event handling, and animations.

The website includes an interactive portfolio with personal information, a photo gallery, technical skills, a contact form, and animated skill bars.

---

# Part 1. Getting Started with jQuery

## Task 0. Setup

jQuery was included in the project using a CDN link.

The `$(document).ready()` function was used to ensure that the code executes after the HTML document has loaded.

The message "jQuery is ready!" is displayed in the browser console.

<img width="431" height="64" alt="Screenshot 2026-11-02 at 20 47 38" src="https://github.com/user-attachments/assets/0ac7f1c7-0d6e-429f-8952-67c48a319cc1" />


## Task 1. Selectors & CSS

A personal portfolio section was created with a welcome message, personal introduction, and two theme buttons.

The following jQuery selectors were used:

- Tag selector: `$("h1")`
- ID selector: `$("#greeting")`
- Class selector: `$(".headline")`

The `.text()` method was used to update the greeting, while `.css()` was used to modify element styling.

Light and Dark Theme buttons were implemented using jQuery class manipulation.

<img width="1337" height="657" alt="Screenshot 2026-11-02 at 20 47 59" src="https://github.com/user-attachments/assets/d20990f1-c89b-4323-b387-5a41a2a07d0b" />


<img width="1354" height="619" alt="Screenshot 2026-11-02 at 20 48 19" src="https://github.com/user-attachments/assets/c984fe91-76d2-4c63-a939-b89536a91c07" />


---

# Part 2. jQuery Effects

## Task 2. Visibility Methods

An About Me section was created containing a short biography, current learning status, and personal facts.

Three buttons were implemented:

- Hide — hides the information using `.hide()`.
- Show — displays the information using `.show()`.
- Toggle — switches visibility using `.toggle()`.

<img width="1108" height="570" alt="Screenshot 2026-11-02 at 20 39 29" src="https://github.com/user-attachments/assets/57dbe3e8-b996-453f-8291-30f35123b077" />

## Task 3. Fade Methods

A photo gallery containing two images was added to the website.

Three jQuery effects were implemented:

- `.fadeIn()` — gradually displays images.
- `.fadeOut()` — gradually hides images.
- `.fadeToggle()` — switches between fade-in and fade-out effects.

<img width="1075" height="568" alt="Screenshot 2026-11-02 at 20 40 02" src="https://github.com/user-attachments/assets/bdb7619b-2a2d-4a07-a0b8-2b26ef2278c6" />

## Task 4. Slide Methods

Three collapsible sections were created.

The `.slideUp()`, `.slideDown()`, and `.slideToggle()` methods were used to create smooth sliding interactions.

Only the selected panel is displayed at a time.

<img width="1108" height="511" alt="Screenshot 2026-11-02 at 20 40 47" src="https://github.com/user-attachments/assets/92dd2532-bfd6-48bd-9dd0-e935e16165af" />

---

# Part 3. DOM Manipulation with jQuery

## Task 5. Add & Remove Elements

An initial list of four technical skills was created.

Users can enter new skills through an input field.

The following methods were implemented:

- `.append()` — adds a skill to the end of the list.
- `.prepend()` — adds a skill to the beginning of the list.
- `.remove()` — removes the last skill.

Empty input values are not accepted.

<img width="1083" height="513" alt="Screenshot 2026-11-02 at 20 41 34" src="https://github.com/user-attachments/assets/8f73dcd3-7602-4a54-b5af-0f4d68e35444" />

<img width="1090" height="522" alt="Screenshot 2026-11-02 at 20 41 50" src="https://github.com/user-attachments/assets/fddcc9ea-fa96-473b-97bf-2bda362e9432" />

## Task 6. Modifying Attributes

A social media link was added to the portfolio.

The `.attr()` method is used to dynamically change the link destination between GitHub and LinkedIn.

<img width="1093" height="260" alt="Screenshot 2026-11-02 at 20 43 47" src="https://github.com/user-attachments/assets/c7474536-6faf-42ec-ba2f-7d7b63590f17" />


## Task 7. Form Interaction

A contact form containing Name and Email input fields was created.

The `.val()` method retrieves the values entered by the user.

The `.text()` method displays the entered information immediately in a Live Preview section.

<img width="1091" height="575" alt="Screenshot 2026-11-02 at 20 44 27" src="https://github.com/user-attachments/assets/71b49bec-d1ee-4b7d-978e-b388f6fca06d" />

---

# Part 4. Animations

## Task 8. Basic Animation

A visual representation of technical skills was created using animated progress bars.

Three skills are displayed.

Initially, all progress bars have zero width.

The `.animate()` method gradually increases their width to the corresponding skill levels.

A button allows users to animate the bars and reset them to zero.

<img width="1103" height="437" alt="Screenshot 2026-11-02 at 20 45 44" src="https://github.com/user-attachments/assets/e9486c42-0796-4d87-940b-c7dacae8aea9" />


---

# Summary

During this assignment, I developed an interactive personal portfolio website using HTML, CSS, JavaScript, and jQuery.

I learned how to select and manipulate HTML elements, handle user interactions, modify attributes, and create dynamic visual effects.

I also practiced working with jQuery methods such as `.hide()`, `.show()`, `.toggle()`, `.fadeIn()`, `.fadeOut()`, `.slideUp()`, `.slideDown()`, `.append()`, `.prepend()`, `.remove()`, `.attr()`, and `.animate()`.

This assignment helped me understand how jQuery simplifies DOM manipulation and makes websites more interactive and user-friendly.
