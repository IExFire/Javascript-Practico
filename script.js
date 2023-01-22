const h1 = document.querySelector("h1"); //Queryselector te deja seleccionar como con las etiquetas de CSS
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const pResult = document.querySelector("#result");
const form = document.querySelector("#formulario");

/*console.log(input.value);

console.log({  //Genera todos los valores y todas las propiedades de cada elemento
    h1,
    p,
    parrafito,
    pid,
    input,
});

h1.innerHTML = "Patito"; //Peligroso porque modifica el HTMl directo
h1.innerText = "Patito alto"; // Unicamente modifica el texto plano
//console.log(h1.getAttribute("pantalla")); imprime el atributo
//h1.setAttribute("class","rojo") Cambia la clase de verde a rojo
//h1.classList.add("rojo"); Le agrega rojo a la clase que ya habia
//h1.classList.remove("verde"); Remueve verde de la clase que ya habia
//h1.classList.toogle("verde");
//h1.classList.contains("verde");

input.value = "456"

const img = document.createElement('img'); // Nos sirve para crear elementos en HTML desde Javascript
img.setAttribute("src", "https://images.pexels.com/photos/130031/pexels-photo-130031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
console.log(img);

//pid.innerHTML = ""; Si dejamos string vacio, se borra lo que exista por dentro
pid.append(img);*/

form.addEventListener('submit', sumarvalues);

function sumarvalues(event){
    console.log({event});
    event.preventDefault();
    const sumaInputs = input1.value + input2.value;
    pResult.innerText = "Resultado: " + sumaInputs;
}