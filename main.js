function setGaugeFill(param, fill, complemento=null){
    if (fill <0 || fill > 1){
        return;
    }
    console.log("#" + param);
    document.getElementById(param).style.transform = `rotate(${fill / 2}turn)`;
    document.getElementById(param + "-text").textContent = `${Math.round(fill * 100) + complemento}`;
}

setGaugeFill("luz", 0.45); 
setGaugeFill("temperatura", 0.24, "°"); 
setGaugeFill("umidade", 0.68, "%"); 
console.log("passou");

// fazer comunicacao com o protocolo mqtt

