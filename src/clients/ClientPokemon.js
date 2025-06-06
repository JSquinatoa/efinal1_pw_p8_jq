import axios from "axios";
let vectorFijo = []
let arregloPokemonsFijo = []

const ObtenerPokemonAPI = async (id) => {
    let respuesta = axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res => res.data)
    return respuesta
}

const obtenerNumeroAletorio = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// Aramar el vector fijo
const inciarVectorFijo = () => {
    vectorFijo = []
    for (let i = 0; i < 4; i++) {
        vectorFijo[i] = obtenerNumeroAletorio(1, 600)
    }

    constuirArregloPokemon(vectorFijo)
}

const construirObjetoPokemon = async (id) => {
    let pokemon = await ObtenerPokemonAPI(id)
    const objetoPokemon = {
        nombre: pokemon.name,
        id: pokemon.id
    }

    return objetoPokemon
}

const constuirArregloPokemon = async (vector) => {
    arregloPokemonsFijo = []
    for(let idPokemon of vector){
        let objPokemon = await construirObjetoPokemon(idPokemon)
        arregloPokemonsFijo.push(objPokemon)
    }         
    console.log(arregloPokemonsFijo);    
}

// Aramar los seleccionados
const obtenerPokemons = () => {
    let seleccionados = []
    for (let i = 0; i < 3; i++) {
        seleccionados[i] = arregloPokemonsFijo(obtenerNumeroAletorio(0, arregloPokemonsFijo.length))        
    }
    return seleccionados
}



// Funciones Fachada
export const inciarVectorFijoFachada = () =>{
    return inciarVectorFijo()
}


export const obtenerPokemonsFachada = () => {

}




