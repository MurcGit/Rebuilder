var myImage = document.querySelector('img');
var myButton = document.querySelector('button');

function nextImage()
{
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Sith.png')
    {
        myImage.setAttribute('src', 'images/logoStar.png');
    }
    else
    {
        myImage.setAttribute('src', 'images/Sith.png');
    }
}

myButton.onclick = function()
{
    nextImage();
}

/*var myButtonUser = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName()
{
    var myName = prompt('Enter your name.');
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Star Wars, May the force be with You, ' + myName;  
}

if(!localStorage.getItem('name'))
{
    setUserName();
}
else
{
    var storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Star Wars, May the force be with You, ' + myName;
}

myButtonUser.onclick = function()
{
    setUserName();
}
*/


