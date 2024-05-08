import {reactive} from "vue";

export const store = reactive ({
    moviesArray: [],
    tvArray: [],
    apiKey: "a715b03eddf08f3fd00576d89c1b3e92",
    searchQuery: "",
    posterUrl: "https://image.tmdb.org/t/p/w342"
})