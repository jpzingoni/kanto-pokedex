/* eslint-disable func-names */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable no-return-assign */
/* eslint-disable no-undef */
function obtenerNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const numeroAleatorio = obtenerNumeroAleatorio(1, 150); // Número entre 1 y 10
let numeroActual = numeroAleatorio;
let URLPOKEMONES = `https://pokeapi.co/api/v2/pokemon/${numeroAleatorio}`;

const URLLISTAPOKEMONS = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=151';

let LISTAPOKEMONS = fetch(URLLISTAPOKEMONS)
  .then((response) => response.json())
  .then((data) => (LISTAPOKEMONS = data.results));

let POKEMONES = fetch(URLPOKEMONES)
  .then((response) => response.json())
  .then((data) => (POKEMONES = data))
  .catch((error) => `hubo un problema de error: ${error}`);

const nombresPokemons = (nombre) => {
  const $nombrePokemon = document.getElementById('nombre-pokemon');
  $nombrePokemon.innerText = `NOMBRE: ${nombre}`;
};

const numeroPokemons = (numero) => {
  const $numeroPokemon = document.getElementById('numero-pokemon');
  $numeroPokemon.innerText = `ID: ${numero}`;
};

const imagenPokemon = (imagen) => {
  const $imagenPokemon = document.getElementById('imagen-pokemon');
  $imagenPokemon.src = imagen;
};

const alturaPokemon = (altura) => {
  const $alturaPokemon = document.getElementById('altura-pokemon');
  const alturaEnMetros = altura / 10;
  $alturaPokemon.innerText = `Altura: ${alturaEnMetros} M`;
};

const pesoPokemon = (peso) => {
  const $pesoPokemon = document.getElementById('peso-pokemon');
  const pesoEnKilos = peso / 10;
  $pesoPokemon.innerText = `Peso: ${pesoEnKilos} KG`;
};

const tipoPokemon = (tipo) => {
  const $tipoPokemon = document.getElementById('tipo-pokemon');
  const $capturarTipo = [];
  tipo.forEach((e) => {
    $capturarTipo.push(e.type.name);
  });
  if ($capturarTipo.length === 1) {
    const $textoTipo = `Tipo: ${$capturarTipo.join('')}`;
    $tipoPokemon.innerText = $textoTipo;
  } else {
    const $textoTipo = `Tipos: ${$capturarTipo.join('/')}`;
    ($tipoPokemon.innerText = $textoTipo);
  }
};

const listaPokemones = (LISTAPOKEMONS) => {
  const $listaDesplegable = document.getElementById('pokemon-list');
  const $pokemonSelecionado = document.getElementById('pokemon-seleccionado');
  $pokemonSelecionado.innerText = POKEMONES.name;
  LISTAPOKEMONS.forEach((pokemon) => {
    const $option = document.createElement('option');
    $option.value = pokemon.name;
    $option.textContent = pokemon.name;
    $listaDesplegable.appendChild($option);
  });
};

const cambiarPokemonAnterior = () => {
  numeroActual -= 1;
  URLPOKEMONES = `https://pokeapi.co/api/v2/pokemon/${numeroActual}`;
  POKEMONES = fetch(URLPOKEMONES)
    .then((response) => response.json())
    .then((data) => (POKEMONES = data))
    .catch((error) => `hubo un problema de error: ${error}`);
  cargarPokemon();
};

const cambiarPokemonSiguiente = () => {
  numeroActual += 1;
  URLPOKEMONES = `https://pokeapi.co/api/v2/pokemon/${numeroActual}`;
  POKEMONES = fetch(URLPOKEMONES)
    .then((response) => response.json())
    .then((data) => (POKEMONES = data))
    .catch((error) => `hubo un problema de error: ${error}`);
  cargarPokemon();
};

const cambiarOpacidad = () => {
  const content = document.querySelector('.content');
  content.style.opacity = 0;
  setTimeout(() => {
    // Restaurar la opacidad después de 2 segundos
    content.style.opacity = 1;
  }, 1600);
};

const buscarPokemons = () => {
  const $buscarPokemon = document.getElementById('boton-buscar-pokemon');
  const $pokemonSeleccionado = document.getElementById('pokemon-list');
  $buscarPokemon.onclick = function () {
    const pokemonABuscar = LISTAPOKEMONS.find(
      (pokemon) => pokemon.name === $pokemonSeleccionado.value,
    );
    POKEMONES = fetch(pokemonABuscar.url)
      .then((response) => response.json())
      .then((data) => (POKEMONES = data))
      .catch((error) => `hubo un problema de error: ${error}`);
    cargarPokemon();
    cambiarOpacidad();
    setTimeout(() => {
      numeroActual = POKEMONES.id;
    }, 1000);
  };
};
