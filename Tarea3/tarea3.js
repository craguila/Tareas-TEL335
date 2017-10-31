display_on_mobile = document.querySelector(".display_on_mobile i");
nav_mobile = document.querySelector(".nav-mobile ul");
display_on_mobile.onclick = function(evt){
	if (display_on_mobile.classList.contains("active")){
		nav_mobile.style.display = "none";
		display_on_mobile.classList.remove("active");
	} else {
		nav_mobile.style.display = "block";
		display_on_mobile.classList.add("active");
	}
}

buttons = document.querySelectorAll(".menu_item");
buttons.forEach(function(btn,index){
	btn.onclick = function(evt){
		document.querySelectorAll(".problemas div").forEach(function(elem,index){
			elem.classList.add("hide");
		});
		target = evt.target.getAttribute("data_target");
		document.querySelector("#"+target).classList.remove("hide");
		};
});

document.querySelector("#grado").onchange = function(evt){
	document.querySelectorAll("#polinomios .grado").forEach(function(elem,index){
		elem.classList.add("hide");
    });
	document.querySelectorAll(".grado_"+evt.target.value).forEach(function(elem,index){
		elem.classList.remove("hide");
    });
	results = document.querySelector("#polinomios .results").children;
	for (i=0;i<results.length;i++){
		results[i].classList.add("hide");
	}
	for (i=1;i<=evt.target.value;i++){
		document.querySelector(".raiz"+i).classList.remove("hide");
	}
};
boton1 = document.querySelector(".grado_1 .calcular");
boton2 = document.querySelector(".grado_2 .calcular");

boton1.onclick = function(evt){
	a = document.querySelector(".grado_1 input[name='a']");
	b = document.querySelector(".grado_1 input[name='b']");
	if (a.value==0){
        results = document.querySelector("#polinomios .results").children;
        for (i=0;i<results.length;i++){
            results[i].classList.add("hide");
        }
		document.querySelector("#polinomios .results .error").classList.remove("hide");
		document.querySelector("#polinomios .results .error").text = "A no puede ser 0";
    } else {
		document.querySelector("#polinomios .results .error").classList.add("hide");
		document.querySelector("#polinomios .results").children[0].classList.remove("hide");
		document.querySelector("#polinomios .results .raiz1").text = "X = " + (-b.value / a.value);
    }
}

boton2.onclick = function(evt){
	a = document.querySelector(".grado_2 input[name='a']");
	b = document.querySelector(".grado_2 input[name='b']");
	c = document.querySelector(".grado_2 input[name='c']");
	delta = b.value*b.value - 4* a.value *c.value;
	if (a.value==0){
        results = document.querySelector("#polinomios .results").children;
        for (i=0;i<results.length;i++){
            results[i].classList.add("hide");
        }
		document.querySelector(".results .error").classList.remove("hide");
		document.querySelector(".results .error").text = "A no puede ser 0.";
	} else if(delta < 0){
        results = document.querySelector("#polinomios .results").children;
        for (i=0;i<results.length;i++){
            results[i].classList.add("hide");
        }
		document.querySelector(".results .error").classList.remove("hide");
		document.querySelector(".results .error").text = "El discrimintante es negativo, el polinomio no tiene raices reales.";
    } else {
		document.querySelector(".results .error").classList.add("hide");
		document.querySelector("#polinomios .results").children[0].classList.remove("hide");
		document.querySelector("#polinomios .results").children[1].classList.remove("hide");
		document.querySelector("#polinomios .results .raiz1").text = "X1 = " + ((-b.value + Math.sqrt(delta))/ 2*a.value);
		document.querySelector("#polinomios .results .raiz2").text = "X2 = " + ((-b.value - Math.sqrt(delta))/ 2*a.value);
    }
}

document.querySelector("#herramienta").onchange = function(evt){
	document.querySelectorAll("#triangulos .grado").forEach(function(elem,index){
		elem.classList.add("hide");
    });
	document.querySelectorAll("."+evt.target.value).forEach(function(elem,index){
		elem.classList.remove("hide");
    });
	results = document.querySelector("#triangulos .results").children;
	for (i=0;i<results.length;i++){
		results[i].classList.add("hide");
	}
	document.querySelector(".results .restante").classList.remove("hide");
};


botonlado = document.querySelector(".lado .calcular");
botonangulo = document.querySelector(".angulo .calcular");

botonangulo.onclick = function(evt){
	a = document.querySelector(".angulo input[name='a']");
	b = document.querySelector(".angulo input[name='b']");
	if (a.value < 0 || b.value <0){
        results = document.querySelector("#triangulos .results").children;
        for (i=0;i<results.length;i++){
            results[i].classList.add("hide");
        }
		document.querySelector("#triangulos .results .error").classList.remove("hide");
		document.querySelector("#triangulos .results .error").text = "Los ángulos no pueden ser negativos";
	
	} else if (a.value + b.value > 180){
        results = document.querySelector("#triangulos .results").children;
        for (i=0;i<results.length;i++){
            results[i].classList.add("hide");
        }
		document.querySelector("#triangulos .results .error").classList.remove("hide");
		document.querySelector("#triangulos .results .error").text = "La suma de los 2 ángulos no puede ser mayor a 180";
	} else {
		document.querySelector("#triangulos .results .error").classList.add("hide");
		document.querySelector("#triangulos .results").children[0].classList.remove("hide");
		document.querySelector(".results .restante").text = "Ángulo 3 = " + (180 - a.value - b.value);
    }
}

botonlado.onclick = function(evt){
	a = document.querySelector(".lado input[name='a']");
	b = document.querySelector(".lado input[name='b']");
	if (a.value < 0 || b.value <0){
        results = document.querySelector("#triangulos .results").children;
        for (i=0;i<results.length;i++){
            results[i].classList.add("hide");
        }
		document.querySelector("#triangulos .results .error").classList.remove("hide");
		document.querySelector("#triangulos .results .error").text = "Los lados no pueden ser negativos";
	
	} else {
		document.querySelector("#triangulos .results .error").classList.add("hide");
		document.querySelector("#triangulos .results").children[0].classList.remove("hide");
		document.querySelector(".results .restante").text = "Lado C = " + Math.sqrt(a.value*a.value + b.value*b.value);
    }
}