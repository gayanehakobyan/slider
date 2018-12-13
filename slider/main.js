let slides = document.getElementsByClassName("slide");
let circle = document.getElementsByClassName("circle");
let index=1;
display(index);

function nextPrevSlide(n){
	display(index+=n)
}
function picture(n){
	display(index=n)
}

function display(n){
	console.log(index)
	if (n > slides.length) {index = 1}    
  	if (n < 1) {index = slides.length}
	for(let i=0; i<slides.length; i++){
		slides[i].style.display = "none"; 
	}
  slides[index-1].style.display = "block";  
}