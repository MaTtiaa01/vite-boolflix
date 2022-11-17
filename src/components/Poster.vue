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
        }
    },
}
</script>

<template>
    <div v-for="movie in store.movieArr" class="col">
        <div class="box">
            <div class="front">
                <img :src="store.posterImgUrl + movie.poster_path" alt="">
            </div>
            <div class="back">
                <ul>
                    <li>Title: {{ movie.title }} {{ movie.name }}</li>
                    <li v-if="movie.original_language === 'en'"> <img src="../assets/img/flag-uk.svg.png" alt=""> </li>
                    <li v-else-if="movie.original_language === 'it'"><img src="../assets/img/flag-italy.svg.png" alt="">
                    </li>
                    <li v-else> {{ movie.original_language }} </li>
                    <li>Original title: {{ movie.original_title }} {{ movie.original_name }}</li>
                    <li>
                        <span v-for="n in voteTransform(movie.vote_average)">
                            <font-awesome-icon icon="fa-solid fa-star" />
                        </span>
                    </li>
                    <li>
                        Overview: {{ movie.overview }}
                    </li>


                </ul>
            </div>
        </div>
    </div>

</template>


<style lang="scss" scoped>
@use "../../node_modules/bootstrap";
@use "../assets/scss/Variables.scss" as *;

.col {

    .box {
        height: 400px;

        &:hover {
            .front {
                display: none;
            }

            .back {
                display: inline-block;
                color: $nb-lighter;

                ul {
                    li {
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
            max-height: 400px;
        }
    }
}
</style>