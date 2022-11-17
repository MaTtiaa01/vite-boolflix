<script >
import { store } from "./store";

export default {
  name: "App",
  component: {

  },
  data() {
    return {
      store,
    }
  },
  methods: {

  },
  computed: {
    voteTransform(number) {
      return number.Math.ceil(Number(movie.vote_average) / 2);

    }
  },
  mounted() {

  }
}
</script>

<template>
  <header>
    <div class="form_control">
      <input v-model="store.queryInput" type="text" placeholder="Serach movie" @keyup.enter="store.callApi()">
      <button @click.prevent="store.callApi()">click</button>
    </div>
  </header>
  <main>
    <div>
      <ul v-for="movie in store.movieArr">
        <li>{{ movie.title }} {{ movie.name }}</li>
        <li v-if="movie.original_language === 'en'"> <img src="./assets/img/flag-uk.svg.png" alt=""> </li>
        <li v-else-if="movie.original_language === 'it'"><img src="./assets/img/flag-italy.svg.png" alt=""></li>
        <li v-else> {{ movie.original_language }} </li>
        <li>{{ movie.original_title }} {{ movie.original_name }}</li>
        <li v-for="n in voteTransform(movie.vote_average)">
          <font-awesome-icon icon="fa-solid fa-star" />
          {{ movie.vote_average }}
        </li>
        <li><img :src="store.posterImgUrl + movie.poster_path" alt=""></li>


      </ul>
    </div>
  </main>
</template>

<style lang="scss" scoped>

</style>
