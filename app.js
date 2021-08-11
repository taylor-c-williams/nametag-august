const nameInput = document.getElementById("name-input");

const nameButt = document.getElementById("name-butt");
const greenButt = document.getElementById("green-butt");
const purpleButt = document.getElementById("purple-butt");

const middleSection = document.getElementById("middle-section");

nameButt.addEventListener("click", () => {
	middleSection.textContent = nameInput.value;
});

greenButt.addEventListener("click", () => {
	middleSection.style.backgroundColor = "green";
});

purpleButt.addEventListener("click", () => {
	middleSection.style.backgroundColor = "#3c096c";
});
