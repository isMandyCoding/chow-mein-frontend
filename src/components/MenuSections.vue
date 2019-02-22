<template> <!-- menu section -->
  <v-container>
    <v-layout v-for="(section, i) in sections" :key="section.section_id">
      <MenuSection :section="section" />
    </v-layout>
  </v-container>
</template>

<script>
import MenuSection from "@/components/MenuSection.vue";
export default {
  name: "MenuSections",
  components: {
    MenuSection
  },
  computed: {
    sections() {
      return this.$store.state.menu.sections;
    }
  }
};
</script>

