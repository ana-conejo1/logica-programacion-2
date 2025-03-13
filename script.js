//function convertirTemperatura(){
//Recibir un input del usuario y verificar que sea un número
let celsius;

while(true){ //Ciclo infinito (solo se rompe con break)
    celsius=prompt("Ingresa la temperatura en grados celsius");
    celsius=parseFloat(celsius);
    
    if (!isNaN(celsius)){
        break; //el ciclo solo se romperá cuando se ingrese un numero válido
    } else{
        alert("No ingresaste un número");
    }

}
//Convertir las temperaturas
let fahrenheit=(celsius*9/5)+32;
let kelvin=celsius+273.15;
console.log("La temperatura en grados Fahrenheit es: "+fahrenheit);
console.log("La temperatura en grados Kelvin es: "+kelvin);

 // Insertar resultados en la página
    // Mostramos los resultados en la página
    document.getElementById("resultadoFahrenheit").innerText = `Grados Fahrenheit: ${fahrenheit.toFixed(2)}`;
    document.getElementById("resultadoKelvin").innerText = `Grados Kelvin: ${kelvin.toFixed(2)}`;
//}