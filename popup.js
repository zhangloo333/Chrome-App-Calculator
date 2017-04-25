/**
 * Created by lee on 4/24/17.
 */

var keys = document.querySelectorAll('#calculator span');
var operators = ['+', '-', 'x', '÷','%'];
var decimalAdded = false;

for(var i = 0; i < keys.length; i++) {
    keys[i].onclick = function (e) {
        // Get the input and button values
        var input = document.querySelector('.screen');
        var inputVal = input.innerHTML;
        var btnVal = this.innerHTML;


    if(btnVal == 'C') {
        input.innerHTML = '';
        decimalAdded = false;
    }

    if(btnVal == '&larr;'){
        input.innerHTML = inputVal.substr(0,inputVal.length-2);

    }

    }
}