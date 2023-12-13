const openMenuBtn = document.getElementById('openMenu');
// Calls to the openMenu and interacts with it upon click.
const closeMenuBtn = document.getElementById('closeMenu');
// Calls to the closeMenu and interacts with it upon click.
const offcanvasMenu = document.getElementById('offcanvasMenu');
// Gives the offcanvasMenu the click function for further functionality.

openMenuBtn.addEventListener('click', function() {
offcanvasMenu.style.left = '0';
});
//Shows the menu on the left of the screen with addEventListener.

closeMenuBtn.addEventListener('click', function() {
offcanvasMenu.style.left = '-250px';
});
//Collapses the menu on the left of the screen with addEventListener.