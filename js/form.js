var contact = document.querySelector("#send");

contact.addEventListener("click", function(event) {
	event.preventDefault();

	var erros = validateForm(contact);
	console.log(erros);
	console.log(sendForm)

	if(erros.length > 0) {
		exibeErro(erros);
		return;
	}else if(erros.length == 0) {
		sendForm();
	}

	var errorMessage = document.querySelector("#error-message");
	errorMessage.innerHTML = "";

})

function sendForm(contact) {
	contact.submit();
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

function validateForm(contact) {

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


