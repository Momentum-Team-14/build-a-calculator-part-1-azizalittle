console.log('javascript is linked!');

let calcButtons = document.querySelectorAll('.button');
console.log('Buttons added', calcButtons);
const display = document.getElementById('Display');
console.log('display updated');
//**all buttons have to have class button^^ */


for (let button of calcButtons) {
    button.addEventListener('click', (Event) => {
        if (Event.target.id !== 'eval') {
            display.innerText += Event.target.id;
            console.log(Event.target.id);
        } 
        if (Event.target.id === 'clear') {
            display.innerText = "";
            console.log("That's how you clear it!");
        }
        
        if (Event.target.id === 'eval') {
            let result = eval(display.innerHTML);
            display.innerText = result;
            console.log(result);
            console.log('equals clicked');
        }
    });
}
