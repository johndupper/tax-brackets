var console, array = ['💸', '💰', '💵', '🤑'];
var counter = 0;
var elem = document.getElementById('page-header');
var dollarInput = document.getElementById('dollar-input');

function change() {
    'use strict';
    elem.innerHTML = array[counter];
    counter += 1;
    if (counter >= array.length) {
        counter = 0;
    }
}

setInterval(change, 1000);

document.getElementById('calculate').addEventListener('click', function () {
    'use strict';
    console.log('button');
    document.getElementById('progress-id').removeAttribute('hidden');
    document.getElementById('dollar-input').style.display = 'none';
});

dollarInput.addEventListener('keyup', function () {
    'use strict';
    console.log('key');
    var dollarAmount, dollarSign = false;
    dollarAmount = this.value;
    console.log(dollarAmount);

    if (dollarAmount.length >= 1) {
        console.log('works');
        dollarInput.value = "$" + dollarAmount;
    } else {
        dollarSign
    }
});