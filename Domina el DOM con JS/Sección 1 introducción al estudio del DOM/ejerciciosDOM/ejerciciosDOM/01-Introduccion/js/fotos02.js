window.onload = function() {

	console.time("tiempo");
	//Recuperamos las fotos dentro de la división
	var fotos = document.querySelector("div");
	console.dir(document.getElementsByTagName("img"));
	console.info("Info, cara de bola");
	console.warn("Warn, cara de bola");
	console.error("Error, cara de bola");
	console.log("Log, cara de bola");

	console.group("Imagenes desde el group");
  console.dir(document.querySelectorAll("img"));
	console.groupEnd();

	console.groupCollapsed("Imágenes desde el grupCollapsed");
  console.dir(document.querySelectorAll("img"));
	console.groupEnd();

	//Listener
	fotos.addEventListener("click",function(e){
		//Igualdad estricta
		if(e.target.tagName==="IMG"){
			console.log("Pulso una imagen");
		} else {
			console.log("NO pulso una imagen");
		}
	}, false);
	console.timeEnd("tiempo");

}
