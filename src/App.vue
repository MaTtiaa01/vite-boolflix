<script >
import { store } from "./store";
import AppHeader from "./components/AppHeader.vue";
import Main from "./components/Main.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    Main
  },
  data() {
    return {
      store,
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
  <Main></Main>


</template>

<style lang="scss" scoped>

</style>
