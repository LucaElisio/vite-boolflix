<script>
import { store } from '../store'


export default {
    data(){
        return{
            store
        }
    },
    methods: {
        showFlag(curFlag){
            let imgUrl = ""
            switch(curFlag){
                case "en":
                    imgUrl = "../src/assets/img/united-kingdom.png"
                    break;
                case "it":
                    imgUrl = "../src/assets/img/italy.png"
                    break; 
                case "fr":
                    imgUrl = "../src/assets/img/france.png"
                    break; 
                case "ja":
                    imgUrl = "../src/assets/img/japan.png"
                    break;
                default:
                    return "Bandiera non disponibile"   
            }
            return imgUrl
        }
    }
}
</script>

<template>
    <div class="movies-list">
        <h2>FILM</h2>
        <ul>
            <li v-for="curMovie in this.store.moviesArray">
                <img :src="this.store.posterUrl + curMovie.poster_path" alt="">
                <p>Titolo: {{curMovie.title}}</p>
                <p>Titolo originale: {{curMovie.original_title}}</p>
                <p>Lingua originale: {{curMovie.original_language}}</p>
                <p>Voto: {{curMovie.vote_average}}</p>           
                <img :src="showFlag(curMovie.original_language)" alt="" v-if="showFlag(curMovie.original_language) != 'Bandiera non disponibile'">
                <p v-else>{{showFlag(curMovie.original_language)}}</p>
            </li>
        </ul>
    </div>
    <div class="tv-list">
        <h2>SERIE TV</h2>
        <ul>
            <li v-for="curTv in this.store.tvArray">
                <img :src="this.store.posterUrl + curTv.poster_path" alt="">
                <p>Titolo: {{curTv.name}}</p>
                <p>Titolo originale: {{curTv.original_name}}</p>
                <p>Lingua originale: {{curTv.original_language}}</p>
                <p>Voto: {{curTv.vote_average}}</p>           
                <img :src="showFlag(curTv.original_language)" alt="" v-if="showFlag(curTv.original_language) != 'Bandiera non disponibile'">
                <p v-else>{{showFlag(curTv.original_language)}}</p>
            </li>
        </ul>
    </div>
</template>

<style scoped lang="scss">

</style>