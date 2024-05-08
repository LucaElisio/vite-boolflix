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

</style>