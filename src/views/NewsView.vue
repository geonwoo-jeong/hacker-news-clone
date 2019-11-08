<template>
  <div>
    <p v-for="news in someNews" :key="news.id">
      <a :href="news.url">{{ news.title }}</a>
      <small>{{ news.time_ago }} by {{ news.user }}</small>
    </p>
  </div>
</template>

<script>
export default {
  // Use Computed
  computed: {
    someNews() {
      return this.$store.state.news;
    }
  },
  created() {
    this.$store.dispatch("FETCH_NEWS_LIST");
  }
};
</script>

<style>
</style>