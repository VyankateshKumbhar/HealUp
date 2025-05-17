document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const signupLink = document.querySelector("a[href='signup.html']");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        
        const storedUser = JSON.parse(localStorage.getItem("user"));
        
        if (!storedUser || storedUser.email !== email || storedUser.password !== password) {
            alert("Invalid email or password!");
            return;
        }

        alert("Login successful!");
        window.location.href = "index.html";
    });

    if (signupLink) {
        signupLink.addEventListener("click", function (event) {
            event.preventDefault();
            window.location.href = "signup.html";
        });
    }
});
