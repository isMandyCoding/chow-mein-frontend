<template lang="">
    <v-sheet 
    class="d-flex"
    color="red lighten-3 white-text"
    >
    <v-list v-if="orderInfo.items.length">
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
        <v-spacer></v-spacer>  
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title> Subtotal: {{ subTotal.toLocaleString("en-US", {style:"currency", currency:"USD"}) }} </v-list-tile-title>          
            
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title> Estimated Tax: {{ (subTotal * 0.086).toLocaleString("en-US", {style:"currency", currency:"USD"})  }} </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title> Total: {{ (subTotal + (subTotal * 0.086) ).toLocaleString("en-US", {style:"currency", currency:"USD"})  }}  </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile> 

        <v-spacer></v-spacer>
        <v-list-tile>
          <CheckoutForm v-if="!inCheckout" />
        </v-list-tile>
    </v-list>
    <v-card v-if="!orderInfo.items.length" flat>
      <v-card-title>Put some food in your cart so it can make it to your belly! </v-card-title>
    </v-card>
    

    </v-sheet>   
</template>

<script>
import CheckoutForm from "@/components/CheckoutForm.vue";

export default {
  name: "Cart",
  props: ["inCheckout"],
  components: {
    CheckoutForm
  },
  computed: {
    orderInfo() {
      return this.$store.state.order;
    },
    subTotal() {
      return this.$store.state.order.items.reduce((acc, item) => {
        return acc + (item.priceInCents * item.quantity) / 100;
      }, 0);
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

