// function fiche_run(selected){
// 	document.getElementById("global_blur").style.display="block";
// 	document.getElementById(selected).style.display="block";
// 	setTimeout(	function(){
// 			document.getElementById("global_blur").style.opacity="0.7";
// 			document.getElementById(selected).style.opacity="1";
// 		}, 500);
// 	return;
// }

// function ficheAll_close(){
// 	document.getElementById("global_blur").style.opacity="0";
// 	document.getElementById("box1_extended").style.opacity="0";
// 	document.getElementById("box2_extended").style.opacity="0";
// 	document.getElementById("box3_extended").style.opacity="0";
// 	setTimeout(	function(){
// 			document.getElementById("global_blur").style.display="none";
// 			document.getElementById("box1_extended").style.display="none";
// 			document.getElementById("box2_extended").style.display="none";
// 			document.getElementById("box3_extended").style.display="none";
// 		}, 500);
// 	return;

// }

function fiche_run(){
	document.getElementById("global_blur").style.display="block";
	document.getElementById("box_extended").style.display="block";
	setTimeout(	function(){
			document.getElementById("global_blur").style.opacity="0.7";
			document.getElementById("box_extended").style.opacity="1";
		}, 500);
	return;
}

function ficheAll_close(){
	document.getElementById("global_blur").style.opacity="0";
	document.getElementById("box_extended").style.opacity="0";
	setTimeout(	function(){
			document.getElementById("global_blur").style.display="none";
			document.getElementById("box_extended").style.display="none";
		}, 500);
	return;

}