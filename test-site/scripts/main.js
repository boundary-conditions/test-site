let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/colleen.jpg') {
        myImage.setAttribute ('src','images/colleen2.jpg'); 
    } else {
        myImage.setAttribute ('src','images/colleen.jpg');
    }
}
 let myButton = document.querySelector('button');
 let myHeading = document.querySelector('h1');

 function setUserName() {
     let myName = prompt('Please enter your name.');
     if(!myName || myName === null) {
         setUserName();
     }
     localStorage.setItem('name', myName);
     myHeading.textContent = 'Colleen is Cool, ' + myName;
 }
 if(!localStorage.getItem('name')) {
     setUserName();
    } else {
        let storedName = localStorage.getItem('name');
        myHeading.textContent = 'Colleen is cool, ' + storedName;
    }
    myButton.onclick = function() {
        setUserName();
    }
