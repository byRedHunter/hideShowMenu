/* --pocicion inicial */
let ubicacionPrincipal = window.pageYOffset;
//let $nav = document.querySelector("nav");
var nav = document.getElementById('nav');

/* --evento scroll */
window.addEventListener("scroll", function() {
    /* --muestra la ubicacion cada vez que hagas scroll */
    //console.log(window.pageYOffset);

    /* --donde nos encontramos actualmente */
    let desplazamientoActual = window.pageYOffset;

    /* --condicon para ocultar o mostrar el menu */
    if(ubicacionPrincipal >= desplazamientoActual) {
        /* --si es mayor o igual se muesta */
        nav.style.top = "0";
        console.log('Ubicacion Principal: ' + ubicacionPrincipal);
        console.log('desplazamiento: ' + desplazamientoActual);
    } else {
        /* --sino lo ocultamos añadiendo un top negativo */
        nav.style.top = "-80px";
        console.log('Ubicacion Principal: ' + ubicacionPrincipal);
        console.log('desplazamiento: ' + desplazamientoActual);
    }

    /* --actulizamos la ubicacion principal */
    ubicacionPrincipal = desplazamientoActual;
});
