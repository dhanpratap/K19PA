var tabButtons=document.querySelectorAll(".tabContainer .buttonContainer button");
var tabPanels=document.querySelectorAll(".tabContainer  .tabPanel");

function showPanel(panelIndex,colorCode) {
    tabButtons.forEach(function(node){
        node.style.backgroundColor="";
        node.style.color="";
    });
    tabButtons[panelIndex].style.backgroundColor=colorCode;
    tabButtons[panelIndex].style.color="white";
    tabPanels.forEach(function(node){
        node.style.display="none";
    });
    tabPanels[panelIndex].style.display="block";
}
showPanel(0,'#3caf50');

document.getElementById("signUp").addEventListener("click",
function(){
    document.querySelector('.BoxU').style.display = "flex";
    document.querySelector('.foot').style.display = "none"; 
});
document.getElementById('closeU').addEventListener("click",
function(){
    document.querySelector('.BoxU').style.display = "none";
    document.querySelector('.foot').style.display = "block"; 
});
document.getElementById("signOut").addEventListener("click",
function(){
    document.querySelector('.BoxO').style.display = "flex";
    document.querySelector('.foot').style.display = "none"; 
});
document.getElementById('closeO').addEventListener("click",
function(){
    document.querySelector('.BoxO').style.display = "none";
    document.querySelector('.foot').style.display = "block"; 
});
document.getElementById('no').addEventListener("click",
function(){
    document.querySelector('.BoxO').style.display = "none";
});
document.getElementById("signUpSubmit").addEventListener("click",
function(){
    var x = document.forms["frm1"];
    if(x.elements[0].value != "" && x.elements[1].value != ""){
        var i = user.userName.length;
        user.userName[i] = x.elements[0].value;
        user.password[i] = x.elements[1].value;
    }
    document.querySelector('.BoxU').style.display = "none";
});