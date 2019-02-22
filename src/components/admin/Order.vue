<template>
    <v-card>
        <v-card-title>
            <h3>{{order.customer_name}} | {{order.created_at}} | Order Number: {{ order.order_id }}   
                <v-icon @click="toggleItems = !toggleItems" v-if="!toggleItems" >arrow_drop_down</v-icon> 
                <v-icon @click="toggleItems = !toggleItems" v-if="toggleItems" >arrow_drop_up</v-icon>
                </h3>
        </v-card-title>
        <v-list v-if="toggleItems">
            <div v-for="item in order.items" :key="item.menu_id">
                <OrderItem :item="item" :orderId="order.order_id" />
            </div>                                              
        </v-list>
        <v-spacer></v-spacer>
        <v-flex xs12 sm6 d-flex>
        <v-select
          v-model="value"
          @change="changeStatusCode"
          :items="statususes"
          label="Order Status"
          
        ></v-select>
      </v-flex>
      <v-btn @click="changeStatus" > Change Order Status </v-btn>
      <v-btn @click="cancelOrder" > Cancel Order </v-btn>
        <v-list-tile> Subtotal: {{ subTotal.toLocaleString("en-US", {style:"currency", currency:"USD"}) }} </v-list-tile>
        <v-list-tile>Estimated Tax: {{ (subTotal * 0.086).toLocaleString("en-US", {style:"currency", currency:"USD"})  }}</v-list-tile>
        <v-list-tile>Total: {{ (subTotal + (subTotal * 0.086) ).toLocaleString("en-US", {style:"currency", currency:"USD"})  }} </v-list-tile>
    </v-card>
</template>

<script>
import OrderItem from "@/components/admin/OrderItem.vue";
export default {
  name: "Order",
  props: ["order"],
  components: {
    OrderItem
  },
  data() {
    return {
      toggleItems: false,
      statususes: [
        {
          text: "Received",
          value: 1
        },
        {
          text: "Cooking",
          value: 2
        },
        {
          text: "Ready",
          value: 3
        },
        {
          text: "Complete",
          value: 4
        }
      ],
      currentStatus: 1
    };
  },
  computed: {
    subTotal() {
      return this.order.items.reduce((acc, item) => {
        return acc + (item.priceInCents * item.quantity) / 100;
      }, 0);
    }
  },
  methods: {
    changeStatusCode(value) {
      this.currentStatus = value;
    },
    changeStatus() {
      let orderData = {
        orderId: this.order.order_id,
        statusCode: this.currentStatus
      };
      this.$socket.emit("changeOrderStatus", orderData);
      this.$store.dispatch("changeOrderStatus", orderData);
    },
    cancelOrder() {
      this.$store.dispatch("cancelOrder", this.order);
    }
  },
  sockets: {
    ordersChanged: function(data) {
      console.log(data);
    }
  }
};
</script>
