let form=document.getElementById("form");
let input=document.getElementById("comment");
let right=document.querySelector(".right");


let data={};
function creatpost(){
	data["text"]=input.value;
}

form.addEventListener("submit",e=>{
	creatpost();
	e.preventDefault();
    let date=new Date();
    let time=date.toLocaleTimeString();
	right.innerHTML +=`
        <div class="comment-section">
            <div class="dot-head">
                <img src="image/dhoni.jfif" class="logo" alt="no image">
                <div class="dot-comment"></div>
            </div>
            <div class=comment-text>
                <p>${data.text}</p>
                <div class="comment-icons">
                    <div>
                        <i onclick="edit(this)" class="fa fa-edit"></i>
                        <i onclick="remove(this)" class="fa fa-trash"></i>
                    </div>
                    <div>
                        <p>${time}</p>
                    </div>
                </div>
            </div>
        </div>
        `
		input.value="" ;
})

function remove(e){
	e.parentNode.parentNode.parentNode.parentNode.remove();
}
		 
function edit(e){
	input.value=e.parentNode.parentNode.previousElementSibling.innerText;
	e.parentNode.parentNode.parentNode.parentNode.remove();
}