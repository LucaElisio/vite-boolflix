<script>
import { store } from '../store'


export default {
    data(){
        return{
            store
        }
    },
}
</script>

<template>
    <ul>
        <li v-for="curMovie in this.store.moviesArray">
            <p>Titolo: {{curMovie.title}}</p>
            <p>Titolo originale: {{curMovie.original_title}}</p>
            <p>Lingua originale: {{curMovie.original_language}}</p>
            <p>Voto: {{curMovie.vote_average}}</p>
        </li>
    </ul>
</template>

<style scoped lang="scss">

</style>