//your JS code here. If required.
function getvalue(){
	var fname=document.getElementsByName("First Name")[0].value;
	var lname=document.getElementsByName("Last Name")[0].value;
	var phone=document.getElementsByName("Phone Number")[0].value;
	var email=document.getElementsByName("Email ID")[0].value;

	alert(`
	First Name: ${fname}
	Last Name: ${lname}
	Phone Number: ${phone}
	Email ID:${email}`)
}