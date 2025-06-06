<template>
    <div class="container_view">
        <div class="puntaje">
            <h1>Puntajes {{puntaje}}</h1>
            <h1>Intentos {{intentos}}</h1>
        </div>

        <div class="imagenes">
            <div class="imagen_individual" v-for="pokemon, index in arregloPokemons" :key="index">
                {{pokemon}}
                <PokemonImg :id="pokemon.id" :nombre="pokemon.nombre"/>
            </div>
        </div>

        <div class="resultados">
            <h1>{{mensaje.superior}}</h1>
            <h2>{{mensaje.inferior}}</h2>
        </div>

        <button @click="jugar">Jugar</button>

    </div>
  
</template>

<script>
import PokemonImg from "@/components/PokemonImg.vue";
import PoekomonResultado from "@/components/PoekomonResultado.vue";
import { inciarVectorFijoFachada } from "@/clients/ClientPokemon.js";

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
            ]
        }
    },
    
    components: {
        PokemonImg,
        PoekomonResultado,
    },

    methods:{
        jugar(){
            this.intentos++
            
        }
    },

    mounted(){
        inciarVectorFijoFachada()

    }

}
</script>

<style scoped>

</style>