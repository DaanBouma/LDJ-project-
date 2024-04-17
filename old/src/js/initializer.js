console.log("initializer loaded...");
let yes = "no";
// Wait for load
document.addEventListener("DOMContentLoaded", () => {
// 
  document.getElementById("home").classList.add("active");
  showItems();

  // When the user scrolls the page, execute myFunction
  window.onscroll = function () {
    if (yes == "yes"){
      checkScroll();
    }
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




const loadingscreen = document.getElementById("loadingscreen");
setTimeout(function () {
    loadingscreen.style.transform = "translateY(-100vh)";
    loadingscreen.style.transition = "1s";
    setTimeout(function () {
        loadingscreen.style.display = "none";
        document.body.style.overflow = "visible";
        yes = "yes";

    }, 1500);
}, 1000);
showItems()