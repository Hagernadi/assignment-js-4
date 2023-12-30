
 var yourEmail= document.getElementById('yourEmail');
 var yourPassword= document.getElementById('yourPassword');
var yourname=document.getElementById('yourName');
var username=document.getElementById('userName');
 var test = document.getElementById('incorrect');
 var correct=document.getElementById('correct');
 var link=document.getElementById('link');

 var regisArray=[]
 
/* username.innerHTML+=`
${register.name}
` */

 var bttn=document.getElementById('btn');
 bttn.addEventListener('click',function(){
    var register={
        name:yourname.value,
        email:yourEmail.value,
        password:yourPassword.value

    }
    
    if(validateForm(register)){
       regisArray.push(register)
      console.log(regisArray);
      correct.style.display="block"
        link.href="home.html"
       

    }
    else{
      test.style.display="block"
     /*  alert("invalid") */

    }
   
   
     
 })

 function validateForm(register){
    var rejix=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var valid=/^[A-z]{1,9}[0-9]{1,4}$/;
    if(rejix.test(register.email)&&valid.test(register.password)){
      return true
    }
    else{
      return false
    }
 }



 var yourPassword=document.getElementById('yourPassword');
yourPassword.addEventListener('click',function(){
    yourPassword.style.borderColor="rgb(23, 162, 184)";
    yourEmail.style.borderColor="white";
     displayVIsible();
})
 var yourEmail=document.getElementById('yourEmail');
   yourEmail.addEventListener('click',function(){
    yourEmail.style.borderColor="rgb(23, 162, 184)";
    yourPassword.style.borderColor="white";
     
})
var content=document.getElementsByClassName('contentt');
for(var i=0;i<content.length;i++){
content[i].addEventListener('click',function(){
displayHidden()


})
}

var btn=document.getElementById('btn');
btn.addEventListener('click',function(){
    btn.style.borderColor="rgb(23, 162, 184)"
    btn.style.borderWidth="3px"
    
})
var boxhide=document.getElementById('boxHide') ;
function displayVIsible(){
   boxhide.style.opacity='1';
}


function displayHidden(){
   boxhide.style.opacity='0';
}

 /* function clearForm(){
    yourEmail.value=""
    yourPassword.value=""
 }
 clearForm() */


   
function username(){
    yourname.style.opacity='1'; 
      
}
username()












