var firstname=document.getElementById("first-name");
var surname=document.getElementById("second-name");
var mobile=document.getElementById("mobile");
var password=document.getElementById("password");

var female=document.querySelector(".female");
var male=document.querySelector(".male");
var custom=document.querySelector(".custom");

var gender1=document.querySelector(".gender-box1")
var gender2=document.querySelector(".gender-box2")
var gender3=document.querySelector(".gender-box3")

var error1=document.querySelector(".error1");
var error2=document.querySelector(".error2");
var error3=document.querySelector(".error3");
var error4=document.querySelector(".error4");
var error5=document.querySelector(".error5");
var error6=document.querySelector(".error6");
var error7=document.querySelector(".error7")

var button=document.getElementById("btn");

if(localStorage.getItem("facebook")==null){
	localStorage.setItem("facebook","[]");
}

data={};

button.addEventListener("click",function(){

    if(firstname.value==""){
        firstname.style.border="1px solid red";
        error1.style.display="flex";
    }
    else{
        firstname.style.border="1px solid #dadde1";
        error1.style.display="none";
    }

    if(surname.value==""){
        surname.style.border="1px solid red";
        error2.style.display="flex";
    }
    else{
        surname.style.border="1px solid #dadde1";
        error2.style.display="none";
    }

    if(mobile.value==""){
        mobile.style.border="1px solid red";
        error3.style.display="flex";
    }
    else{
        mobile.style.border="1px solid #dadde1";
        error3.style.display="none";
    }

    if(password.value==""){
        password.style.border="1px solid red";
        error4.style.display="flex";
    }
    else{
        password.style.border="1px solid #dadde1";
        error4.style.display="none";
    }

    if(female.checked==false && male.checked==false && custom.checked==false){
        gender1.style.border="1px solid red";
        gender2.style.border="1px solid red";
        gender3.style.border="1px solid red";
        error6.style.display="flex"
    }
    else{
        gender1.style.border="1px solid #dadde1";
        gender2.style.border="1px solid #dadde1";
        gender3.style.border="1px solid #dadde1";
        error6.style.display="none"
    }

    var array=JSON.parse(localStorage.getItem("facebook"));
    var length=array.length;
    console.log(length)

    user:if(firstname.value!=""){
        if(surname.value!=""){
            if(mobile.value!=""){
                for(i=0;i<length;i++){
                    if(array[i].username==mobile.value){
                        mobile.style.border="1px solid red";
                        error3.style.display="flex";
                        error7.style.display="flex";
                        break user;
                    }
                }
                if(password.value!=""){
                    if(female.checked!=false || male.checked!=false || custom.checked!=false){
                        data.firstname=firstname.value;
                        data.surname=surname.value;
                        data.username=mobile.value;
                        data.password=password.value;
                        data["DOB"]="date of birth";
                        data.gender="gender"
                        console.log(data)
                        
                        array[length]=data;
                        console.log(array);

                        localStorage.setItem("facebook",JSON.stringify(array))

                        window.location.href="login.html"
                    }   
                }
            }
        }
    }
    

})