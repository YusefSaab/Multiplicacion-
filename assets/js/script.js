
let limpiar = () => {
    document.querySelector("#mensajes").innerHTML="";
}

let form = document.getElementById("formulario");

form.addEventListener("submit", function(e){
    
    e.preventDefault();
    let numero1 = document.getElementById("numero1").value;

    calcular(numero1)
})


let calcular = (num) => {
    let contenedorTabla = document.getElementById("tablas");
    contenedorTabla.innerHTML ="";
    let contenedorFactorial = document.getElementById("factorial");
    contenedorFactorial.innerHTML = "";

    document.getElementById("factorial").innerHTML =""
    let tabla ="<h2>Resultado de las tablas:</h2>";
    let factorial = "<h2>Resultado del factorial:</h2>";
    if (num < 1 || num > 20) {
        let parrafo = document.querySelector("#mensajes");
        parrafo.innerText = "Número se sale del rango solicitado";
        return false; 
    } 
    limpiar();
    for (let i = 1; i <= num; i++) { 
        let prod = i * num;
        tabla +=`<p>${i} x ${num} = ${prod}</p>`; 
    } 
    for (let i = 1; i <= num; i++) { 
        let res = 1; 
        for (let j = 1; j <= i; j++) { 
            res = res * j; 
        } 
        factorial += `<p>Factorial de  ${i} es: ${res}</p>`; 
    }
    contenedorTabla.innerHTML = tabla;
    contenedorFactorial.innerHTML = factorial;
}