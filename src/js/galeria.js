document.addEventListener('DOMContentLoaded', function() {
    crearGaleria()
});

function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes');

    for( let i = 1; i <= 12; i++){
        const imagen = document.createElement('img');
        imagen.src = `build/img/thumb/${i}.webp`;
        imagen.dataset.imagenId = i;

        const lista = document.createElement('li');
        lista.appendChild(imagen);

        galeria.appendChild(lista);

        // Mostrar la imagen al dar Click
        imagen.onclick = mostrarImagen;
    }
}

function mostrarImagen(e){
    
    const id = parseInt(e.target.dataset.imagenId);
    
    const imagen = document.createElement('img');
    imagen.src = `build/img/grande/${id}.webp`;

    console.log(imagen);

    const overlay = document.createElement('div');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');

    // Dar click fuera del overlay, cerrar imagen tambien
    overlay.onclick = function(){
        overlay.remove();
    }

    //Mostrar en el HTML
    const body = document.querySelector('body');
    body.appendChild(overlay);

    // Boten para cerrar la imagen
    const cerrarImagen = document.createElement('p');
    cerrarImagen.textContent = 'X';
    cerrarImagen.classList.add('btn-cerrar');

    //Agregar el boton a el overlay
    overlay.appendChild(cerrarImagen);

    // Cerrar imagen
    cerrarImagen.onclick = function(){
        overlay.remove();
    }

    //Fijar la imagen
    body.classList.add('fijar-body');
}