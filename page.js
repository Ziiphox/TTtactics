
function constructbuttons(buttonnames) {
	buttons = ""
	for (index of buttonnames) {
		if (typeof index == "string") {
			buttons+= `<button class="headbutton">${index}</button>`;
		}
	lastindex = index;
	}
	document.getElementsByClassName("buttoncontainer")[0].innerHTML = buttons
}









// very first loading stage, before images or even css
document.addEventListener("DOMContentLoaded", (event) => {
	constructbuttons(["placeholder", "lorem", "ipsum", "dolor", "sit"]);
});

// loads after css
window.addEventListener("load", (event) => {
});