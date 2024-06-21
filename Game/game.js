// alert("connected");
// let userChoice =0;
let userSocre =0;
let compSocre =0;

let userScoreOnPage = document.querySelector(".userScore");
let compScoreOnPage = document.querySelector(".compScore");

const stone = document.querySelector("#stone");
const peper = document.querySelector("#paper");
const Scissors = document.querySelector("#scissors");


stone.addEventListener("click",()=>{
	console.log("stone");
});
peper.addEventListener("click",()=>{
	console.log("peper");
});
Scissors.addEventListener("click",()=>{
	console.log("Scissors");
});


let arr = [stone,peper,Scissors];

//userChoice
 
arr.forEach((item)=>{
	item.addEventListener("click",()=>{
		
		let userChoice = item;
		playeGame(userChoice);
	})
});
//computer choice
const computerChoice = ()=>arr[(Math.floor(Math.random()*3))];



//play game 

let  playeGame = (userChoice)=>{
	
	 
	compChoice = computerChoice();
	if(userChoice == computerChoice()){
		alert("Tie");
	}else if (
        (userChoice == stone && compChoice == scissors) ||
        (userChoice == paper && compChoice == stone) ||
        (userChoice == scissors && compChoice == paper)
    ){
		alert("you won");
		userSocre++;
		userScoreOnPage.innerHTML=userSocre;
		
	}else {
        alert('Computer wins!');
		compSocre++;
		compScoreOnPage.innerHTML=compSocre;
    }
	 
	
}

 