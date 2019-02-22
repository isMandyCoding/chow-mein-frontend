<template> 
  <v-container>
    <h1>Checkout</h1>
  <CheckoutStepper />  
  </v-container>
</template>

<script>
import CheckoutStepper from "../components/CheckoutStepper.vue";
export default {
  name: "Checkout",
  components: {
    CheckoutStepper
  }
};
</script>