<template>
<v-container>
  <v-layout
    v-for="category in categories"
    :key="category.category_id"
  > 
    <Category :category="category"  />
  </v-layout>
</v-container>
</template>

<script>
import Category from "@/components/Category.vue";

export default {
  name: "Categories",
  props: ["sectionId"],
  data() {
    return {
      categoryToggled: false
    };
  },
  components: {
    Category
  },
  computed: {
    categories() {
      return this.$store.state.menu.categories.filter(
        category => category.section_id === this.sectionId
      );
    }
  }
};
</script>