<script>
import { store } from "../store.js";

export default {
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <button @click="$emit('searchClicked')">Vai</button>

</template>

<style scoped>
    button {
        border: none;
        background-color: white;
        border-radius: 5px;
        padding: 5px 10px;
    }
</style>