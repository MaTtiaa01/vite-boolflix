import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
    api_key: "55d4e1ed5baa64ec6d42d7deb753d1ab",
    loaded: false,
    queryInput: "matrix",
    movieArr: null,
    language: "",
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
                console.log(response.data);
                console.log(response.data.results);
                this.movieArr = response.data.results;
                console.log(this.movieArr);
                this.loaded = true
            })
            .catch(function (error) {
                console.log(error);
            });
    }
})