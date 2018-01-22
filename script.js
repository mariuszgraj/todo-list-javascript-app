const ul = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");
let todo;
let I;
let li;

ul.addEventListener("click", (e) => {
	if (e.target.tagName == "I") {
		I = e.target;
		ul.removeChild(I.parentNode.parentNode);
	} else if (e.target.tagName == "LI") {
		li = e.target;
		li.classList.toggle("completed");
	}	 
});

button.addEventListener("click", () => {
	todo = document.createElement("li");
	todo.innerHTML = "<span><i class='fa fa-times' aria-hidden='true'></i></span> " + input.value;
	ul.appendChild(todo);
	input.value = "";
});