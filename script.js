
var buttans = document.getElementsByClassName("btn");
var display = document.getElementById("ans");
var display2 = document.getElementById("sum");
var oprand1 = 0;
var oprand2 = null;
var oprator = null;


for(var i=0; i<buttans.length; i++){
    buttans[i].addEventListener('click',function(){
        var value = this.getAttribute('data-value');
        var result;
        
        if(value == '+'){
            oprator = '+';
            oprand1 = parseFloat(display.textContent);
            display.innerText = "";
            display2.innerText += value;
        }
        else if(value == '-'){
            oprator = '-';
            oprand1 = parseFloat(display.textContent);
            display.innerText = "";
            display2.innerText += value;
        }
        else if(value == '*'){
            oprator = '*';
            oprand1 = parseFloat(display.textContent);
            display.innerText = "";
            display2.innerText += value;
        }
        else if(value == '*'){
            oprator = '*';
            oprand1 = parseFloat(display.textContent);
            display.innerText = "";
            display2.innerText += value;
        }
        else if(value == '%'){
            oprator = '%';
            oprand1 = parseFloat(display.textContent);
            display.innerText = "";
            display2.innerText += value;
        }
        else if(value == '='){
            oprand2 = parseFloat(display.textContent);
            if(display.textContent == ""){
                oprand2 = oprand1;
            }
            display2.innerText += value;
            display.innerText = eval (oprand1 + " " + oprator + " " + oprand2);
            display2.innerText += display.innerText;
        }
        else if(value == 'AC'){
            display.innerText = "";
            display2.innerText = "";
            oprand1 = 0;
        }
        else{
            display.innerText += value;
            display2.innerText += value;
        }

        
    })
}
