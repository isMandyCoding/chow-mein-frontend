<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">Your Order Has Been Received</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2">Your Order Is Cooking</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="el > 3" step="3">Your Order is Ready for Pickup!</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="4">Your Order is Now Complete!</v-stepper-step>

    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card
          class="mb-5"
          color="grey lighten-1"
          height="200px"
        >
          <v-img src="https://images.pexels.com/photos/932261/pexels-photo-932261.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
          </v-img>
         
          
       
        </v-card>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card class="mb-5" height="200px">
          <v-img src="https://images.pexels.com/photos/784633/pexels-photo-784633.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"></v-img>
        </v-card>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card class="mb-5" height="200px">
          <v-img src="https://as1.ftcdn.net/jpg/00/12/21/42/500_F_12214258_2oObdyI3UJLHxNd4kR4JZzfgCuJDZBBS.jpg"></v-img>
        </v-card>

      </v-stepper-content>

      <v-stepper-content step="4" height="200px">
        <v-card class="mb-5">
          <v-img src="https://images.pexels.com/photos/908301/pexels-photo-908301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></v-img>
        </v-card>

      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
export default {
  name: "OrderTracker",
  props: ["newOrderId"],
  data() {
    return {
      e1: 0,
      orderStatus: "received"
    };
  },
  sockets: {
    updateOrderStatus: function(orderData) {
      if (orderData.orderId === this.newOrderId) {
        let deCoder = {
          1: "received",
          2: "cooking",
          3: "ready",
          4: "complete"
        };
        this.orderStatus = deCoder[orderData.statusCode];
        this.e1 = orderData.statusCode;
        console.log("event emmitted from server", orderData, this.orderStatus);
      }
    },
    submittedOrder: function(returnedOrder) {
      console.log("updating order status", returnedOrder);
    },
    giveCustomerOrderId: function(returnData) {
      this.$store.dispatch("submittedOrder", returnData);
    }
  }
};
</script>