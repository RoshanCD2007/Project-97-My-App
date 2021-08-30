



function check(){
    number1 = Number(document.getElementById("num_1").value);
    number2 = Number(document.getElementById("num_2").value);  
    console.log(number1);
    console.log(number2);
    if(mySelect.value == "Addition"){
        console.log("Addition");
        number3 = number1 + number2;
        console.log(number3);
        document.getElementById("answer").innerHTML = number3;
    }

    if(mySelect.value == "Subtraction"){
        console.log("Subtraction");
        number3 = number1 - number2;
        console.log(number3);
        document.getElementById("answer").innerHTML = number3;
    }

    if(mySelect.value == "Multiplication"){
        console.log("Multiplication");
        number3 = number1 * number2;
        console.log(number3);
        document.getElementById("answer").innerHTML = number3;
    }

    if(mySelect.value == "Division"){
        console.log("Division");
        number3 = number1 / number2;
        console.log(number3);
        document.getElementById("answer").innerHTML = number3;
    }
    
    
}
