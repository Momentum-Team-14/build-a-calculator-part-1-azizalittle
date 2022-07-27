//make the values on the buttons appear in the display when the corresponding number is clicked
// i need to make the "resultArea" hold/print every value of the buttons clicked

//create a variable that links to the result in HTML
let resultMessage = document.querySelector('#result');

//create a variable that represents all buttons in the calculator
let calcButton = document.querySelectorAll('.button');
//make an event listener for whenever buttons are clicked, the inner HTML in "result" will be updated
calcButton.addEventListener('click',function(){
    let button = document.querySelectorAll('.button');
        resultMessage.innerHTML = button.innerHTML;
}


//make functions to perform math operations based on the buttons pressed







//make clicking the "=" sign result in the answer being shown in the display