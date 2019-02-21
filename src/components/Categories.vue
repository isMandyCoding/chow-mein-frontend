<template>
<v-container>
  <v-layout
    v-for="category in categories"
    :key="category.category_id"
  >
    <v-flex v-if="filteredMenu.filter(item => item.category_id === category.category_id).length">
      <v-card>
        <v-card-title class="display-1" v-if="menuLang === 'english' || menuLang === 'both' "> {{category.eng_category}} </v-card-title>
        <v-card-title class="display-1" v-if="menuLang === 'chinese' || menuLang === 'both' "> {{category.ch_category}} </v-card-title>

        <MenuItem :categoryId="category.category_id" />

      </v-card>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import MenuItem from "@/components/MenuItem.vue";

export default {
  name: "Categories",
  props: ["sectionId"],
  components: {
    MenuItem
  },
  computed: {
    categories() {
      return this.$store.state.menu.categories.filter(
        category => category.section_id === this.sectionId
      );
    },
    menuLang() {
      return this.$store.state.menuLang;
    },
    filteredMenu() {
      return this.$store.getters.searchedMenu;
    }
  }
};
</script>