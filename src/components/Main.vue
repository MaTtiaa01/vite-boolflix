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
    methods: {
        horizonatlScroll() {
            const scrollContainer = document.getElementById('scrollEl');

            scrollContainer.addEventListener('wheel', (evt) => {
                evt.preventDefault();
                scrollContainer.scrollLeft += evt.deltaY;
            });
        }
    },
    mounted() {
        this.horizonatlScroll()
    }

}
</script>

<template>
    <main>
        <div id="scrollEl" class="container">
            <h2 class="text-uppercase py-2 text-white">original netflix</h2>
            <div class="row d-flex row-cols-4 g-4">
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