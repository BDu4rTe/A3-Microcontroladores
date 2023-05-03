const gaugeElement = document.querySelector(".grafico-gauge");

function setGaugeFill(param, fill){
    if (fill <0 || fill > 1){
        return;
    }
    console.log("#" + param);
    gaugeElement.querySelector("#" + param).style.transform = `rotate(${fill / 2}turn)`;
    gaugeElement.querySelector("#" + param + "-text").textContent = param == umidade ? `${Math.round(fill * 100)}%` : `${Math.round(fill * 100)}°` ;
}

setGaugeFill("umidade", 0.2); 
console.log("umidade");

// fazer comunicacao com o protocolo mqtt