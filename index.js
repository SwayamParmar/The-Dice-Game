// this JavaScript is for player 1 
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";      //for eg. dice1.png - dice6.png

var randomImageSources = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSources);


// this JavaScript is for player 2 
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSources2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSources2);


// this javascript is for player 3
var randomNumber3 = Math.floor(Math.random() * 6) + 1;

var randomImageSources3 = "images/dice" + randomNumber3 + ".png";

var image3 = document.querySelectorAll("img")[2].setAttribute("src", randomImageSources3);



// declaring the winners between both player ! 
if(randomNumber1 > randomNumber2 && randomNumber1 > randomNumber3){
    document.querySelector("h1").innerHTML = "🚩 Player 1 Win!";
}
else if(randomNumber2 > randomNumber1 && randomNumber2 > randomNumber3){
    document.querySelector("h1").innerHTML = "Player 2 Win!🚩";
}
else if(randomNumber3 > randomNumber2 && randomNumber3 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 3 Win!🚩";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}