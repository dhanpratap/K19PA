var user = {
    userName: "",
    password: ""
}
document.getElementById('subButton').addEventListener('click',
function(){
    document.querySelector('.container').style.display="none";
    document.querySelector('.hiddenContainer').style.display="flex";
    var x = document.forms["frm0"];
    if(x.elements[1].value != "" && x.elements[0].value != ""){
        if(x.elements[0].value == "Boro" && x.elements[1].value == "1234"){
            document.getElementById('txt').innerHTML="Click OK to continue";
            document.getElementById('okbtn').href="homePage.html";
            document.getElementById('userName').innerHTML = x.elements[0].value;
            user.userName = x.elements[0].value;
            user.password = x.elements[1].value;
            if (typeof(Storage) !== "undefined"){
                    localStorage.setItem("userName", user.userName);
            } else {
                    document.getElementById("userName").innerHTML = "Sorry, your browser does not support Web Storage...";
            }
        }else{
            document.getElementById('txt').innerHTML="Wrong Username/Password";
        }
    }else{
        document.getElementById('txt').innerHTML="Username/Password can't be empty";
    }
});

document.getElementById('okbtn').addEventListener('click',
function(){
    var x = document.forms["frm0"];
    x.elements[0].value = "";
    x.elements[1].value = "";
    document.querySelector('.container').style.display="flex";
    document.querySelector('.hiddenContainer').style.display="none";
});