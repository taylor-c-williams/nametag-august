const nameInput = document.getElementById("name-input");
const nameButt = document.getElementById("name-butt");
const middleSection = document.getElementById("middle-section");

nameButt.addEventListener("click", () => {
	middleSection.textContent = nameInput.value;
});
