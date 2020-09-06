// very first loading stage, before images or even css
document.addEventListener("DOMContentLoaded", (event) => {
	
});


// loads after css
window.addEventListener("load", (event) => {
	document.getElementsByClassName("buttoncontainer")[0].innerHTML = "testies"
});