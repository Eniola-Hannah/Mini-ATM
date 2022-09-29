var myBalance = 1000
display.innerHTML = `Welcome; <br> You have a default balance of $1000`
const withdraw=()=>{
    if (inputAmount.value == ""){
        display.innerHTML = "Input a value"
    }
    else if(inputAmount.value<=myBalance){
        myBalance = myBalance - inputAmount.value
        display.innerHTML = `succesfully withdrawn ${inputAmount.value} <br> New balance = $ ${myBalance}`
    } 
    else{
        display.innerHTML = `Eeyah, Insufficient Balance`
    }
}

