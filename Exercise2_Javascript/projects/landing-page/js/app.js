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

// Build menu

const menu = document.getElementById("navbar_list");

// Create the list menu with sections

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
}

// Add class 'active' to section when near top of viewport

function makeActive() {
  sections.forEach((section) => {
    const box = section.getBoundingClientRect();
    // You can play with the values in the "if" condition to further make it more accurate.
    if (box.top <= 200 && box.bottom >= 200) {
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

// Inject the text content of the containers through JS

let titles = [];

titles.push({
  name: "Chapter 1",
  paragraphe1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
fermentum metus faucibus lectus pharetra dapibus. Suspendisse
potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget
lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed
convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla
eget bibendum consectetur. <br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
fermentum metus faucibus lectus pharetra dapibus. Suspendisse
potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget
lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed
convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla
eget bibendum consectetur <br/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
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
  name: "Chapter 2",
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
  name: "Chapter 3",
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
  name: "Chapter 4",
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

// Create containers content and structure

let alllandingcontainers =
  document.getElementsByClassName("landing__container");

let index = 0;

for (let container of alllandingcontainers) {
  if (index < titles.length) {
    let h2 = document.createElement("h2");
    container.appendChild(h2);
    h2.innerHTML = titles[index].name;
    let p1 = document.createElement("p");
    p1.classList.add("collapsed__content");
    container.appendChild(p1);
    p1.innerHTML = titles[index].paragraphe1;
    let p2 = document.createElement("p");
    p2.classList.add("collapsed__content");
    container.appendChild(p2);
    p2.innerHTML = titles[index].paragraphe2;
  }
  index++;
}

// Collapse and expand sections by clicking on each h2

const coll = document.getElementsByTagName("h2");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    let content = this.parentNode.children;
    for (i = 0; i < content.length; i++) {
      if (content[i].style.maxHeight) {
        content[i].style.maxHeight = null;
      } else {
        content[i].style.maxHeight = content[i].scrollHeight + "px";
      }
    }
  });
}

// Go to top button on the footer

document.getElementById("top").addEventListener("click", function () {
  document
    .querySelector(".main__hero")
    .scrollIntoView({ behavior: "smooth", block: "start" });
});

// Hide Menu when not scrolling

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("hide__nav").style.top = "0";
  } else {
    document.getElementById("hide__nav").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
};

/**
 * End Main Functions
 * Begin Events
 *
 */
