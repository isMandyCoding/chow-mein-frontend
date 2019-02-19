<template>
  <div class="home">
    <HelloWorld v-if="!menuError && !loadingMenu" />
    <v-progress-circular v-if="loadingMenu" />
    <Error v-if="menuError" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Error from "@/components/Error.vue";

export default {
  name: "home",
  components: {
    HelloWorld,
    Error
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
