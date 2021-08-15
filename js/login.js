//Handle Login page
document.getElementById('login-submit').addEventListener('click',function(){
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    //Get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    //check email and password
    if(userEmail == 'sontan@baap.com' && userPassword == 'secret'){
        window.location.href = 'banking.html'
    }
})


