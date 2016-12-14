var 
col2=document.getElementById("col2"),
col4=document.getElementById("col4"),
input=document.getElementById("input"),
buttonStart= document.getElementById("button-start") ,
buttonStop= document.getElementById("button-stop");


document.getElementById("col1").onclick=  function (){
	col2.classList.toggle("colum-color");
	if (!col2.classList.contains ("colum-color")){
		input.disabled= true;
		buttonStart.disabled= true;
		buttonStop.disabled= true;
		clearInterval(TimerIDChangeImage);
	}else{
		input.disabled= false;
		if(input.value !==""){
			buttonStart.disabled= false;
			buttonStop.disabled= false;
			TimerIDChangeImage = setInterval(ChangeImage, 1000);
		}
	}
};

document.getElementById("input").oninput=  function (){
	if(col2.classList.contains("colum-color"))
		col4.innerHTML= this.value;
	if(this.value ===""){
		buttonStart.disabled= true;
		buttonStop.disabled= true;
		clearInterval(TimerIDChangeImage);
	}else{
		buttonStart.disabled= false;
		buttonStop.disabled= false;
	}
};


function ChangeImage (){
	if((col4.innerHTML !=="") &&(col2.classList.contains("colum-color"))) {
		let img = document.getElementById("row__img");

		switch (img.alt){
			case 'mops':
			img.src="img/mops1.jpg";
			img.alt="mops1"
			break;
			case 'mops1':
			img.src="img/mops.jpg";
			img.alt="mops"
			break;
			default:
			console.log(img.alt);

		}
	}
}
var TimerIDChangeImage;

buttonStart.onclick = function(){
	TimerIDChangeImage = setInterval(ChangeImage, 2000);
	console.log("start "+TimerIDChangeImage);
};

buttonStop.onclick = function(){
	clearInterval(TimerIDChangeImage);
	console.log("stop "+TimerIDChangeImage);

};