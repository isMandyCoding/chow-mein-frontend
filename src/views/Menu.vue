<template>
  <v-container grid-list-xl fluid>

    <v-layout> 
      <v-flex column xs9 sm9 md9> <!-- Left Column-->
        <v-card flat>
          <v-card-title class="headline grey lighten-2"
          primary-title >Menu</v-card-title>
          <PopularItems /> <!-- rows -->
          <v-container fluid class="grey lighten-2">
            <v-layout>
              <v-flex column xs6 sm6 md6>
                <SearchBar />
              </v-flex>

              <v-flex column xs6 sm6 md6>
                <MenuLanguage />  
              </v-flex>
            </v-layout>
          </v-container>

          <!-- <v-container>
            <v-layout>
              <v-flex>
                <template>
                  <v-container :key="item.menu_id" v-if="searchString.length && searchedItems.length" v-for="item in searchedItems" >
                    <MenuItem  :menuItem="item" />
                  </v-container>
                </template>

              </v-flex>
            </v-layout>
          </v-container> -->
          
          <MenuSections /> <!-- rows -->

        </v-card>
      </v-flex>
      
      <v-flex column xs3 sm3 md3> <!-- Right Column-->
          <v-card class="sticky-cart" flat>
            <v-card-title class="headline grey lighten-2"
          primary-title >Cart</v-card-title>
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
import MenuItem from "@/components/MenuItem.vue";

export default {
  name: "Menu",
  components: {
    PopularItems,
    MenuLanguage,
    MenuSections,
    Cart,
    SearchBar,
    MenuItem
  },
  computed: {
    menuLang() {
      return this.$store.state.menuLang;
    },
    searchString() {
      return this.$store.state.searchString;
    },
    searchedItems() {
      return this.$store.getters.searchedMenu;
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
