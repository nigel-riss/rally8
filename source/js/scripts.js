;
(function (){
    'use strict';
    

    function toggleMainMenu () {
        var mainMenu = document.querySelector('.main-nav');
        mainMenu && mainMenu.classList.contains('main-nav--display') ? mainMenu.classList.remove('main-nav--display') : mainMenu.classList.add('main-nav--display');
    };

    var menuButton = document.querySelector('.logo__menu-button');
    menuButton.onclick = toggleMainMenu;
}());