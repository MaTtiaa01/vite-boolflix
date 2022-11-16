<script >
import { store } from "./store";

export default {
  name: "App",
  data() {
    return {
      store
    }
  },
  mounted() {
    this.store.callApi()
  }
}
</script>

<template>

</template>

<style lang="scss" scoped>

</style>
