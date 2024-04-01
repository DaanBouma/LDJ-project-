console.log("Scroll.js loaded");

// Wait for load
document.addEventListener("DOMContentLoaded", () => {
  // When the user scrolls the page, execute myFunction
  window.onscroll = function () {
    checkScroll();
  };

  // Get the header
  const header = document.getElementById("headerBar");

  // Get the offset position of the navbar
  let sticky = header.offsetTop;

  // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function checkScroll() {
    if (window.scrollY > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }
});
