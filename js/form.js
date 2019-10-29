var action = document.querySelector("#send");
var infos = document.querySelector("#contactForm")

action.addEventListener("click", function(event) {
	event.preventDefault();

	var erros = validateForm(action);
	console.log(erros);
	console.log(sendForm)

	if(erros.length > 0) {
		exibeErro(erros);
		return;
	}else if(erros.length == 0) {
		sendForm(infos);
	}

	var errorMessage = document.querySelector("#error-message");
	errorMessage.innerHTML = "";

})

function sendForm(action) {
	infos.submit();
}

function exibeErro(erros){
	var ul = document.querySelector("#error-message");
	ul.innerHTML = "";

	erros.forEach(function(erro){
		var li = document.createElement("li");
		li.textContent = erro;
		ul.appendChild(li);
	});
}

function validateForm(action) {

	var erros = [];

	if (document.forms["contactForm"]["name"].value == "") {
		erros.push("Name must be filled out");
	}

	if (document.forms["contactForm"]["email"].value == "") {
		erros.push("Email must be filled out");
	}

	if (document.forms["contactForm"]["msg"].value == "") {
		erros.push("Message cannot be blank");
	}

	return erros;
}


