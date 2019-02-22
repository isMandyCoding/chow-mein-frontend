<template>
<v-flex v-if="filteredMenu.filter(item => item.category_id === category.category_id).length">
      <v-card class="clickable">
        <v-card-title @click="categoryToggled = !categoryToggled" class="display-1" v-if="menuLang === 'english' || menuLang === 'both' "> {{category.eng_category.toUpperCase()}} <v-icon v-if="!categoryToggled" >arrow_drop_down</v-icon> <v-icon v-if="categoryToggled" >arrow_drop_up</v-icon> </v-card-title>
        <v-card-title @click="categoryToggled = !categoryToggled" class="display-1" v-if="menuLang === 'chinese' || menuLang === 'both' "> {{category.ch_category}} <v-icon v-if="!categoryToggled" >arrow_drop_down</v-icon> <v-icon v-if="categoryToggled" >arrow_drop_up</v-icon> </v-card-title>
        <MenuItem v-if="categoryToggled" :categoryId="category.category_id" />

      </v-card>
</v-flex>
</template>

<script>
import MenuItem from "@/components/MenuItem.vue";
export default {
  name: "Category",
  props: ["category"],
  components: {
    MenuItem
  },
  data() {
    return {
      categoryToggled: false
    };
  },
  computed: {
    menuLang() {
      return this.$store.state.menuLang;
    },
    filteredMenu() {
      return this.$store.getters.searchedMenu;
    }
  }
};
</script>

<style lang="css">
.clickable {
  cursor: pointer;
}
</style>