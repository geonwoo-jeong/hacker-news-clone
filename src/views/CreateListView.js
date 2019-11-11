import ListView from "./ListView";
import bus from "../utils/bus";

export default function createListView(name) {
  return {
    name,
    created() {
      bus.$emit("start:spinner");
      this.$store.dispatch("FETCH_LIST", this.$route.name);
    },
    mounted() {
      bus.$emit("end:spinner");
    },
    render(createElement) {
      return createElement(ListView);
    }
  };
}
