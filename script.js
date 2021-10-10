let form = document.getElementById('passwordGeneratingForm')
let upperCaseElement = document.getElementById('upperCase')  
let lowerCaseElement = document.getElementById('lowerCase')  
let numbersElement = document.getElementById('numbers')
let specialCharElement = document.getElementById('specialSymbol')
let characterAmountElement = document.getElementById('characterAmount')

let upperCaseArray = (Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ'));
let lowerCaseArray = (Array.from('abcdefghjiklmnopqrstuvwxyz'));
let numbersArray = (Array.from('1234567890'));
let specialCharArray = (Array.from('!@#$%^&*()|~`-=+'));

var passwordLength = characterAmountElement.value;
var upperCaseResponse = upperCaseElement.value;
var lowerCaseResponse = lowerCaseElement.value;
var numberResponse = numbersElement.value;
var specialCharResponse = specialCharElement.value;
var merge = [];

// what happens when the generate button is clicked.
form.addEventListener("submit" , function(event) {
        event.preventDefault();
        const values = Array.from(document.querySelectorAll("input[type = checkbox]:checked"))
        merge = [];
        const numberOfChars = Array.from(document.querySelectorAll("input[type = number]"))
        console.log(numberOfChars);
        // checks to see if each button is clicked or not.
        console.log(values[0]);

//selecting which values to add to the loop
 values.map(function (value, i) {;
     if(value.id === "upperCase"){
     merge = [...merge , ...upperCaseArray]
     console.log(merge);
     }
     if(value.id === "lowerCase"){
        merge = [...merge, ...lowerCaseArray]
        console.log(merge);
     }
     if(value.id === "numbers"){
        merge = [...merge , ...numbersArray]
        console.log(merge);
     }
     if(value.id === "specialSymbol"){
        merge = [...merge , ...specialCharArray]
        console.log(merge);
     }
   })


var printedPW = [];
 for (let i = 0; i < characterAmountElement.value; i++) {
   var generatedCharacterIndex = (Math.floor(Math.random() * merge.length));
   var generatedCharacter = (merge[generatedCharacterIndex]);
   printedPW.push(generatedCharacter)
}
function writePassword(){
let passwordEl = document.getElementById('password')
var password = printedPW.join('');
passwordEl.textContent = password
} 
writePassword();
 })