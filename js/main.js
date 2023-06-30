
var menu_button = document.getElementById('menu_button');   00//menu_button in die variable menu_button speichern
var side_navigation = document.getElementById('side_navigation'); // side_navigation in die variable side_navigation speichern

menu_button.addEventListener('click', function() {          //diese funktioniert spielt immer ab bei clicken von menu
    if (side_navigation.classList.contains('active')) {     //falls side_navigation active ist
        side_navigation.classList.remove('active');         //entferne die klasse active von side_navigation
    } else {
        side_navigation.classList.add('active');            //falls es keinen hat, füge es hinzu
    }
});

document.addEventListener('keydown', function(event) {      //funktion für jede Taste die gedrückt wird
    if (event.key === 'Escape' || event.key === 'Esc' || event.keyCode === 27 ) { // falls Escape Esc oder das keycode für esc = 27 gedrückt wird
        side_navigation.classList.remove('active');         //entfernt active von side_navigation und schliesst das menu
    }
});