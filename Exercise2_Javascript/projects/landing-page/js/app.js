/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// Build menu

const menu = document.getElementById("navbar_list");

// create the list menu with ID

const sections = document.querySelectorAll("[data-nav]");
for (const section of sections) {
  const list = document.createElement("li");
  list.classList.add("menu__link");

  list.insertAdjacentHTML("afterbegin", `${section.getAttribute("data-nav")}`);

  // Scroll to anchor ID using scrollTO event

  list.addEventListener("click", function () {
    section.scrollIntoView({ behavior: "smooth" });
  });

  menu.appendChild(list);
  console.log(section);
}

// Add class 'active' to section when near top of viewport

function makeActive() {
  for (const section of sections) {
    const box = section.getBoundingClientRect();
    // You can play with the values in the "if" condition to further make it more accurate.
    if (box.top <= 150 && box.bottom >= 150) {
      // Apply active state on the current section and the corresponding Nav link.
      section.classList.add("your-active-class");
    } else {
      // Remove active state from other section and corresponding Nav link.
      section.classList.remove("your-active-class");
    }
  }
}
// Make sections active
document.addEventListener("scroll", function () {
  makeActive();
});

// Go to top

document.getElementById("top").addEventListener("click", function () {
  document
    .querySelector(".main__hero")
    .scrollIntoView({ behavior: "smooth", block: "start" });
  console.log("coucou");
});

// Hide Navbar

/**
 * End Main Functions
 * Begin Events
 *
 */

// Scroll to section on link click

// Set sections as active
