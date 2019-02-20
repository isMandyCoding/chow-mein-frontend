<template> <!-- menu section -->
  <v-container>
    <v-layout v-for="(section, i) in sections" :key="section.section_id">
      <v-flex row>
        <h2> {{section.eng_section}} </h2>
        <Categories v-bind:sectionId="section.section_id" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Categories from "@/components/Categories.vue";
export default {
  name: "MenuSections",
  components: {
    Categories
  },
  computed: {
    sections() {
      return this.$store.state.menu.sections;
    }
  }
};
</script>

