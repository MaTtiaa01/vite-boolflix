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
  }
}
</script>

<template>
  <header>
    <div class="form_control">
      <input v-model="store.queryInput" type="text" placeholder="Serach movie">
      <button @click="store.callApi()">click</button>
    </div>
  </header>
  <main>
    <div>
      <ul>
        <li>{{ }}</li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </main>
</template>

<style lang="scss" scoped>

</style>
