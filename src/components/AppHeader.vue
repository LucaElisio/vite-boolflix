<script>
import axios from 'axios';
import {store} from "../store.js"
import AppSearchBar from './AppSearchBar.vue'
import AppSearchButton from './AppSearchButton.vue'

export default {
components: { AppSearchBar, AppSearchButton },
    data() {
        return {
            store
        }
    },
    
    methods: {
        search(){

        // console.log("ciao");
        // console.log(this.store.searchQuery);
        axios.get("https://api.themoviedb.org/3/search/movie", {
            params: {
            api_key: this.store.apiKey,
            query: this.store.searchQuery
            }
            }).then((resp) => {
            // console.log(resp);
            this.store.moviesArray = resp.data.results;
            })

            // Chiamata serie tv
            axios.get("https://api.themoviedb.org/3/search/tv", {
                params: {
                api_key: this.store.apiKey,
                query: this.store.searchQuery
            }
            }).then((resp) => {
            this.store.tvArray = resp.data.results;
            console.log(this.store.tvArray);
            })
        },
    }
    
}
</script>

<template>
    <header class="pt-5 pb-5 bg-black">
        <div class="container d-flex justify-content-between">
            <div><h1 class="logo">BOOLFLIX</h1></div>
            <div>
                <AppSearchBar />
                <AppSearchButton @searchClicked="search"/>
            </div>
        </div>
    </header>
</template>

<style scoped lang="scss">
.logo{
    color: red;
}
</style>