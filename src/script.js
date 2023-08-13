/* eslint-disable func-names */
/* eslint-disable no-undef */
const $FLECHAIZQUIERDA = document.getElementById('flecha-izquierda');
const $FLECHADERECHA = document.getElementById('flecha-derecha');

setTimeout(() => {
  // Oculta la imagen de carga
  const loadingImage = document.getElementById('loading-image');
  loadingImage.style.display = 'none';

  // Muestra el contenido con una transición suave
  const content = document.querySelector('.content');
  const border = document.getElementById('borde-contenedor');
  content.classList.remove('hidden');
  border.classList.remove('hidden');
  content.style.opacity = 1;
}, 2000); // 2000 ms = 2 segundos

const cargarPokemon = () => {
  setTimeout(() => {
    nombresPokemons(POKEMONES.name);
    numeroPokemons(POKEMONES.id);
    imagenPokemon(POKEMONES.sprites.front_default);
    alturaPokemon(POKEMONES.height);
    pesoPokemon(POKEMONES.weight);
    tipoPokemon(POKEMONES.types);
  }, 1300);
};

$FLECHAIZQUIERDA.onclick = function () {
  cambiarPokemonAnterior();
  cambiarOpacidad();
};

$FLECHADERECHA.onclick = function () {
  cambiarPokemonSiguiente();
  cambiarOpacidad();
};

cargarPokemon();
setTimeout(() => listaPokemones(LISTAPOKEMONS), 1300);
setTimeout(() => buscarPokemons(), 1300);
