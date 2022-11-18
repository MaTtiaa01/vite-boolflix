import { reactive } from "vue";
import axios from "axios";


export const store = reactive({
    api_key: "55d4e1ed5baa64ec6d42d7deb753d1ab",
    htmlStar: `<font-awesome-icon icon="fa-solid fa-star" />`,
    loaded: false,
    queryInput: "",
    movieArr: null,
    showArr: null,
    language: "",
    posterImgUrl: "http://image.tmdb.org/t/p/w342/",
    callApiMovie() {
        const config = {
            method: 'get',
            url: 'https://api.themoviedb.org/3/search/movie',
            params: {
                api_key: this.api_key,
                query: this.queryInput,
            }
        };

        axios(config)
            .then((response) => {
                // FILTRO DA METTERE O CAMBIARE L'URL O FARE DUE CHIAMATE
                //console.log(response.data);
                //console.log(response.data.results);

                this.movieArr = response.data.results;
                //console.log(this.movieArr);
                this.loaded = true
                this.queryInput = ""
            })
            .catch(function (error) {
                console.log(error);
            });

    },
    callApiShow() {
        const config = {
            method: 'get',
            url: 'https://api.themoviedb.org/3/search/tv',
            params: {
                api_key: this.api_key,
                query: this.queryInput,
            }
        };

        axios(config)
            .then((response) => {
                //console.log(response.data);
                //console.log(response.data.results);

                this.showArr = response.data.results;
                this.loaded = true
                this.queryInput = ""
            })
            .catch(function (error) {
                console.log(error);
            });

    },
})