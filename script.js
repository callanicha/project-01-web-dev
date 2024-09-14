const btn = document.getElementById("toggle-btn")
const navBar = document.querySelector(".navBar")

btn.addEventListener("click", () => {
	document.querySelector(".navBar").classList.toggle("show")
})