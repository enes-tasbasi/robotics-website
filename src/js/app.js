// if (module.hot) {
//   module.hot.accept();
// }

let $hamburgerMenu = document.querySelector('.hamburger-menu');
let $dropdownMenu = document.querySelector('.dropdown-menu');

let menuIsOpen = false;

$hamburgerMenu.addEventListener('click', () => {

  if (!menuIsOpen) {
    menuIsOpen = true;
    $dropdownMenu.classList.add('open');
    $hamburgerMenu.classList.add('open');
  } else {
    menuIsOpen = false;
    $dropdownMenu.classList.remove('open');
    $hamburgerMenu.classList.remove('open');
  }
});