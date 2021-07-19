function checkuser(username,type){
    if (username[0].toUpperCase()===username[0] && username.length<10 && username.length>5){
        return"Username valid";
    }
    else if(type==="mamager"||type==="admin"){
        return "Username valid"
    }
    else return "Username invalid";
    
    }
    
    console.log(acces);
   

 var acces = checkuser("Mamadou","employee");
       console.log(acces,)