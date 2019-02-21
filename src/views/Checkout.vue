<template>
  <v-container grid-list-xl fluid>

    <v-layout> 
      <v-flex column xs9 sm9 md9> <!-- Left Column-->
        <v-card flat>
          <v-card-title class="display-3" >Review Order</v-card-title>
          
          <v-layout>
              <v-flex>
                  <v-card>
                      <v-card-subtitle class="display-2" > Name:  {{ order.customerName }} </v-card-subtitle>
                      <v-card-title class="display-2" > Phone Number:  {{ order.customerPhone }} </v-card-title>
                      <v-card-title class="display-2" > Email:  {{ order.customerEmail }} </v-card-title>
                  </v-card>
              </v-flex>
          </v-layout>
          <Cart :inCheckout="true"  :orderSubmitted="orderSubmitted" />
          <v-btn v-if="!orderSubmitted"  @click="editOrder" >Edit Order </v-btn>
          <v-btn v-if="!orderSubmitted"  @click="submitOrder" >Submit Order </v-btn>
          <h2 class="green--text" v-if="orderSubmitted">{{ order.orderMessage }}</h2>
          <h2 class="green--text" v-if="orderSubmitted">You order confirmation number is : <em>{{ order.newOrderId }}</em>  .</h2>

        </v-card>
      </v-flex>
      
      <v-flex column xs3 sm3 md3> <!-- Right Column-->
          <v-card flat>
            <v-card-title class="display-3" >Cart</v-card-title>
            <Cart :inCheckout="true" :orderSubmitted="orderSubmitted" />
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
    },
    editOrder() {
      this.$router.push("/menu");
    }
  }
};
</script>