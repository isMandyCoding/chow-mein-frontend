<template lang="">
    <v-sheet 
    class="d-flex"
    color="red lighten-3 white-text"
    >
    <v-list>
        <template v-for="item in orderInfo.items">
            <v-list-tile>
                <v-list-tile-avatar>
                    <img :src="item.img_url" >
                </v-list-tile-avatar>
                <v-list-tile-content>
                    <v-list-tile-title> {{item.eng_name}} </v-list-tile-title>
                    <v-list-tile-sub-title> {{ ( (item.priceInCents * item.quantity)  / 100).toLocaleString("en-US", {style:"currency", currency:"USD"}) }}  Quantity: {{ item.quantity }} <v-icon @click="decrement(item)" >remove</v-icon>  <v-icon @click="increment(item)" >add</v-icon> </v-list-tile-sub-title>
                </v-list-tile-content>
                <v-list-tile-action>
                    <v-icon @click="removeFromCart(item)" >delete</v-icon>
                </v-list-tile-action>                
            </v-list-tile>
            <v-divider></v-divider>
        </template>
        
    </v-list>
    

    </v-sheet>   
</template>

<script>
export default {
  name: "Cart",
  computed: {
    orderInfo() {
      return this.$store.state.order;
    }
  },
  methods: {
    removeFromCart(item) {
      return this.$store.dispatch("removeFromCart", item);
    },
    decrement(item) {
      return this.$store.dispatch("decrementQuantity", item.id);
    },
    increment(item) {
      return this.$store.dispatch("incrementQuantity", item.id);
    }
  }
};
</script>

