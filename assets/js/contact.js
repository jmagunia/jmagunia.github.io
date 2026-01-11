function submitNorthPennContactForm() {
	var URL = "https://bvmxe8lc56.execute-api.us-east-1.amazonaws.com/v1/contact";
	var xmlhttp = new XMLHttpRequest();
	var dataCapsule = {"name":document.getElementById("edit-name").value,"mail":document.getElementById("edit-mail").value,"referrer":document.getElementById("edit-referrer").value,"message":document.getElementById("edit-message").value,"gRecapResp":document.getElementById("g-recaptcha-response").value};
	xmlhttp.open("POST", URL, true);
	xmlhttp.setRequestHeader('Content-type', 'application/json charset=utf-8');
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			if (xmlhttp.responseText == '"MailSent"') {
				alert("Thank you for your interest - Email sent!");
			} else {
				alert("There was a problem sending the form. Please try again later.");
			}
			grecaptcha.reset();
			document.getElementById("contact-message-feedback-form").reset();
		}
	}
	xmlhttp.send(JSON.stringify(dataCapsule));
}
