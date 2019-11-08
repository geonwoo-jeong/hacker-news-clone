<template>
  <div>
    <div v-for="ask in this.$store.state.asks" :key="ask.id">{{ask.title}}</div>
  </div>
</template>

<script>
import { fetchAskList } from "../api";
export default {
  created() {
    this.$store.dispatch("FETCH_ASK_LIST");
  }
};
</script>

<style>
</style>