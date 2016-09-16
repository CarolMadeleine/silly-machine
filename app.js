window.addEventListener("load", function() {
	var boton = document.getElementById("cri");
	var conta = 1;
	boton.addEventListener("click", function() {
        if(conta == 1){
            document.getElementsByClassName("circulo")[0].style.borderColor = "#71226e";
            document.getElementById("color").placeholder = "Anaranjado";
            document.getElementsByClassName("circulo")[1].style.borderColor = "#D7FFF1";
            document.getElementsByClassName("circulo")[2].style.borderColor = "#D7FFF1";
        }
        if(conta == 2){
            document.getElementsByClassName("circulo")[1].style.borderColor = "#71226e";
            document.getElementById("color").placeholder = "Guinda";
            document.getElementsByClassName("circulo")[0].style.borderColor = "#D7FFF1";
            document.getElementsByClassName("circulo")[2].style.borderColor = "#D7FFF1";
        }
        if(conta == 3){
            document.getElementsByClassName("circulo")[2].style.borderColor = "#71226e";
            document.getElementById("color").placeholder = "Verde";
            document.getElementsByClassName("circulo")[1].style.borderColor = "#D7FFF1";
            document.getElementsByClassName("circulo")[0].style.borderColor = "#D7FFF1";
            conta = 0;
        }
        conta++;
    });
    var botonDos = document.getElementById("supercri");
    botonDos.addEventListener("click", function(){
        var color = document.getElementById("color").value;
        if(color == "anaranjado"){
            document.getElementsByClassName("circulo")[0].style.borderColor = "#71226e";
            document.getElementsByClassName("circulo")[1].style.borderColor = "#D7FFF1";
            document.getElementsByClassName("circulo")[2].style.borderColor = "#D7FFF1";
        }
        else if(color == "guinda"){
            document.getElementsByClassName("circulo")[1].style.borderColor = "#71226e";
            document.getElementsByClassName("circulo")[0].style.borderColor = "#D7FFF1";
            document.getElementsByClassName("circulo")[2].style.borderColor = "#D7FFF1";
        }
        else if(color == "verde"){
            document.getElementsByClassName("circulo")[2].style.borderColor = "#71226e";
            document.getElementsByClassName("circulo")[1].style.borderColor = "#D7FFF1";
            document.getElementsByClassName("circulo")[0].style.borderColor = "#D7FFF1";
        }
    });
});










/*color aleatorio

window.addEventListener("load", function() {
	var boton = document.getElementById("supercri");
	boton.addEventListener("click", function() {
		var color = document.getElementById("color").value;
		var cir = document.getElementById("cir").value;
		var resultado = document.getElementById("cir").style.borderColor = color;
		});
});*/
