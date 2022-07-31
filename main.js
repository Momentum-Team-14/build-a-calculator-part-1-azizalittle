console.log('javascript is linked!');

let calcButtons = document.querySelectorAll('.button');
console.log('Buttons added', calcButtons);
const display = document.getElementById('#display');
console.log('display updated');
//**all buttons have to have class button^^ */

for (let button of calcButtons) {
    button.addEventListener('click', (Event) => {
        if (Event.target.id !== 'equals') {
            display.inneText += Event.target.id;
            console.log(Event.target.id);
        } 
        if (Event.target.id === 'clear') {
            display.innerText = "";
            console.log("That's how you clear it!");
        }
        if (Event.target.id === 'equals') {
            let result = eval(display.innerText);
            display.innerText = result;
            console.log(result);
            console.log('equals clicked');
        }
    });
}
