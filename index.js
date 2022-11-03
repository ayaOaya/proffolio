function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "username",
        Password : "password",
        To : 'alyaauaacn@gmail.com',
        From : document.getElementById('email').value,
        Subject : "This is the subject",
        Body : "Name:" + document.getElementById('name').value
        +'<br>  Email:' +  document.getElementById('email').value
        +'<br>  phone no:' +  document.getElementById('phone').value
        +'<br>  Message:' +  document.getElementById('message').value
    }).then(
      message => alert('Message sent Succesfully!')
    );
}