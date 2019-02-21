<template>
    <v-container>
        <v-layout>
            <v-flex>
                <template>
                    <v-layout>
                        <v-flex row>
                        <v-card>
                            <v-card-title primary-title>
                            <div>
                                <h3 class="headline mb-0">Pending Orders</h3>
                            </div>
                            <template>   
                                <v-container fluid>
                                    <v-layout column wrap>
                                    <v-flex v-for="order in pendingOrders" :key="order.order_id" xs4>
                                        <v-card>
                                            <v-card-title>
                                                {{order.customer_name}} | {{order.created_at}}
                                            </v-card-title>
                                            <v-card-subtitle>
                                                {{ order.order_id }}
                                            </v-card-subtitle>
                                            <v-card-content>
                                                <Cart v-bind:adminView="true" :adminOrder="order" />
                                            </v-card-content>
                                        </v-card>
                                    </v-flex>                                        
                                    </v-layout>
                                </v-container>
                            </template>

                            </v-card-title>
                        </v-card>
                        </v-flex>
                    </v-layout>
                </template>

            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import Cart from "@/components/Cart.vue";

export default {
  name: "Orders",
  components: {
    Cart
  },
  created() {
    this.$store.dispatch("getOrders");
  },
  computed: {
    pendingOrders() {
      return this.$store.getters.receivedOrders;
    },
    readyOrders() {
      return this.$store.getters.readyForPickup;
    },
    cookingOrders() {
      return this.$store.getters.cooking;
    },
    completeOrders() {
      return this.$store.getters.completeOrders;
    }
  }
};
</script>