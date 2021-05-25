window.onload = init;

function init(){
    
    
    document.querySelector('.casa').addEventListener('click', function() {
        window.location.href = "home.html"
    });

    document.querySelector('.hoteles').addEventListener('click', function() {
        window.location.href = "formhoteles.html"
    });


    document.querySelector('.ciudades').addEventListener('click', function() {
        window.location.href = "formciudades.html"
    });

    document.querySelector('.centrosturisticos').addEventListener('click', function() {
        window.location.href = "formturisticos.html"
    });   

    document.querySelector('.conocenos').addEventListener('click', function() {
        window.location.href = "conocenos.html"
    });   
}

