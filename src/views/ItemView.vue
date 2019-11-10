<template>
  <div>
    <section>
      <user-profile :user="item">
        <router-link slot="username" :to="`/user/${item.user}`">{{ item.user }}</router-link>
        <template slot="time">{{ `Posted ${item.time_ago}` }}</template>
      </user-profile>
    </section>
    <section>
      <h2>{{ item.title }}</h2>
    </section>
    <section>
      <div v-html="item.content"></div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import UserProfile from "../components/UserProfile";

export default {
  components: {
    UserProfile
  },
  computed: {
    ...mapGetters(["item"])
  },
  created() {
    const { id } = this.$route.params;
    this.$store.dispatch("FETCH_ITEM_INFO", id);
  }
};
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
}
.fa-user {
  font-size: 2.5rem;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
</style>