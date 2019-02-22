<template>
  <v-container grid-list-xl fluid>

    <v-layout> 
      <v-flex column xs9 sm9 md9> <!-- Left Column-->
        <v-card flat>
          <v-card-title class="display-3" >Menu</v-card-title>
          <MenuLanguage />
          <SearchBar />
          <PopularItems /> <!-- rows -->
          <MenuSections /> <!-- rows -->

        </v-card>
      </v-flex>
      
      <v-flex column xs3 sm3 md3> <!-- Right Column-->
          <v-card class="sticky-cart" flat>
            <v-card-title class="display-3" >Cart</v-card-title>
            <Cart />
        </v-card>
      </v-flex>
    </v-layout>
    
  </v-container>
</template>

<script>
import PopularItems from "@/components/PopularItems.vue";
import MenuLanguage from "@/components/MenuLanguage.vue";
import MenuSections from "@/components/MenuSections.vue";
import Cart from "@/components/Cart.vue";
import SearchBar from "@/components/SearchBar.vue";

export default {
  name: "Menu",
  components: {
    PopularItems,
    MenuLanguage,
    MenuSections,
    Cart,
    SearchBar
  },
  computed: {
    menuLang() {
      return this.$store.state.menuLang;
    }
  }
};
</script>

<style lang="css">
.sticky-cart {
  min-height: 300px;
  max-height: auto;
  position: -webkit-sticky;
  position: sticky;
  position: fixed;
  top: 115px;
}
</style>
