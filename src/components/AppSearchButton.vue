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

</style>