const body = document.querySelector("body")
const imagen = document.querySelector(".raton")

// clienteY y clienteX con para obtener coordenadas

body.addEventListener("mousemove", function(e){
   
    imagen.style.top = (e.clientY+"px")
    imagen.style.left = (e.clientX+"px")
   
})

// body.addEventListener("click", (info)=>{
//     imagen.style.top = (info.clientY+"px")
//     imagen.style.left = (info.clientX+"px")
// })

