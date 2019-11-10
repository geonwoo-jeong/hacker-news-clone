<template>
  <div>
    <ul class="item-list">
      <li v-for="item in items" :key="item.id" class="post">
        <div class="points">{{ item.points || 0 }}</div>
        <div class="item-title">
          <template v-if="item.domain">
            <a :href="item.url">{{ item.title }}</a>
          </template>
          <template v-else>
            <router-link :to="`item/${item.id}`">{{ item.title }}</router-link>
          </template>
          <small class="link-text">
            {{ item.time_ago }} by
            <router-link
              v-if="item.user"
              :to="`/user/${item.user}`"
              class="link-text"
            >{{ item.user }}</router-link>
            <a :href="item.url" v-else>{{ item.domain }}</a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  created() {
    const { name } = this.$route;
    const { dispatch } = this.$store;

    switch (name) {
      case "news":
        dispatch("FETCH_NEWS_LIST");
        break;
      case "ask":
        dispatch("FETCH_ASK_LIST");
        break;
      case "jobs":
        dispatch("FETCH_JOB_LIST");
        break;
    }
  },
  computed: {
    items() {
      const { name } = this.$route;

      switch (name) {
        case "news":
          return this.$store.state.news;
        case "ask":
          return this.$store.state.asks;
        case "jobs":
          return this.$store.state.jobs;
      }
    }
  }
};
</script>

<style scoped>
.news-list {
  margin: 0;
  padding: 0;
}

.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}

.points {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: red;
}

.item-title {
  margin: 0;
}
</style>