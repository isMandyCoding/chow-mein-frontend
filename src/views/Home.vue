<template>
  <div class="home">
    <HelloWorld v-if="!menuError && !loadingMenu" />
    <CircleLoader v-if="loadingMenu" />
    <Error v-if="menuError" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Error from "@/components/Error.vue";
import { CircleLoader } from "@saeris/vue-spinners";

export default {
  name: "home",
  components: {
    HelloWorld,
    Error,
    CircleLoader
  },
  created() {
    return this.$store.dispatch("getMenu");
  },
  computed: {
    menuError() {
      return this.$store.state.menuError;
    },
    loadingMenu() {
      return this.$store.state.loadingMenu;
    }
  }
};
</script>
