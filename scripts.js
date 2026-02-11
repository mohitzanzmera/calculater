let display = document.getElementById("display");

function press(value) {

    if(value === "clear"){
        display.value = "";
    }


    else if(value === "calculate"){
        try{
            display.value = eval(display.value);
        }
        catch{
            display.value = "Error";
        }
    }

    else{
        display.value += value;
    }
}
