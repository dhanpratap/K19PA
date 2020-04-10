document.getElementById('subButton').addEventListener('click',
function(){
    document.querySelector('.container').style.display="none";
    document.querySelector('.hiddenContainer').style.display="flex";
    var x = document.forms["frm0"];
    if(x.elements[1].value != "" && x.elements[0].value != ""){
        if(x.elements[0].value == "Sunil" && x.elements[1].value == "1234"){
            document.getElementById('txt').innerHTML="Click OK to continue";
            document.getElementById('okbtn').href="homePage.html";
            document.getElementById('userName').innerHTML = x.elements[0].value;
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