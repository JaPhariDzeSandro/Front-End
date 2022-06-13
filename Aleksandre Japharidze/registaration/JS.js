function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}



function verifyPassword() {  
  var pw = document.getElementById("pswd").value;  
  //check empty password field  
  if(pw == "") {  
     alert("**Fill the password please!");  
     return false;  
  }  
   
 //minimum password length validation  
  if(pw.length < 8) {  
     alert("**Password length must be atleast 8 characters");  
     return false;  
  }  
  
//maximum length of password validation  
  if(pw.length > 15) {  
     alert("**Password length must not exceed 15 characters");  
     return false;  
  } else {  
     alert("Password is correct");  
  }  
}  


