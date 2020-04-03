function GG()                                    
{ 
    var name = document.forms["RegForm"]["name"];            
    var email = document.forms["RegForm"]["email"];    
    var phone = document.forms["RegForm"]["phone"];
    var password = document.forms["RegForm"]["password"];  
    var age = document.forms["RegForm"]["age"];  
    var phoneno = /^\d{10}$/;
   var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (name.value == "")                                  
    { 
        window.alert("Please enter your name."); 
        name.focus(); 
        return false; 
    } 
    if(age.value =="" )
    {
        window.alert("Please enter a valid Age.");
        age.focus();
        return false;
    }
    if(isNaN(age.value))
    {
        window.alert("Please enter a valid Age.");
        age.focus();
        return false;
    }
    

    if (email.value == "")                                   
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
    if (reg.test(email.value)==false) {
            window.alert("Please enter a valid e-mail address."); 
            email.focus();
                       return false;}
   
   if (phone.value == "")                           
    { 
        window.alert("Please enter your telephone number."); 
        phone.focus(); 
        return false; 
    }
    if (phoneno.test(phone.value)==false) {
        window.alert("Please enter a valid Phone Number."); 
        email.focus()
                   return false;}


    if (password.value == "")                        
    { 
        window.alert("Please enter your password"); 
        password.focus(); 
        return false; 
    } 
    return true; 
}