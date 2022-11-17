import { reactive } from "vue";
import axios from "axios";


export const store = reactive({
    api_key: "55d4e1ed5baa64ec6d42d7deb753d1ab",
    htmlStar: `<font-awesome-icon icon="fa-solid fa-star" />`,
    loaded: false,
    review: "",
    queryInput: "",
    movieArr: null,
    language: "",
    posterImgUrl: "http://image.tmdb.org/t/p/w342/",
    voteTransform() {
        if (this.loaded) {

            this.movieArr.forEach(movie => {
                //console.log(movie.vote_average);
                this.review = Math.ceil(Number(movie.vote_average) / 2);
                //console.log(this.store.review);
            });
        }
    },
    callApi() {
        const config = {
            method: 'get',
            url: 'https://api.themoviedb.org/3/search/multi',
            params: {
                api_key: this.api_key,
                query: this.queryInput,
            }
        };

        axios(config)
            .then((response) => {
                //console.log(response.data);
                //console.log(response.data.results);
                this.movieArr = response.data.results;
                //console.log(this.movieArr);
                this.loaded = true
                this.voteTransform()
            })
            .catch(function (error) {
                console.log(error);
            });




    },
})