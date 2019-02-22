<template>
    <v-flex row>
        <v-btn>
            <h2 @click="toggleSection = !toggleSection" > {{section.eng_section}} <v-icon v-if="!toggleSection" >arrow_drop_down</v-icon> <v-icon v-if="toggleSection" >arrow_drop_up</v-icon> </h2>
        </v-btn>
        <Categories v-if="toggleSection" v-bind:sectionId="section.section_id" />
      </v-flex>
</template>

<script>
import Categories from "@/components/Categories.vue";
export default {
  name: "MenuSection",
  data() {
    return {
      toggleSection: false
    };
  },
  components: {
    Categories
  },
  props: ["section"]
};
</script>
