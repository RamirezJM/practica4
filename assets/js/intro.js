
 /*  ----SCRIPT INTRO---- 
  
 debido al efecto del scroller no funciona una imagen estática de fondo
  por lo que las estrellas deben generarse con una función */

let stars = 400

for (let i =0; i < stars; i++) {
    let star = document.createElement("div")
    star.className = 'stars'
    let xy = randomPosition();
    star.style.top = xy[0] + 'px'
    star.style.left = xy[1] + 'px'              /* se crean las estrellas de manera aleatoria por la pantalla */
    document.body.append(star)
}

function randomPosition() {
    let y = window.innerWidth
    let x = window.innerHeight
    let randomX = Math.floor(Math.random() * x)
    let randomY = Math.floor(Math.random() * y)
    return [randomX, randomY]
} 
                                                              /* Esta función genera el cambio de pantalla una vez terminada la intro, */
setTimeout(() => {                                            /* cambia hoja de estilo y remueve el div inicial */                         
   
  const newStyle = document.getElementById("style1").href = "assets/css/style2.css";
  const introPagina = document.getElementById("introPagina").style.display = "none";

}, 93000);
 

