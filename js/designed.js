var design = new Diseños();
var imagenes = [];


document.querySelectorAll('#images-contenido .watch>div').forEach(event =>{
    const ventana = document.getElementById('display-visual');
    event.addEventListener('click', (e)=>{
        const nameElement = e.target.dataset.categoria;
        ventana.classList.add('see');
        cargarElementos(nameElement);
        window.setTimeout(()=>{
            igualdadImage();
            acoplarImagenes();
        },100);
    })
})






function cargarElementos(name){
    let header = '';
    let contenido = '';
    header += ` 
        <h1 class="client-dzn">${design[name].name}</h1>
        <div class="descripcion">            
            <div>
                <div class="inf-detalle"><p><span class="type">Autor</span><span class="data">${design[name].autor}</span></p></div>
                <div class="inf-detalle"><p><span class="type">Año</span><span class="data">${design[name].year}</span></p></div>
            </div>
            <div class="detalle">
                <p>${design[name].descripcion}</p>
            </div>
        </div>
        <div class="social-media">
    `
    design[name].images.forEach(e=>{
        contenido += `
            <div class="galery-items"><img src="${e}" class="img-item"></div>
        `
    })

    document.getElementById('header-screen').innerHTML = header;
    document.getElementById('galery-general').innerHTML = contenido;
}









function acoplarImagenes(){
    document.querySelectorAll('#galery-general .galery-items img').forEach((e)=>{       //acoplar las imagenes en cada grilla (grid)
        const contain = document.getElementById('galery-general');
        
        const newSizeImage = e.clientWidth * (40/100);      //si la imagen ocupa un 1fr(50% de todo el contenedor principal)
        const middleVent = contain.clientWidth * (40/100);  //50% del contenedor principal
        contain.classList.add('grid');
        if( newSizeImage >= middleVent){
            if(newSizeImage <= (contain.clientWidth * (60/100))){
                e.parentElement.style.gridColumnStart = 'span 1';
            }else{
                e.parentElement.style.gridColumnStart = 'span 2';
            }
            
        }
        e.style.width = '100%';
    });
}


function igualdadImage(){
    const items = document.querySelectorAll('#galery-general .galery-items img');    
    
    document.querySelectorAll('#galery-general .galery-items img').forEach((e)=>{     
        for(let i=0; i<items.length; i++){

            if(imagenes == ''){
                imagenes.push(e);
            }else{                
                let igualdad = false;               //comprueba si la imagen seleccionada (e) ya esta en el arreglo

                for(let j=0; j<imagenes.length; j++){
                    if(imagenes[j].getAttribute('src') === e.getAttribute('src')){
                        igualdad=true;
                    }
                }
                if(igualdad == true){
                    return;
                }else{
                    imagenes.push(e);
                }
            }
        }
    });
    ordenarImagenes();
}


function ordenarImagenes(){
    let arrTemp = [];

    for(let inicio of imagenes){
        let value = false;
        for(let comprobar of imagenes){
            if(inicio.width == comprobar.width){
                if(arrTemp == ''){
                    arrTemp.push(comprobar);                    
                }else{
                    for (let i = 0; i < arrTemp.length; i++) {
                        if(arrTemp[i].getAttribute('src') == comprobar.getAttribute('src')){
                            value = true;
                            break;
                        }else{continue;}
                    }
                    if(!value){
                        arrTemp.push(comprobar);
                    }                    
                }
            }else{continue;}
        }        
    }
    imagenes = arrTemp;
}
