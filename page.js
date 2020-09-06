// very first loading stage, before images or even css
document.addEventListener("DOMContentLoaded", (event) => {
	
});


// loads after css
window.addEventListener("load", (event) => {
	const buttonnames = ["placeholder", "lorem", "ipsum", "dolor", "sit"]
	buttons = ""
	for (index of buttonnames) {
		buttons+= `<button class="headbutton">${index}</button>`
	}
	document.getElementsByClassName("buttoncontainer")[0].innerHTML = buttons
	
});