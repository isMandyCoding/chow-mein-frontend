<template>
  <v-container grid-list-xl fluid>

    <v-layout> 
      <v-flex column xs9 sm9 md9> <!-- Left Column-->
        <v-card flat>
          <v-card-title class="display-3" >Menu</v-card-title>
          <MenuLanguage />
          <PopularItems /> <!-- rows -->
          <MenuSections /> <!-- rows -->

        </v-card>
      </v-flex>
      
      <v-flex column xs3 sm3 md3> <!-- Right Column-->
          <v-card flat>
            <v-card-title class="display-3" >Cart</v-card-title>
        </v-card>
      </v-flex>
    </v-layout>



  </v-container>
</template>

<script>
import PopularItems from "@/components/PopularItems.vue";
import MenuLanguage from "@/components/MenuLanguage.vue";
import MenuSections from "@/components/MenuSections.vue";

export default {
  name: "Menu",
  components: {
    PopularItems,
    MenuLanguage,
    MenuSections
  },
  created() {
    this.$store.dispatch("getMenu");
    this.$store.dispatch("getOrderItems");
  },
  computed: {
    menuLang() {
      return this.$store.state.menuLang;
    }
  }
};
</script>