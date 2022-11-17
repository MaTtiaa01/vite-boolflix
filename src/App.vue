<script >
import { store } from "./store";
import AppHeader from "./components/AppHeader.vue";

export default {
  name: "App",
  components: {
    AppHeader,
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    voteTransform(number) {
      return Math.ceil(Number(number) / 2);
    }
  },
  computed: {

  },
  mounted() {

  }
}
</script>

<template>

  <AppHeader></AppHeader>

  <main>
    <div>
      <ul v-for="movie in store.movieArr">
        <li>{{ movie.title }} {{ movie.name }}</li>
        <li v-if="movie.original_language === 'en'"> <img src="./assets/img/flag-uk.svg.png" alt=""> </li>
        <li v-else-if="movie.original_language === 'it'"><img src="./assets/img/flag-italy.svg.png" alt=""></li>
        <li v-else> {{ movie.original_language }} </li>
        <li>{{ movie.original_title }} {{ movie.original_name }}</li>
        <li v-if="movie.vote_average !== ''" v-for="n in voteTransform(movie.vote_average)">
          <font-awesome-icon icon="fa-solid fa-star" />
        </li>
        <li><img :src="store.posterImgUrl + movie.poster_path" alt=""></li>


      </ul>
    </div>
  </main>
</template>

<style lang="scss" scoped>

</style>
