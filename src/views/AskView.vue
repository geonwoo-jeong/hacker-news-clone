<template>
  <div>
    <p v-for="ask in asks" :key="ask.id">
      <a :href="ask.url">{{ ask.title }}</a>
      <small>{{ ask.time_ago }}, {{ ask.user }}</small>
    </p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { fetchAskList } from "../api";

export default {
  // Use Map Getters
  computed: {
    ...mapGetters(["asks"])
  },
  created() {
    this.$store.dispatch("FETCH_ASK_LIST");
  }
};
</script>

<style>
</style>