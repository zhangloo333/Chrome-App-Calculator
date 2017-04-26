/**
 * Created by lee on 4/24/17.
 */ 

(function(){
var keys = document.querySelectorAll('#calculator span');

for(var i = 0; i < keys.length; i++) {
    // add key listener;
    keys[i].onclick = function (e) {
        // Get the input and button values
        var input = document.querySelector('.screen');
        var inputVal = input.innerHTML;
        var btnVal = this.innerHTML;

        if(btnVal == 'C') {
            input.innerHTML = '';
        } else if(btnVal == 'Del'){
           var temp = input.innerHTML;
           input.innerHTML = temp.slice(0,temp.length-1) ;
        
        } else if (btnVal == "=") {
            var output = input.innerHTML;
            console.log(output);
            //get a two array one for nums, one for operators;
            var regexp = /[%x÷+-]/g
            var numbers = output.split(regexp).reverse();
            var oprts = output.match(regexp);
            
            // caculate the value;
            numbers = ReversePolish(numbers,oprts);
            // update caculat value;
            input.innerHTML = numbers.pop();
        } else{
            // update inut value;
            input.innerHTML += btnVal;
        }
    }
}

var ReversePolish = function(arrNum, arrOper) {
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
        arrNum.push(temp + "");
    }

    return arrNum;
}
var validDecimal = function (result) {
    return parseInt(result) == result ? true : false;
}
})()

