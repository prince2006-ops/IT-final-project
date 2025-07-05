document.getElementById("form-details").onsubmit=function(e) {
    var name= document.getElementById("name").value;
    var email= document.getElementById("email").value;
    var order= document.getElementById("order").value;
    var comments= document.getElementById("comments").value;
    if(name===""||email===""||order===""||comments===""){
        alert("All details need to be filled!!!")
    }
    e.preventDefault();
}
 