const openMenuBtn = document.getElementById('openMenu');
const closeMenuBtn = document.getElementById('closeMenu');
const offcanvasMenu = document.getElementById('offcanvasMenu');

openMenuBtn.addEventListener('click', function() {
offcanvasMenu.style.left = '0'; // Show the menu
});

closeMenuBtn.addEventListener('click', function() {
offcanvasMenu.style.left = '-250px'; // Hide the menu
});
