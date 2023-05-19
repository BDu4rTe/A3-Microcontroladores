function setGaugeFill(param, fill, complemento=null){
    let realfill = fill * (360 / 100);
    document.getElementById(param).style.background = param == "umidade" ? `conic-gradient(#95C4E8 ${realfill}deg, #4C515C 0deg)` : `conic-gradient(#E87D4F ${realfill}deg, #4C515C 0deg)`  ;
    document.getElementById(param + "-text").textContent = `${fill + complemento}`;
}

setGaugeFill("temperatura", 24, "°");
setGaugeFill("umidade", 68, "%");
// fazer comunicacao com o protocolo mqtt

