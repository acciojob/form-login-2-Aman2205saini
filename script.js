function getvalue(event){
    event.preventDefault();
    var fname = document.getElementsByName("firstName")[0].value;
    var lname = document.getElementsByName("lastName")[0].value;
    var phone = document.getElementsByName("phoneNumber")[0].value;
    var email = document.getElementsByName("emailID")[0].value;

    alert(`
        First Name: ${fname}
        Last Name: ${lname}
        Phone Number: ${phone}
        Email ID: ${email}
    `);
}