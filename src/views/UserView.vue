<template>
  <div>
    <p>name : {{ user.id }}</p>
    <p>karma : {{ user.karma }}</p>
    <p>created : {{ user.created }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["user"])
  },
  created() {
    const { id } = this.$route.params;
    this.$store.dispatch("FETCH_USER_INFO", id);
  }
};
</script>

<style>
</style>`