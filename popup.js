/**
 * Created by lee on 4/24/17.
 */

var keys = document.querySelectorAll('#calculator span');
var operators = ['+', '-', 'x', '÷','%'];
var decimalAdded = false;

for(var i = 0; i < keys.length; i++) {
  var result = [];
    keys[i].onclick = function (e) {
        // Get the input and button values
        var input = document.querySelector('.screen');
        var inputVal = input.innerHTML;
        var btnVal = this.innerHTML;
        result += btnVal;
        console.log(btnVal);


        if(btnVal == 'C') {
            input.innerHTML = '';
            decimalAdded = false;
        }

        // else if(btnVal == 'Del'){
        //
        //   console.log("enter");
        //
        // }

        else{
          input.innerHTML += btnVal;
        }


    }
}
