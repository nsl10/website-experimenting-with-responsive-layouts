var name1 = document.getElementById("name");

name1.addEventListener("input", naming);

function naming() {
	var names = name1.value;
nameinput.innerHTML = "Hello "+ names+ "!";	
}