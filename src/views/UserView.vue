<template>
  <div>
    <user-profile :user="user">
      <div slot="username">{{ user.id }}</div>
      <span slot="time">{{ `Joined ${user.created}, ` }}</span>
      <span slot="karma">{{ user.karma }}</span>
    </user-profile>
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
    ...mapGetters(["user"])
  },
  created() {
    const { id } = this.$route.params;
    this.$store.dispatch("FETCH_USER_INFO", id);
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