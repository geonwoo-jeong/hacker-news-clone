<template>
  <div>
    <div v-for="ask in asks" :key="ask.id">{{ask.title}}</div>
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