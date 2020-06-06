// For First Image
var randomNumber1=Math.floor((Math.random()*6)+1);
var randomDiceImage1="dice"+randomNumber1+".png";
var randomImageSource1="images/"+randomDiceImage1;

var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource1);

// For second image
var randomNumber2=Math.floor((Math.random()*6)+1);
var randomDiceImage2="dice"+randomNumber2+".png";
var randomImageSource2="images/"+randomDiceImage2;

var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);

//Conclusion
if(randomNumber1===randomNumber2){
document.getElementsByTagName("h1")[0].innerHTML="Draw!";
}

if(randomNumber1>randomNumber2){
document.getElementsByTagName("h1")[0].innerHTML="🚩Player 1 Wins!";
}

if(randomNumber1<randomNumber2){
document.getElementsByTagName("h1")[0].innerHTML="Player 2 Wins!🚩";
}
