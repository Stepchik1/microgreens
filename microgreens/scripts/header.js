function toggleMenu() {
    var menu = document.getElementById('mobileMenu');
    menu.classList.toggle('active');
}
document.addEventListener('click', function(event) {
var menu = document.getElementById('mobileMenu');
var menuIcon = document.querySelector('.menu-icon');



// Если клик был вне меню и вне иконки меню
if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
    // Закрываем меню, если оно открыто
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
    }  

      // Убираем крестик при нажатии не на меню (Основная реализация в файле burger.js)
      if (burger.classList.contains('active1')) {
        burger.classList.remove('active1');
    }
}
});


