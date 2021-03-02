
window.addEventListener('load',shufleAll);
let allLevelDivs = document.querySelectorAll('[class*="level"]');
let twoSlice = [];

function shufleAll(){
	let allLevelDivs = document.querySelectorAll('[class*="level"]');
	for(const levelDiv of allLevelDivs){
		let allSlices = levelDiv.querySelectorAll('[class*="imige-holder"]');
		let orderArray = [];
	for(var i =0;i<allSlices.length;i++){
		orderArray.push(i+1);
		}
	for(var i=0;i<orderArray.length;i++){
		let rand = Math.floor(Math.random()*orderArray.length);
		allSlices[i].style.order = orderArray[rand];
		orderArray.splice(rand,0);
		}		
	}
	startGame();
}

function startGame(){
	

	addClickToSlice();
}

function addClickToSlice(){
	let allSlices = document.querySelectorAll('[class*="imige-holder"]');
	for(const slice of allSlices){
		slice.addEventListener('click',selectMe);
	}
}
function selectMe(){
	this.style.border = "1px solid black";
	twoSlice.push(this);
	if(twoSlice.length === 2){
		let orderFirst = window.getComputedStyle(twoSlice[0]).getPropertyValue('order');
		let orderSecond = window.getComputedStyle(twoSlice[1]).getPropertyValue('order');

		twoSlice[0].style.order = orderSecond;
		twoSlice[1].style.order = orderFirst;

		twoSlice[0].style.border = "none";
		twoSlice[1].style.border = "none";

		twoSlice.length = 0;
	}
}
/*
function setNavLinks(){
	let headerNavLinks = document.querySelectorAll(['data-lvl']);
	for (var i = 0; i < headerNavLinks.length; i++) {
		let link = headerNavLinks[i];
		link.addEventListener('click' function(){
			let curentWiev = document.getAttribute(['data-lvl']);
			for (var i = 0; i < allLevelDivs.length; i++) {
				allLevelDivs[i].style.display = "none";
			}
			let divToShow = document.querySelectorAll('.'+curentWiev);
			divToShow.style.display = "flex";
		})
	}
}
*/