function obtenerNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let numeroAleatorio = obtenerNumeroAleatorio(1, 150); // Número entre 1 y 10
let numeroActual = numeroAleatorio
let URLPOKEMONES = `https://pokeapi.co/api/v2/pokemon/${numeroAleatorio}`
console.log(numeroAleatorio);

const URLLISTAPOKEMONS = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=151`

let LISTAPOKEMONS = fetch(URLLISTAPOKEMONS)
    .then(response =>response.json())
    .then(data => LISTAPOKEMONS = data.results)

let POKEMONES = fetch(URLPOKEMONES)
    .then(response => response.json())
    .then(data => POKEMONES = data)
    .catch(error => "hubo un problema de error: " + error)

let nombresPokemons = (nombre) =>{
    const $nombrePokemon = document.getElementById("nombre-pokemon")
    return $nombrePokemon.innerText = `NOMBRE: ${nombre}`
}

let numeroPokemons = (numero) =>{
    const $numeroPokemon = document.getElementById("numero-pokemon")
    return $numeroPokemon.innerText = `ID: ${numero}`
}

let imagenPokemon = (imagen) =>{
    const $imagenPokemon = document.getElementById("imagen-pokemon");
    return $imagenPokemon.src = imagen
}

let alturaPokemon = (altura) =>{
    const $alturaPokemon = document.getElementById("altura-pokemon");
    let alturaEnMetros = altura / 10
    return $alturaPokemon.innerText = `Altura: ${alturaEnMetros} M`
}

let pesoPokemon = (peso) =>{
    const $pesoPokemon = document.getElementById("peso-pokemon");
    let pesoEnKilos = peso / 10
    return $pesoPokemon.innerText = `Peso: ${pesoEnKilos} KG`
}

let tipoPokemon = (tipo) =>{
    const $tipoPokemon = document.getElementById("tipo-pokemon");
    let $capturarTipo =[]
    tipo.forEach(e => {
        $capturarTipo.push(e.type.name)
    })
    if($capturarTipo.length === 1){
        let $textoTipo = `Tipo: ${$capturarTipo.join("")}`
        return $tipoPokemon.innerText = $textoTipo
    }else{
        let $textoTipo = `Tipos: ${$capturarTipo.join("/")}`
        return $tipoPokemon.innerText = $textoTipo
    }
}

let listaPokemones = (LISTAPOKEMONS) =>{
    const $listaDesplegable = document.getElementById("pokemon-list")
    const $pokemonSelecionado = document.getElementById("pokemon-seleccionado")
    $pokemonSelecionado.innerText = POKEMONES.name
    LISTAPOKEMONS.forEach(pokemon =>{
        const $option = document.createElement("option");
        $option.value = pokemon.name
        $option.textContent = pokemon.name
        $listaDesplegable.appendChild($option)
    })

}

let cambiarPokemonAnterior = () =>{
    numeroActual = numeroActual - 1
    URLPOKEMONES = `https://pokeapi.co/api/v2/pokemon/${numeroActual}`
    POKEMONES = fetch(URLPOKEMONES)
    .then(response => response.json())
    .then(data => POKEMONES = data)
    .catch(error => "hubo un problema de error: " + error)
    cargarPokemon()
}

let cambiarPokemonSiguiente = () =>{
    numeroActual = numeroActual + 1
    URLPOKEMONES = `https://pokeapi.co/api/v2/pokemon/${numeroActual}`
    POKEMONES = fetch(URLPOKEMONES)
    .then(response => response.json())
    .then(data => POKEMONES = data)
    .catch(error => "hubo un problema de error: " + error)
    cargarPokemon()
}

let cambiarOpacidad = ()=>{
    const content = document.querySelector(".content");
    content.style.opacity = 0;
    setTimeout(function () {
        // Restaurar la opacidad después de 2 segundos
        content.style.opacity = 1;
    }, 1600);
}

let buscarPokemons = () =>{
    const $buscarPokemon = document.getElementById("buscar-pokemon")
    let $pokemonSeleccionado = document.getElementById("pokemon-list")
    $buscarPokemon.onclick = function(){
        const pokemonABuscar = LISTAPOKEMONS.find(pokemon => pokemon.name === $pokemonSeleccionado.value)
        POKEMONES = fetch(pokemonABuscar.url)
        .then(response => response.json())
        .then(data => POKEMONES = data)
        .catch(error => "hubo un problema de error: " + error)
        cargarPokemon()
        cambiarOpacidad()
        setTimeout(function(){
            numeroActual = POKEMONES.id},1000)
    }
}