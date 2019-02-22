<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex
      v-for="menuItem in menuItems"
      :key="menuItem.menu_id"
      xs4
      >
        <v-hover>
          <v-card 
          tile
          slot-scope="{ hover }"
          class="mx-auto"
          color="grey lighten-4"
          >
            <v-img
            :src="menuItem.img_url"
            height="150px"
            >
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out blue-grey darken-4 v-card--reveal white--text"
                  style="height: 100%;"
                >
              <p>{{ (menuItem.priceInCents / 100).toLocaleString("en-US", {style:"currency", currency:"USD"}) }}</p>
                </div>
              </v-expand-transition>
            </v-img>
            <v-card-text> {{ (menuItem.priceInCents / 100).toLocaleString("en-US", {style:"currency", currency:"USD"}) }} </v-card-text>
            <v-card-text v-if="menuLang === 'english' || menuLang === 'both' " >{{menuItem.eng_name}}</v-card-text>
            <v-card-text v-if="menuLang === 'chinese' || menuLang === 'both' " >{{menuItem.ch_name}}</v-card-text>
            
            <v-card-actions>
                <v-dialog
      v-model="dialog"
      width="500"
    >
      <v-btn
        slot="activator"
        class="blue-grey white--text"
        dark
      >
        Add To Cart
      </v-btn>

      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Select Quantity
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          Quantity: {{quantity}} <v-btn @click="quantity > 0 ? quantity-- : null" > - </v-btn> <v-btn @click="quantity++" > + </v-btn>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            class="blue-grey white--text"
            flat
            @click="dialog = false"
          >
            Cancel
          </v-btn>
          <v-btn
            class="blue-grey white--text"
            flat
            @click="addToCart(menuItem)"
          >
            Add to Cart
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
            </v-card-actions>
            </v-card>

        </v-hover>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "MenuItem",
  props: ["categoryId"],
  data() {
    return {
      dialog: false,
      quantity: 1
    };
  },
  computed: {
    menuItems() {
      return this.$store.getters.searchedMenu.filter(
        item => item.category_id === this.categoryId
      );
    },
    menuLang() {
      return this.$store.state.menuLang;
    }
  },
  methods: {
    addToCart(menu_item) {
      this.dialog = false;
      let newItem = {
        ...menu_item,
        quantity: this.quantity,
        id: this.$store.state.order.itemId
      };
      this.$store.dispatch("addToCart", newItem);
      this.quantity = 1;
    }
  }
};
</script>

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
</style>