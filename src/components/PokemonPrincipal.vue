<template>
    <div class="container_view">
        <div class="puntaje">
            <h1>Puntajes {{puntaje}}</h1>
            <h1>Intentos {{intentos}}</h1>
        </div>

        <div class="imagenes">
            <div class="imagen_individual" v-for="pokemon, index in arregloPokemons" :key="index">
                <PokemonImg :id="pokemon.id" :nombre="pokemon.nombre"/>
            </div>
        </div>

        <div :class="`${puntaje >= 10 ? 'azul':'rojo'} `" v-if="intentos===5">
            <PoekomonResultado :superior="mensaje.superior" :inferior="mensaje.inferior"/>
        </div>

        <button @click="jugar">Jugar</button>

    </div>
  
</template>

<script>
import PokemonImg from "@/components/PokemonImg.vue";
import PoekomonResultado from "@/components/PoekomonResultado.vue";
import { inciarVectorFijoFachada, obtenerPokemonsFachada, obtenerPunajeFachada } from "@/clients/ClientPokemon.js";

export default {

    data(){
        return{
            puntaje: 0,
            intentos: 0,
            mensaje:{
                superior: null,
                inferior:  null
            },
            arregloPokemons:[
                {nombre: "XXXXXXXXXXX", id: null},
                {nombre: "XXXXXXXXXXX", id: null},
                {nombre: "XXXXXXXXXXX", id: null},
            ],
        }
    },
    
    components: {
        PokemonImg,
        PoekomonResultado,
    },

    methods:{
        jugar(){
            this.intentos++
            this.arregloPokemons = obtenerPokemonsFachada()
            this.puntaje += obtenerPunajeFachada(this.arregloPokemons)    
            if (this.intentos === 5) {
                this.mostrarMensaje()                
            }        
        },

        mostrarMensaje(){
            if (this.puntaje >= 10) {
                this.mensaje.superior = `Puntaje# ${this.puntaje}`
                this.mensaje.inferior = 'Felicitaciones has ganado un premio de $10.000,00'                
            } else {
                this.mensaje.superior = `Ha utilizado tus 5 intentos`
                this.mensaje.inferior = 'El juego a terminado, inténtelo otra vez'                     
            }
        }
    },

    mounted(){
        inciarVectorFijoFachada()

    }

}
</script>

<style scoped>

.container_view{
    display: flex;
    flex-direction: column;
    width: 98vw;
    height: 98vh;
    justify-content: center;
    align-items: center;
}

.puntaje{
    display: flex;
    width: 40%;
    justify-content: space-between;
}

.imagenes{
    display: flex;
    width: 80%;
    justify-content: space-evenly;
    align-items: center;
}

.rojo{
    color: red;
}

.azul{
    color: blue;
}

button{
    width: 400px;
    height: 100px;
    margin-top: 50px;
    border: 5px solid black;
    background-color: transparent;
    font-size: 50px;
    letter-spacing: 15px;
    text-align: center;
    transition: background-color 0.3s ease, transform 0.15s ease;
}

button:hover{
    background-color: rgb(209, 209, 209);
}

button:active{
    background-color: rgb(230, 230, 230);
    transform: scale(0.98);
}

</style>