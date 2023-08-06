const MAX = 2; 
const mcdDaysInputEnter = document.getElementById("mcd_days_input");
mcdDaysInputEnter.addEventListener("keydown", function(event) {//Check if the pressed key is the "Enter" key
    if (event.key === "Enter") {  
        event.preventDefault();// Prevent the default behavior of the "Enter" key
        if(visitORexit.innerHTML === 'visit'){
            contentDisplay();
            visitORexit.innerHTML = "exit"; 
            visitORexit.style.cssText =`
            background-color : rgb(55, 179, 106);
            border-radius : 15px;
            `
        }
    }
});

// Get the input element
const inputNumber = document.getElementById("mcd_days_input");

function checkFunction(){//choose function based on the button state
    if(visitORexit.innerHTML === 'visit'){
        contentDisplay();
        visitORexit.innerHTML = "exit"; 
        visitORexit.style.cssText =`
        background-color : rgb(55, 179, 106);
        border-radius : 15px;
        `
    }else{
        hideContent();
        visitORexit.innerHTML = "visit";
        visitORexit.style.cssText =`
        background-color : none;
        `
    }
}
function contentDisplay() {//Function to show content
    const inputValue = inputNumber.innerHTML;
    try{
        if (inputValue >= 1 || inputValue <= MAX) {
            document.getElementById(inputValue).style.display = 'block';
            document.getElementById("mcd_days_input").contentEditable = "false";
            document.getElementById("mcd_days_input").style.cssText =  `
            border: none
            `
        }
    }catch(error){
        console.log(error)
    }
}
function hideContent(){//Function to hide content
    const inputValue = inputNumber.innerHTML;
    document.getElementById(inputValue).style.display = 'none';
    document.getElementById("mcd_days_input").contentEditable = "true";
    document.getElementById("mcd_days_input").style.cssText =  `
    border-bottom: 1px solid rgb(55, 179, 106);
    `
}
function checkIfNumbers(){//check if numbers, null or the value of input
    if (isNaN(Number(inputNumber.innerHTML)) || 
        Number(inputNumber.innerHTML) > MAX || 
        Number(inputNumber.innerHTML) < 0 || 
        inputNumber.innerHTML === "") {
        visitORexit.innerHTML = `insert a number >${MAX}`;
        visitORexit.disabled = true;
    }else{
        visitORexit.innerHTML = "visit";
        visitORexit.disabled = false;
    }
}

inputNumber.addEventListener('input', checkIfNumbers)
const visitORexit = document.getElementById('visit_exit'); //button
visitORexit.addEventListener('click', checkFunction);