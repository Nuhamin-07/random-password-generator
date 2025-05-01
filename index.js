const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let charWithoutSymbol = characters.slice(0, 62)
let c = characters.splice(62)
let charWithoutNum = characters.slice(0, 52).concat(characters.splice(62)) 
let charOnly = characters.slice(0, 52)


// console.log(charWithoutSymbol)
// console.log(charWithoutNum)
// console.log(c)
// console.log(charOnly)

let btnOne = document.getElementById("btn-one")
let btnTwo = document.getElementById("btn-two")
let pswdLengthInput = document.getElementById("pswd-length-input")

let numPassword = document.getElementById("num-pswd")
let symbolPassword = document.getElementById("symbol-pswd")
let generatePasswordBtn = document.getElementById("generate-pswd-btn")

let passwordOne = 0
    let passwordTwo = 0
    let btnOnePswdAuto = ""
    let btnTwoPswdAuto = ""
    let btnOnePswd = ""
    let btnTwoPswd = ""
    btnOne.textContent = ""
    btnTwo.textContent = ""

generatePasswordBtn.addEventListener("click", function() {
    
    if (pswdLengthInput.length > 2) {
      pswdLengthInput = pswdLengthInput.slice(0, 2);
    }
    for(let i = 0; i < 15; i++) {
        passwordOne = Math.floor(Math.random() * characters.length)
        passwordTwo = Math.floor(Math.random() * characters.length)
        btnOnePswdAuto += characters[passwordOne]
        btnTwoPswdAuto += characters[passwordTwo]
        
    }
    for(let i = 0; i < pswdLengthInput.value; i++) {
        passwordOne = Math.floor(Math.random() * characters.length)
        passwordTwo = Math.floor(Math.random() * characters.length)
        btnOnePswd += characters[passwordOne]
        btnTwoPswd += characters[passwordTwo]
    }
    if(pswdLengthInput.value == "" || pswdLengthInput.value < 4 || pswdLengthInput.value > 20) {
        btnOne.textContent = btnOnePswdAuto
        btnTwo.textContent = btnTwoPswdAuto
    } else {
        btnOne.textContent = btnOnePswd
        btnTwo.textContent = btnTwoPswd
    }
    // console.log(numPassword.checked)
    // console.log(symbolPassword.checked)
    
    
})

function copyPasswordOne() {
    navigator.clipboard.writeText(btnOne.textContent)
    .then(() => {
      alert("Text copied to clipboard!");
    })
    .catch(err => {
      console.error("Failed to copy text: ", err);
    });
}

function copyPasswordTwo() {
    navigator.clipboard.writeText(btnTwo.textContent)
    .then(() => {
      alert("Text copied to clipboard!");
    })
    .catch(err => {
      console.error("Failed to copy text: ", err);
    });
}


