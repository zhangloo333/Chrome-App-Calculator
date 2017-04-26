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

         else if(btnVal == 'Del'){
           var temp = input.innerHTML;
           input.innerHTML = temp.slice(0,temp.length-1) ;
        
         }
        
        else if (btnVal == "=") {
            var output = input.innerHTML;
            
            //get a two array;
            var regexp = /[%x÷+-]/
            var regexp1 = /[%x÷+-]/g
            var numbers = output.split(regexp).reverse();
            var oprts = output.match(regexp1);
            
            console.log("oprts= " + oprts);                      
            console.log("number= " + numbers);                      
            console.log("output= " + output);
            // caculate the value;
            numbers = ReversePolish(numbers,oprts);
            input.innerHTML = numbers.pop();
        }

        else{
          input.innerHTML += btnVal;
        }
    }
}

function ReversePolish(arrNum, arrOper) {
    if(arrOper == null) {
        return arrNum;
    }
    if(arrNum == null) {
        return arrNum.push("error");
    }

    while(arrOper.length != 0) {
        var oprt = arrOper.shift();
        var num1 = parseFloat(arrNum.pop());
        var num2 = parseFloat(arrNum.pop());
        console.log("num1= " + num1);
        console.log("num2= " +num2);
        var temp;

        switch(oprt) {
            case "+":
                temp = num1 + num2;
                break;
            case "-":
                temp = num1 - num2;
                break;
            case "x":
                temp = num1 * num2;
                break;
            case "÷":
                temp = num1 / num2;
                break;
            case "%":
                temp = num1 % num2;
                break;
            default:
                break;
        }
        validDecimal(temp) ? temp : temp.toFixed(3);
        console.log('temp= ' + temp);
        arrNum.push(temp + "");
    }

    return arrNum;
}

function validDecimal (result) {
    return parseInt(result) == result ? true : false;
}



