<script>
import { store } from "../store.js";
import Poster from "../components/Poster.vue";
export default {
    name: "Main",
    components: {
        Poster,
    },
    data() {
        return {
            store
        }
    },

}
</script>

<template>
    <main>
        <div class="container">

            <Poster></Poster>

        </div>
    </main>

</template>


<style lang="scss" scoped>

</style>