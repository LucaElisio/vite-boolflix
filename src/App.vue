<script>
import axios from 'axios';
import { store } from './store';

export default {
  data() {
    return {
      store,
    }
  },
  created(){
    axios.get("https://api.themoviedb.org/3/search/movie", {
      params: {
        api_key: this.store.apiKey,
      }
    }).then((resp) => {
      console.log(resp);
    })
  }
}
</script>

<template>
  <h1>CIAO</h1>
</template>

<style>

</style>