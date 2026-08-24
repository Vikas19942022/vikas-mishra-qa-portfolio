// MOBILE MENU

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("show");
});

// Link click hone ke baad menu close

document.querySelectorAll("#navbar a").forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("show");
  });
});
