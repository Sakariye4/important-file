// make a funtion;

 
function validate(){
    const name = document.myform.name.value;
    const password = document.myform.password.value;

    if(name == null || name==""){
        alert("the name must be some string");
        return false;
    }
    else if (password.length<6){
        alert("the password at leat 6 charchet");
        return false;
    }
}