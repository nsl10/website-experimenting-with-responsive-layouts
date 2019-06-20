var Languages = document.getElementById("Languages");
var About = document.getElementById("About");
var Contact = document.getElementById("Contact");
var LanguagesParagraph = document.getElementById("LanguagesParagraph");
var AboutParagraph = document.getElementById("AboutParagraph");

Languages.addEventListener("click", pClick);
About.addEventListener("click", pClick);
Contact.addEventListener("click", pClick);


function pClick() {
	var paraId = this.attributes["data-para"].value;
	var para = document.getElementById(paraId);

	console.log(paraId);

	if (para.className === "container hide") {
		para.className = "container";
	}
	else {
		para.className = "container hide";
	}
	};