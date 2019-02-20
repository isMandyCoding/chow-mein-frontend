<template>
  <v-container grid-list-xl fluid>

    <v-layout> 
      <v-flex column xs9 sm9 md9> <!-- Left Column-->
        <v-card flat>
          <v-card-title class="display-3" >Review Order</v-card-title>
          
          <v-layout>
              <v-flex>
                  <v-card>
                      <v-card-title class="display-2" > Name:  {{ order.customerName }} </v-card-title>
                      <v-card-title class="display-2" > Phone Number:  {{ order.customerPhone }} </v-card-title>
                      <v-card-title class="display-2" > Email:  {{ order.customerEmail }} </v-card-title>
                  </v-card>
              </v-flex>
          </v-layout>
          <Cart :inCheckout="true" />
          <v-btn v-if="!orderSubmitted"  @click="submitOrder" >Submit Order </v-btn>
          <h2 v-if="orderSubmitted">You order has been submitted.</h2>
        </v-card>
      </v-flex>
      
      <v-flex column xs3 sm3 md3> <!-- Right Column-->
          <v-card flat>
            <v-card-title class="display-3" >Cart</v-card-title>
            <Cart :inCheckout="true" />
        </v-card>
      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>
import Cart from "@/components/Cart.vue";

export default {
  name: "Checkout",
  components: {
    Cart
  },
  data() {
    return {
      orderSubmitted: false
    };
  },
  computed: {
    order() {
      return this.$store.state.order;
    }
  },
  methods: {
    submitOrder() {
      this.$store.dispatch("submitOrder");
      this.orderSubmitted = true;
    }
  }
};
</script>