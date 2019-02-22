<template>
  <v-container fluid>
    <v-layout>
      <v-flex>
        <HelloWorld v-if="!menuError && !loadingMenu"  />
        <v-progress-circular v-if="loadingMenu" />
        <Error v-if="menuError" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Error from "@/components/Error.vue";
import PopularItems from "@/components/PopularItems.vue";

export default {
  name: "home",
  components: {
    HelloWorld,
    Error,
    PopularItems
  },
  created() {
    this.$store.dispatch("getMenu");
    this.$store.dispatch("getOrderItems");
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
