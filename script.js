//your JS code here. If required.
function getvalue(){
	var fname=document.getElementsByName("fname")[0].value;
	var lname=document.getElementsByName("lname")[0].value;
	var phone=document.getElementsByName("phone")[0].value;
	var email=document.getElementsByName("email")[0].value;

	alert(`
	First Name: ${fname}
	Last Name: ${lname}
	Phone Number: ${phone}
	Email ID:${email}`)
}