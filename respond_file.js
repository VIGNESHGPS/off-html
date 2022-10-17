const form=document.getElementById("form");
const username=document.getElementById("username");
const qualification=document.getElementById("qualification");
const mobil=document.getElementById("mobil");
const password=document.getElementById("password");
const confirm_pass=document.getElementById("confirm_pass");

form.addEventListener('submit',e=>
    {e.preventDefault();
    checkinput();}

);

function checkinput()
{
    const usernamevalue=username.value.trim();
    const qualificationvalue=qualification.value.trim();
    const mobilvalue=mobil.value.trim();
    const passwordvalue=password.value.trim();
    const confirm_passvalue=confirm_pass.value.trim();

if(username.value === "")
{
    SetError (username,"usernamecannot be blank")}
else{
    setsuccess(username)

}
if(mobil === " "){
    SetError (mobil,"mobile number cannot be blank")}

else{
    setsuccess(mobil)

}
if(password=== " "){
    SetError (password,"password cabnot be blank")}
else{
    setsuccess(password)

}
if(confirm_pass === " "){
    SetError (confirm_pass,"confirm_pass cannot be ")}
else if(confirm_pass !== password)
{
    SetError (confirm_pass,"confirm_pass cannot be ")
}
else{
    setsuccess(confirm_pass)

}
function SetError(input,message){
    const formcontent = input.parentElement;
    const small = formcontent.querySelector("small")
    formcontent.className ='formcontent error'
    small.innerText = message;

}
function setsuccess(input,message){
    const formcontent = input.parentElement;
    formcontent.className = 'formcontent success'
    
}
}