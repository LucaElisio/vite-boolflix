<script>
import axios from 'axios';
import { store } from './store';
import AppMain from './components/AppMain.vue';

export default {
  components: { AppMain },
  data() {
    return {
      store,
    }
  },
  created(){

    // Chiamata per i movies popolari
    axios.get("https://api.themoviedb.org/3/movie/popular", {
      params: {
        api_key: this.store.apiKey,
      }
    }).then((resp) => {
      // console.log(resp);
      // Salvo l'array di risultati nello store
      this.store.moviesArray = resp.data.results;
      console.log(this.store.moviesArray);
    })
  }
}
</script>

<template>
  <AppMain />
</template>

<style>

</style>