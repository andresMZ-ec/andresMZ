$(document).ready(function(){
    evitarCarga();
}); 
function evitarCarga(){         
    document.getElementById('btnMenu').addEventListener('click', function(e){
        e.preventDefault();
    });
}
function abrirMenu(){
    document.getElementById('btnMenu').addEventListener('click', function(e){
        e.preventDefault();
    });
    var nav = document.getElementById('view_menu'),
        btn = document.getElementById('btnMenu'),
        texto = document.getElementById('textBTN');
    if($('#view_menu').hasClass('active')){
        btn.classList.remove('active');
        nav.classList.remove('active');
        texto.style.visibility = "visible";
    }else{
        nav.classList.add('active');
        btn.classList.add('active');
        texto.style.visibility = "hidden";
    }
}


function closeVent(){
    const ventana = document.getElementById('display-visual');

    if(ventana.hasClass == 'see'){
        ventana.classList.add('see');
    }else{
        ventana.classList.remove('see');
    }
}