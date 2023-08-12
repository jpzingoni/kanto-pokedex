function obtenerNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let numeroAleatorio = obtenerNumeroAleatorio(1, 150); // Número entre 1 y 10

let URLPOKEMONES = `https://pokeapi.co/api/v2/pokemon/${numeroAleatorio}`
console.log(numeroAleatorio);

let POKEMONES = fetch(URLPOKEMONES)
    .then(response => response.json())
    .then(data => POKEMONES = data)
    .catch(error => "hubo un problema de error: " + error)

    let nombresPokemons = (nombre) =>{
        let $nombrePokemon = document.getElementById("nombre-pokemon")
        return $nombrePokemon.innerText = `NOMBRE: ${nombre}`
    }
    
    let numeroPokemons = (numero) =>{
        let $numeroPokemon = document.getElementById("numero-pokemon")
        return $numeroPokemon.innerText = `ID: ${numero}`
    }
    
    let imagenPokemon = (imagen) =>{
        let $imagenPokemon = document.getElementById("imagen-pokemon");
        return $imagenPokemon.src = imagen
    }
    
    let alturaPokemon = (altura) =>{
        let $alturaPokemon = document.getElementById("altura-pokemon");
        return $alturaPokemon.innerText = `Altura: ${altura}`
    }
    
    let pesoPokemon = (peso) =>{
        let $pesoPokemon = document.getElementById("peso-pokemon");
        return $pesoPokemon.innerText = `Peso: ${peso}`
    }
    
    let tipoPokemon = (tipo) =>{
        let $tipoPokemon = document.getElementById("tipo-pokemon");
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

let cambiarPokemonAnterior = () =>{
    numeroAleatorio = numeroAleatorio - 1
    URLPOKEMONES = `https://pokeapi.co/api/v2/pokemon/${numeroAleatorio}`
    POKEMONES = fetch(URLPOKEMONES)
    .then(response => response.json())
    .then(data => POKEMONES = data)
    .catch(error => "hubo un problema de error: " + error)
    cargarPokemon()
}

let cambiarPokemonSiguiente = () =>{
    numeroAleatorio = numeroAleatorio + 1
    URLPOKEMONES = `https://pokeapi.co/api/v2/pokemon/${numeroAleatorio}`
    POKEMONES = fetch(URLPOKEMONES)
    .then(response => response.json())
    .then(data => POKEMONES = data)
    .catch(error => "hubo un problema de error: " + error)
    cargarPokemon()
}