<script>
import { store } from '../store'


export default {
    data() {
        return{
            store,
        }
    },
}
</script>

<template>
    <label for="inputText"></label>
    <input type="text" id="inputText" placeholder="Search..." v-model="this.store.searchQuery"> 
</template>

<style scoped>
#inputText {
    border: none;
    padding: 5px 10px;
    outline-color: red;
    border-radius: 5px;
    margin: 0 10px;
}
</style>