<script>
import { store } from "../store.js";
export default {
    name: "Poster",
    data() {
        return {
            store
        }
    },
    methods: {
        voteTransform(number) {
            return Math.ceil(Number(number) / 2);
        },
        checkAndTrim(text) {
            const new_text = text.slice(0, 300) + '...'
            return new_text

        }
    },
    mounted() {
    }
}
</script>

<template>
    <div v-if="store.loadedMovie" id="scroll" class="container scrollEl">
        <h2 class="text-uppercase py-2 ">movies</h2>

        <div class="row movies d-flex row-cols-4 g-4">
            <div v-for="movie in store.movieArr" class="col ">
                <div class="box">
                    <div class="front">
                        <img :src="store.posterImgUrl + movie.poster_path" alt="">
                    </div>
                    <div class="back">
                        <ul>
                            <li>Title: {{ movie.title }}</li>
                            <li v-if="movie.original_language === 'en'"> <img src="../assets/img/flag-uk.svg.png" alt="">
                            </li>
                            <li v-else-if="movie.original_language === 'it'"><img src="../assets/img/flag-italy.svg.png"
                                    alt="">
                            </li>
                            <li v-else> {{ movie.original_language }} </li>
                            <li>Original title: {{ movie.original_title }} </li>
                            <li>
                                <span v-for="n in voteTransform(movie.vote_average)">
                                    <font-awesome-icon icon="fa-solid fa-star" />
                                </span>
                            </li>
                            <li v-if="movie.overview.length > 300">
                                Overview: {{ checkAndTrim(movie.overview) }}
                            </li>
                            <li v-else>
                                Overview: {{ movie.overview }}
                            </li>

                        </ul>
                    </div>
                </div>
            </div>

        </div>
    </div>
    <div v-if="store.loadedShow" class="container scrollEl">
        <h2 class="text-uppercase py-2 ">tv shows</h2>

        <div class="row shows d-flex row-cols-4 g-4">

            <div v-for="show in store.showArr" class="col ">
                <div class="box">
                    <div class="front">
                        <img :src="store.posterImgUrl + show.poster_path" alt="">
                    </div>
                    <div class="back">
                        <ul>
                            <li>Title: {{ show.name }}</li>
                            <li v-if="show.original_language === 'en'"> <img src="../assets/img/flag-uk.svg.png" alt="">
                            </li>
                            <li v-else-if="show.original_language === 'it'"><img src="../assets/img/flag-italy.svg.png"
                                    alt="">
                            </li>
                            <li v-else> {{ show.original_language }} </li>
                            <li>Original title: {{ show.original_name }} </li>
                            <li>
                                <span v-for="n in voteTransform(show.vote_average)">
                                    <font-awesome-icon icon="fa-solid fa-star" />
                                </span>
                            </li>
                            <li v-if="show.overview.length > 300">
                                Overview: {{ checkAndTrim(show.overview) }}
                            </li>
                            <li v-else>
                                Overview: {{ show.overview }}
                            </li>


                        </ul>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>


<style lang="scss" scoped>
@use "../../node_modules/bootstrap";
@use "../assets/scss/Variables.scss" as *;

.container {
    h2 {
        color: $nb-lighter;
    }

    .row {
        margin-bottom: 2rem;
        flex-wrap: nowrap;
        overflow-x: auto;


        .col {

            .box {
                height: 500px;

                &:hover {
                    .front {
                        display: none;
                    }

                    .back {
                        display: inline-block;
                        color: $nb-lighter;

                        ul {
                            li {
                                margin-top: 1rem;

                                img {
                                    width: 20px;
                                }
                            }
                        }
                    }
                }

                .back {
                    display: none;
                }

                img {
                    object-fit: cover;
                    max-height: 500px;
                }
            }
        }

    }
}
</style>