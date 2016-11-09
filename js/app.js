var array = ['💸', '💰', '💵', '🤑'];
var counter = 0;
var elem = document.getElementById('page-header');

function change() {
    'use strict';
    elem.innerHTML = array[counter];
    counter += 1;
    if (counter >= array.length) {
        counter = 0;
    }
}

setInterval(change, 1000);