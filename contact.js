document.getElementById("form-details").onsubmit = function(e) {
    e.preventDefault(); // Stop form from refreshing the page

    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var order = document.getElementById("order").value.trim();
    var comments = document.getElementById("comments").value.trim();

    if (name === "" || email === "" || order === "" || comments === "") {
        alert("All details need to be filled!!!");
    } else {
        // Optionally hide the form
        // document.getElementById("form-details").style.display = "none";

        // Show confirmation
        document.getElementById("confirmation-message").style.display = "block";

        // Clear the form (keeps placeholder intact)
        document.getElementById("form-details").reset();
    }
};
