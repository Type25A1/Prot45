const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
const sidemenu = document.getElementById('hamburger-content');
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
    sidemenu.style.visibility = "visible";

  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
    sidemenu.style.visibility = "hidden";
  }
});
