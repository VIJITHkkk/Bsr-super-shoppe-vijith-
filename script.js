// Login Button
const loginBtn = document.getElementById("loginBtn");

if (loginBtn) {
    loginBtn.addEventListener("click", function () {

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (email === "" || password === "") {
            alert("Please enter Email and Password");
            return;
        }

        // Temporary Login
        if (email === "admin@bsr.com" && password === "admin123") {
            alert("Login Successful");
            window.location.href = "admin.html";
        } else {
            alert("Invalid Email or Password");
        }

    });
}

// Add Fish Button
const addFish = document.getElementById("addFish");

if (addFish) {
    addFish.addEventListener("click", function () {

        const name = document.getElementById("fishName").value;
        const price = document.getElementById("fishPrice").value;
        const stock = document.getElementById("fishStock").value;

        if (name === "" || price === "" || stock === "") {
            alert("Fill all fields");
            return;
        }

        alert("Fish Added Successfully");

        document.getElementById("fishName").value = "";
        document.getElementById("fishPrice").value = "";
        document.getElementById("fishStock").value = "";
    });
}
