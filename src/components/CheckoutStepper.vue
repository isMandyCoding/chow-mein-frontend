<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">Customer Information</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2">Review Order</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 3" step="3">Order Complete</v-stepper-step>

    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        
        <CheckoutForm v-on:continuar="stepUp" />

        <v-btn>Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">

        <OrderSummary v-on:continuar="stepUp" />

        <v-btn>Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card flat>
            <v-card-title
            class="headline grey lighten-2"
            primary-title
            >
            Thank you for your order. Your order number is #{{ order.newOrderId }}
            </v-card-title>
            <v-card-content>
              <OrderTracker :newOrderId="order.newOrderId" />
            </v-card-content>
        </v-card>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
import CheckoutForm from "@/components/CheckoutForm.vue";
import Cart from "@/components/Cart.vue";
import OrderSummary from "@/components/OrderSummary.vue";
import OrderTracker from "@/components/OrderTracker.vue";
export default {
  name: "CheckoutStepper",
  components: {
    CheckoutForm,
    Cart,
    OrderSummary,
    OrderTracker
  },
  data() {
    return {
      e1: 0,
      orderSubmitted: false,
      newOrderId: undefined
    };
  },
  methods: {
    stepUp() {
      this.e1++;
    },
    returnToMenu() {
      this.$router.push("/menu");
    }
  },
  computed: {
    order() {
      return this.$store.state.order;
    }
  },
  sockets: {
    updateOrderStatus(newOrderData) {
      this.newOrderId = newOrderData.order_id;
    }
  }
};
</script>