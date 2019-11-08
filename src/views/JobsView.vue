<template>
  <div>
    <div v-for="job in jobs" :key="job.id">{{job.title}}</div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  // User Map State
  computed: {
    ...mapState({
      jobs: state => state.jobs
    })
  },
  created() {
    this.$store.dispatch("FETCH_JOB_LIST");
  }
};
</script>

<style>
</style>