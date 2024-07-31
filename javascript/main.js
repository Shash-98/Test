// Select elements
const menuButton = document.getElementById("menuBtn");
const navigationLinks = document.getElementById("navLinks");
const menuButtonIcon = menuButton.querySelector("i");

// Toggle navigation menu on button click
menuButton.addEventListener("click", () => {
  const isOpen = navigationLinks.classList.toggle("open");
  menuButtonIcon.className = isOpen ? "ri-close-line" : "ri-menu-line";
});

// Close the menu when a link is clicked
navigationLinks.addEventListener("click", () => {
  if (navigationLinks.classList.contains("open")) {
    navigationLinks.classList.remove("open");
    menuButtonIcon.className = "ri-menu-line";
  }
});

// ScrollReveal configuration
const scrollRevealConfig = {
  distance: "50px",
  duration: 2000,
  delay: 500,
};

const revealElements = [
  { selector: ".headerImage img", origin: "right" },
  { selector: ".headerContent h1", origin: "bottom" },
  { selector: ".headerContent .sectionDescription", origin: "bottom", delay: 1000 },
  { selector: ".headerContent .headerBtn", origin: "bottom", delay: 1500 },
  { selector: ".commitmentImage img", origin: "left" },
  { selector: ".commitmentContent .sectionHeader", origin: "bottom" },
  { selector: ".commitmentContent .sectionDescription", origin: "bottom", delay: 1000 }
];

revealElements.forEach((element) => {
  ScrollReveal().reveal(element.selector, {
    ...scrollRevealConfig,
    origin: element.origin,
    delay: element.delay || scrollRevealConfig.delay,
  });
});
