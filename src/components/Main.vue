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
        // horizonatlScroll() {
        //     const scrollContainer = document.getElementById('scrollEl');

        //     scrollContainer.addEventListener('wheel', (evt) => {
        //         evt.preventDefault();
        //         scrollContainer.scrollLeft += evt.deltaY;
        //     });
        // }
    },
    mounted() {
        // this.horizonatlScroll()
    }

}
</script>

<template>
    <main>
        <div id="scrollEl" class="container">

            <Poster></Poster>

        </div>
    </main>

</template>


<style lang="scss" scoped>

</style>