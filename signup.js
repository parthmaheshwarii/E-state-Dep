document.addEventListener('DOMContentLoaded', function() {
    let btnSignup = document.querySelector(".btn-signup");

    btnSignup.addEventListener('click', function() {
        let getUsername = document.querySelector("#username").value;
        let getPassword = document.querySelector("#password").value;

        if (getUsername === "Naveen" && getPassword === "naveen123") {
            alert("Login Successful");
            window.location.href='home.html'
            // Add further actions for successful signup, like redirecting to another page or displaying a success message
        } else {
            alert("Sign Up Failed");
            // Add further actions for failed signup, like displaying an error message
        }
    });
});
