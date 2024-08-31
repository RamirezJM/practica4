
const primerDiv = document.getElementById("personajes1-5");
const segundoDiv = document.getElementById("personajes6-10");    /* se guardan los 3 contenedores donde se mostrarán los personajes */
const tercerDiv = document.getElementById("personajes11-15");

/* ------PRIMER CONTENEDOR------ */

let mostrar1 = document.getElementById("boton1");
mostrar1.addEventListener("click", () => {

  if (primerDiv.style.visibility === "hidden") {
    primerDiv.style.visibility = "visible";
  } else {                                    /* un eventListener en el boton muestra y esconde el contenedor y llama a la función que traerá los personajes */
    primerDiv.style.visibility = "hidden";
  }
  fetchSwapi();
});

const fetchSwapi = async () => {
  const response = await fetch("https://swapi.dev/api/people/");     /* la función trae 1 array con 10 personajes desde la API */
  const data = await response.json()
 
  const primerGrupo = data.results.slice(0, 5);     /* primerGrupo guarda los 5 primeros personajes que se mostrarán en este bloque */
  const imagenes1 = [
    {imagen: "assets/img/Luke.jpg"},
    {imagen: "assets/img/C3PO.jpg"}, 
    {imagen: "assets/img/r2d2.jpg"},              /* imagenes1 guarda las imágenes correspondientes a los personajes */
    {imagen: "assets/img/Darth.jpg"},
    {imagen: "assets/img/Leia.jpg"} 
  ];
    
    for(let i=0, obj = {}, l = primerGrupo.length; i < 5; i++){   /* un bucle recorre ambos arrays y al objeto literal se le asignan los atributos y valores */
      obj[primerGrupo[i]] = imagenes1[i];
                
    const div1Contenido = document.createElement("div");                    /* se crea el <div> donde se mostrará cada personaje */    
    div1Contenido.innerHTML = `<h6>${primerGrupo[i].name}</h6>                  
                               <p>Altura: ${primerGrupo[i].height} cm.</p>
                               <p>Peso: ${primerGrupo[i].mass} kg.</p>
                               <img src=${imagenes1[i].imagen} alt=${primerGrupo[i].name}>
    `
    if(primerDiv.childNodes.length > 4){
      primerDiv.remove.lastChild              /* se agrega este contenido al contenedor, permitiendole mostrar solo 5 personajes (sin eso cada vez */ 
    }else{                                    /* que se presiona el botón se muestran nuevamente) */    
      primerDiv.append(div1Contenido);
    }
 }
}

/* ------SEGUNDO CONTENEDOR------ */

let mostrar2 = document.getElementById("boton2");
mostrar2.addEventListener("click", () => {
  if(segundoDiv.style.visibility === "hidden") {
    segundoDiv.style.visibility = "visible";
  } else {
    segundoDiv.style.visibility = "hidden";
  }
  fetchSwapi2();
});

const fetchSwapi2 = async () => {
  const response2 = await fetch("https://swapi.dev/api/people/");
  const data2 = await response2.json()
 
  const segundoGrupo = data2.results.slice(5, 10);
  const imagenes2 = [
    {imagen: 'assets/img/Owen.jpg'}, 
    {imagen: 'assets/img/Beru.jpg'}, 
    {imagen: 'assets/img/r5d4.jpg'}, 
    {imagen: 'assets/img/Biggs.jpg'}, 
    {imagen: 'assets/img/ObiWan.jpg'}
  ];
    
    for(let i=0, obj = {}, l = segundoGrupo.length; i < 5; i++){
      obj[segundoGrupo[i]] = imagenes2[i];
       
    const div2Contenido = document.createElement("div");
    div2Contenido.innerHTML = `<h6>${segundoGrupo[i].name}</h6>
                               <p>Altura: ${segundoGrupo[i].height} cm.</p>
                               <p>Peso: ${segundoGrupo[i].mass} kg.</p>
                               <img src=${imagenes2[i].imagen} alt=${segundoGrupo[i].name}>
    `
    if(segundoDiv.childNodes.length > 4){
      segundoDiv.remove.lastChild;
    }else{
      segundoDiv.append(div2Contenido);
    }
  }
} 

/* ------TERCER CONTENEDOR------ */

let mostrar3 = document.getElementById("boton3");
mostrar3.addEventListener("click", () => {
  if(tercerDiv.style.visibility === "hidden") {
    tercerDiv.style.visibility = "visible";
  } else {
    tercerDiv.style.visibility = "hidden";
  }
  fetchSwapi3();
});

const fetchSwapi3 = async () => {
  const response3 = await fetch("https://swapi.dev/api/people/?page=2");
  const data3 = await response3.json()
  
  const tercerGrupo = data3.results.slice(0, 5);
  const imagenes3 = [
    {imagen: 'assets/img/Anakin.jpg'}, 
    {imagen: 'assets/img/Wilhuff.jpg'}, 
    {imagen: 'assets/img/Chewbacca.jpg'}, 
    {imagen: 'assets/img/Han.jpg'}, 
    {imagen: 'assets/img/Greedo.jpg'}
  ];
  
  for(let i = 0, obj = {}, l = tercerGrupo.length; i < 5; i++){
    obj[tercerGrupo[i]] = imagenes3[i];
      
    const div3Contenido = document.createElement("div");
    div3Contenido.innerHTML = `<h6>${tercerGrupo[i].name}</h6>
                               <p>Altura: ${tercerGrupo[i].height} cm.</p>
                               <p>Peso: ${tercerGrupo[i].mass} kg.</p>
                               <img src=${imagenes3[i].imagen} alt=${tercerGrupo[i].name}>
    `
    if(tercerDiv.childNodes.length > 4){
      tercerDiv.remove.lastChild;
    }else{
      tercerDiv.append(div3Contenido);
    }
  }
} 


