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
  //console.log(section);
}

// Add class 'active' to section when near top of viewport

function makeActive() {
  sections.forEach((section) => {
    const box = section.getBoundingClientRect();
    // You can play with the values in the "if" condition to further make it more accurate.
    if (box.top <= 150 && box.bottom >= 150) {
      // Apply active state on the current section and the corresponding Nav link.
      section.classList.add("your-active-class");
    } else {
      // Remove active state from other section and corresponding Nav link.
      section.classList.remove("your-active-class");
    }
  });
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

// Create div content from Javascript

// let titles = [];
// let childElement;
// let appendChildElement;
// let parentElement;

// // Bind to id
// parentElement = document.getElementById("section1");

// // Add titles
// titles.push({ name: "Section 1  new" });

// // Add titles elements
// for (let title of titles) {
//   childElement = parentElement.getElementsByTagName("h2")[0];
//   //appendChildElement = parentElement.appendChild(childElement);
//   childElement.innerHTML = title.name;
// }

// let titles = [];

// // Add titles
// titles.push({ name: "Section 1 new" });
// titles.push({ name: "Section 2 new" });

// let allh2 = document.getElementsByTagName("h2");
// let index = 0;
// for (let h2 of allh2) {
//   if (index < titles.length) {
//     h2.innerHTML = titles[index].name;
//   }
//   index++;
// }

let titles = [];

titles.push({
  name: "Section 1  new",
  paragraphe1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
fermentum metus faucibus lectus pharetra dapibus. Suspendisse
potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget
lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed
convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla
eget bibendum consectetur`,
  paragraphe2: `Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar
gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam.
Cras eu tincidunt arcu, vitae rhoncus purus`,
});
titles.push({
  name: "Section 2 new",
  paragraphe1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
fermentum metus faucibus lectus pharetra dapibus. Suspendisse
potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget
lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed
convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla
eget bibendum consectetur`,
  paragraphe2: `Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar
gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam.
Cras eu tincidunt arcu, vitae rhoncus purus`,
});
titles.push({
  name: "Section 3  new",
  paragraphe1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
fermentum metus faucibus lectus pharetra dapibus. Suspendisse
potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget
lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed
convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla
eget bibendum consectetur`,
  paragraphe2: `Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar
gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam.
Cras eu tincidunt arcu, vitae rhoncus purus`,
});

let alllandingcontainers =
  document.getElementsByClassName("landing__container");
let index = 0;

for (let container of alllandingcontainers) {
  if (index < titles.length) {
    let h2 = document.createElement("h2");
    container.appendChild(h2);
    h2.innerHTML = titles[index].name;
    let p1 = document.createElement("p");
    container.appendChild(p1);
    p1.innerHTML = titles[index].paragraphe1;
    let p2 = document.createElement("p");
    container.appendChild(p2);
    p2.innerHTML = titles[index].paragraphe2;
  }
  index++;
}

/**
 * End Main Functions
 * Begin Events
 *
 */

// Scroll to section on link click

// Set sections as active
