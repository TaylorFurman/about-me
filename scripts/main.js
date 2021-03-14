let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images\Taylor Furman Headshot (02-25-2021) 2.png') {
      myImage.setAttribute('src','images\Taylor Furman Headshot (02-25-2021) 2.png');
    } else {
      myImage.setAttribute('src','images\Taylor Furman Headshot (02-25-2021) 2.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName){
    setUserName();
  } else{
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
  }


}

if(!localStorage.getItem('name')){
  setUserName();
} else {
  let storedName = LocalStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}
myButton.onclick = function(){
  setUserName();
}
