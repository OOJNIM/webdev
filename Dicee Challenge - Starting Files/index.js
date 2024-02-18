var randomNumber  = Math.random();
randomNumber = Math.floor(randomNumber * 6) + 1;

document.querySelector(".img1").setAttribute("src",`images/dice${randomNumber}.png`);

var randomNumber1  = Math.random();
randomNumber1 = Math.floor(randomNumber1 * 6) + 1;

document.querySelector(".img2").setAttribute("src",`images/dice${randomNumber1}.png`);

if (randomNumber > randomNumber1) {
    document.querySelector("h1").innerText="Player 1 wins 🚩";
} else if (randomNumber < randomNumber1) {
    document.querySelector("h1").innerText="Player 2 wins 🚩";    
} else {
    document.querySelector("h1").innerText="Draw";     
}

//querySelectorAll("img").setAttribute 는 오류가 난다. array이니까 
