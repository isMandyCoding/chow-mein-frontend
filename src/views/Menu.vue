<template>
<v-container fluid>
  <MenuLanguage />
  <PopularItems />

</v-container>
</template>

<script>
import PopularItems from "../components/PopularItems.vue";
import MenuLanguage from "../components/MenuLanguage.vue";
export default {
  name: "Menu",
  components: {
    PopularItems,
    MenuLanguage
  },
  created() {
    return this.$store.dispatch("getOrderItems");
  },
  computed: {
    menuLang() {
      return this.$store.state.menuLang;
    }
  }
};
</script>