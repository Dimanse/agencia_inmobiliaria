
const imagenes = document.querySelectorAll('.propiedad__imagen');
console.log(imagenes);
console.log(screen.width)

window.addEventListener('scroll', ()=>{
    //  console.log(scrollY);

     let scroll = this.scrollY / -17;

     if(screen.width <= 480) {
        scroll = this.scrollY / -33; 
    }


    imagenes.forEach((imagen)=>{

       
        
        imagen.style.backgroundPositionY  = `${scroll}px`;
    })
})

// document.write("Resolución: " + screen.width + "x" + screen.height + "px");