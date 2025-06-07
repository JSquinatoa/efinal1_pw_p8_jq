<template>

    <div class="container_resultados">
        <h1>{{superior}}</h1>
        <h1>{{inferior}}</h1>
    </div>

</template>

<script>
export default {

    props:{
        superior:{
            type:String,
            required: true
        },
        inferior:{
            type:String,
            required: true
        }       
    }

}
</script>

<style scoped>
.container_resultados{
    text-align: center;
}

</style>