const $FLECHAIZQUIERDA = document.getElementById("flecha-izquierda")
const $FLECHADERECHA = document.getElementById("flecha-derecha")

setTimeout(function () {
    // Oculta la imagen de carga
    const loadingImage = document.getElementById("loading-image");
    loadingImage.style.display = "none";

    // Muestra el contenido con una transición suave
    const content = document.querySelector(".content");
    const border = document.getElementById("borde-contenedor")
    content.classList.remove("hidden");
    border.classList.remove("hidden");
    content.style.opacity = 1;
  }, 2000); // 2000 ms = 2 segundos

let cargarPokemon = ()=> {setTimeout(function(){
        nombresPokemons(POKEMONES.name)
        numeroPokemons(POKEMONES.id)
        imagenPokemon(POKEMONES.sprites.front_default)
        alturaPokemon(POKEMONES.height)
        pesoPokemon(POKEMONES.weight)
        tipoPokemon(POKEMONES.types)
    },1300)}

cargarPokemon()

$FLECHAIZQUIERDA.onclick = function(){
    cambiarPokemonAnterior()
    const content = document.querySelector(".content");
    content.style.opacity = 0;
    setTimeout(function () {
        // Restaurar la opacidad después de 2 segundos
        content.style.opacity = 1;
    }, 1600);
}

$FLECHADERECHA.onclick = function(){
    cambiarPokemonSiguiente()
    const content = document.querySelector(".content");
    content.style.opacity = 0;
    setTimeout(function () {
        // Restaurar la opacidad después de 2 segundos
        content.style.opacity = 1;
    }, 1600);
}
