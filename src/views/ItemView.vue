<template>
  <div>
    <p>{{ item.title }}</p>
    <div>{{ item.content }}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["item"])
  },
  created() {
    const { id } = this.$route.params;
    this.$store.dispatch("FETCH_ITEM_INFO", id);
  }
};
</script>

<style>
</style>