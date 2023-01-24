var username=document.getElementById("username");
var password=document.getElementById("password");

var button=document.getElementById("button");

var array=JSON.parse(localStorage.getItem("facebook"));
    console.log(array)

button.addEventListener("click",function(){

    array.forEach(e => {
        if(username.value==e.username && password.value==e.password){
            window.location.href="success.html"
        }
    });

})
      
