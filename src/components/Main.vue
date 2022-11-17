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
            <h2 class="text-uppercase py-2 text-white">original netflix</h2>
            <div class="row row-cols-4 g-4">
                <Poster></Poster>
            </div>
        </div>
    </main>

</template>


<style lang="scss" scoped>
@use "../../node_modules/bootstrap";
@use "../assets/scss/Variables.scss" as *;

.container {

    .row {
        flex-wrap: nowrap;
        overflow-x: auto;

    }
}
</style>