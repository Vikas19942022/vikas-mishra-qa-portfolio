// =====================================
// VIKAS MISHRA - QA PORTFOLIO
// =====================================

// Get all navigation links
const navLinks = document.querySelectorAll("nav a");

// Highlight active section while scrolling
window.addEventListener("scroll", () => {
  let currentSection = "";

  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;

    if (window.scrollY >= sectionTop - 150) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + currentSection) {
      link.classList.add("active");
    }
  });
});
