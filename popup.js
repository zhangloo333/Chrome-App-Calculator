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
            
            console.log(oprts);                      
            console.log(numbers);                      
            console.log(output);
            // caculate the value;
    
            if(oprts != null) {
             while(oprts.length != 0) {
                var oprt = oprts.pop();
                var num1 = parseFloat(numbers.pop());
                var num2 = parseFloat(numbers.shift());
                if(oprt == "+"){
//                    var num11 = parseFloat(num1);
//                    var num22 = parseFloat(num2);
                   if(parseInt(num1+num2) == num1+num2){
                       numbers.push((num1+num2)+"")
                   } else{
                        numbers.push((num1+num2).toFixed(3)+"");
                        console.log(numbers);
                   }
                   
                } else if (oprt == "-"){
                    if(parseInt(num1-num2) == num1-num2){
                       numbers.push((num1-num2)+"")
                   } else{
                        numbers.push((num1-num2).toFixed(3)+"");
                        console.log(numbers);
                   }                    
                } else if(oprt == "x"){
                    if(parseInt(num1*num2) == num1*num2){
                       numbers.push((num1*num2)+"")
                   } else{
                        numbers.push((num1*num2).toFixed(3)+"");
                        console.log(numbers);
                   }    
                    
                } else if(oprt == "÷"){
                    if(parseInt(num1/num2) == num1/num2){
                       numbers.push((num1/num2)+"")
                   } else{
                        numbers.push((num1/num2).toFixed(3)+"");
                        console.log(numbers);
                   }    
                    
                } else if(oprt == "%") {
                    var temp = num1 % num2;
                    console.log('temp' + temp);
                    if(parseInt(temp) == temp){
                       numbers.push((temp)+"")
                   } else{
                        numbers.push((temp).toFixed(3)+"");
                        console.log(numbers);
                   }    
                }
                else{
                    continue;
                }
                 console.log(oprts);
                 console.log(numbers);
             }
            } 
            
            input.innerHTML = numbers.pop();
        }

        else{
          input.innerHTML += btnVal;
        }
    }
}




