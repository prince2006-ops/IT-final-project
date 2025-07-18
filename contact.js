document.getElementById("form-details").onsubmit = function(e) {
    e.preventDefault(); 

    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var order = document.getElementById("order").value.trim();
    var comments = document.getElementById("comments").value.trim();

    if (name === "" || email === "" || order === "" || comments === "") {
        alert("All details need to be filled!!!");
    } else {
      

    
        document.getElementById("confirmation-message").style.display = "block";
        document.getElementById("form-details").reset();
    }
};
