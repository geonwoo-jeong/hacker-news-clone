<template>
  <div>
    <p v-for="job in jobs" :key="job.id">
      <a :href="job.url">{{ job.title }}</a>
      <small>{{ job.time_ago }}, {{ job.domain }}</small>
    </p>
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