//Change image
let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/winter-unl.jpg') {
      myImage.setAttribute('src','images/winter-home.jpg');
    } else {
      myImage.setAttribute('src','images/winter-unl.jpg');
    }
}

//Personalized welcome message
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
      } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Winter is beautiful, ' + myName;
      }
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Winter is beautiful, ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }
