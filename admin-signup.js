document.getElementById("adminForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let department = document.getElementById("department").value;

    let message = document.getElementById("message");

    // Basic validation
    if (name && email && password && department) {
        message.style.color = "green";
        message.innerText = "Admin registered successfully!";
        
        // Example: reset form
        document.getElementById("adminForm").reset();
    } else {
        message.style.color = "red";
        message.innerText = "Please fill all fields!";
    }
});