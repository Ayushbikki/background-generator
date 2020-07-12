var css=document.querySelector("h3");
var color2=document.querySelector(".color2");
var body=document.getElementById("gradient");

//console.log(css);
//console.log(color1);
//console.log(color2); why .color2

color1.addEventListener("input",function() {
	// body...
	body.style.background=
	"linear-gradient(to right, "
	+color1.value
	+","
	+color2.value
	+")";
	css.textContent=body.style.background + ";";

   

})
color2.addEventListener("input",function() 
	// body...
	body.style.background=
	"linear-gradient(to right, "
	+color1.value
	+","
	+color2.value
	+")";
	css.textContent=body.style.background + ";";
 

})



//can put both in a separate funcPA
//function setGradient(){
//	body.style.background=
//	"linear-gradient(to right, "
//	+color1.value
//	+","
//	+color2.value
//	+")";
//	css.textContent=body.style.background + ";";
//		}
//	color2.addEventListener("input",setGradient)
 //can't use setGradient() otherwise it will call automat
 //without call

//}
