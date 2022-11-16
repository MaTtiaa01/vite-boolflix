<script >
import { store } from "./store";

export default {
  name: "App",
  data() {
    return {
      store
    }
  },
  methods: {
    voteTransform() {
      // TOFIX alla prima ricerca in assoluto non funziona perchè l'array è ancora vuoto poi va tutto bene
      if (this.store.loaded === true) {

        this.store.movieArr.forEach(movie => {
          console.log(movie.vote_average);
          this.store.review = Math.ceil(Number(movie.vote_average) / 2);
          console.log(this.store.review);
        });
      }
    }
  },
  mounted() {
  }
}
</script>

<template>
  <header>
    <div class="form_control">
      <input v-model="store.queryInput" type="text" placeholder="Serach movie"
        @keyup.enter="store.callApi(); voteTransform()">
      <button @click.prevent="store.callApi(); voteTransform()">click</button>
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
        <li>{{ movie.vote_average }}</li>
        <li><img :src="store.posterImgUrl + movie.poster_path" alt=""></li>

      </ul>
    </div>
  </main>
</template>

<style lang="scss" scoped>

</style>
