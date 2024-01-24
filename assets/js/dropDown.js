let questions = document.querySelectorAll(".question-button");
	 
for(let question of questions){
    question.addEventListener("click", (event) => {
        event.target.classList.toggle("active-question");
    
        if(event.target.nextElementSibling.style.maxHeight == 0){
            event.target.nextElementSibling.style.maxHeight = event.target.nextElementSibling.scrollHeight + "px";
        }
        else{
            event.target.nextElementSibling.style.maxHeight = "";
        }
    });
}