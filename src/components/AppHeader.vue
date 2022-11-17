<script>
import { store } from "../store.js";

export default {
    name: "AppHeader",
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <header>
        <div class="container-fluid d-flex justify-content-between align-items-center">

            <div class="head_left d-flex justify-content-between align-items-center">
                <div class="logo">
                    <img src="../assets/img/netflix.jpg" alt="">
                </div>
                <ul class="d-flex">
                    <li><a class="active" href="#">Home</a></li>
                    <li><a href="#">Serie TV</a></li>
                    <li><a href="#">Film</a></li>
                    <li><a href="#">Originali</a></li>
                    <li><a href="#">Aggiunti di recente</a></li>
                    <li><a href="#">La mia lista</a></li>
                </ul>
            </div>
            <div class="head_right d-flex align-items-center ">
                <div class="form_control me-3">
                    <input v-model="store.queryInput" type="text" placeholder="Serach movie"
                        @keyup.enter="store.callApi()">
                    <button @click.prevent="store.callApi()">
                        <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                    </button>
                </div>
                <!-- serachbar -->
                <div class="text-uppercase">Bambini</div>
                <div class="bell ms-2">
                    <font-awesome-icon icon="fa-solid fa-bell" />
                </div>
                <div class="profile">
                    <img src="../assets/img/profile.png" alt="">
                </div>
            </div>
        </div>
    </header>

</template>

<style lang="scss" scoped>
@use "../../node_modules/bootstrap";
@use "../assets/scss/Variables.scss" as *;

header {
    color: white;
    padding: 1rem 0rem;

    .head_left {
        .logo {
            width: 150px;

            img {
                object-fit: cover;
            }
        }

        ul {
            list-style: none;

            a {
                text-decoration: none;
                margin-left: 1rem;
                font-size: 20px;
                color: $nb-light;

                &.active,
                &:hover {

                    color: $nb-lighter;
                }

            }



        }
    }

    .head_right {
        .form_control {
            input {
                border: 1px solid $nb-light;
                background-color: $nb-primary;
                color: $nb-lighter;
            }

            button {
                background-color: $nb-primary;
                color: $nb-lighter;
                border: none;
                margin-left: 1rem;
            }
        }

        .profile {
            width: 30px;
            margin-left: 1rem;
        }
    }
}
</style>