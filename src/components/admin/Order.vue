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
                <OrderItem :item="item" />
            </div>                                              
        </v-list>
        <v-spacer></v-spacer>
        <v-list-tile> Subtotal: {{ subTotal.toLocaleString("en-US", {style:"currency", currency:"USD"}) }} </v-list-tile>
        <v-list-tile>Estimated Tax: {{ (subTotal * 0.086).toLocaleString("en-US", {style:"currency", currency:"USD"})  }}</v-list-tile>
        <v-list-tile> Total: {{ (subTotal + (subTotal * 0.086) ).toLocaleString("en-US", {style:"currency", currency:"USD"})  }} </v-list-tile>
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
      toggleItems: false
    };
  },
  computed: {
    subTotal() {
      return this.order.items.reduce((acc, item) => {
        return acc + (item.priceInCents * item.quantity) / 100;
      }, 0);
    }
  }
};
</script>
