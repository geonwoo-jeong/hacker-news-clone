<template>
  <list-item></list-item>
</template>

<script>
import ListItem from "../components/ListItem";
import ListMixin from "../mixins/ListMixin";
import bus from "../utils/bus";

export default {
  components: {
    ListItem
  },
  mixins: [ListMixin]
};
</script>

<style scoped>
</style>
