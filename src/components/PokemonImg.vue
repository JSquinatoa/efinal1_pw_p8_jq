<template>

    <div class="contianer_imagen">
        <img :src="obtenerImagen(id)" alt="no hay">        
        <h1>{{nombre}}</h1>
    </div>

</template>

<script>
export default {

    props:{
        id:{
            type:Number,
            required:true,
            default: null
        },
        nombre:{
            type: String,
            required: true,
            default: null
        }
    },

    methods:{
        obtenerImagen(id){
            if (!id) {
                return "https://placehold.co/200x200/000000/000000.png"                
            }
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`
        }
    }

}
</script>


<style scoped>

.contianer_imagen{
    width: 400px;
}

img{
    width: 325px;
    height: 350px;
}

</style>