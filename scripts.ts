


document.getElementById("hamburger__menu").addEventListener("click", showNavBar);

function showNavBar() {
    const menu: any = document.querySelector(".nav__list--vertical");
    if (menu.style.display == 'none') {
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
    }
  };

