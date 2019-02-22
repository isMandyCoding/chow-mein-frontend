<template>
    <v-container>
        <v-layout>
            <v-flex>
                <template>
                    <v-layout>
                        <v-flex row>
                          <!-- tabs -->
                            <div>
                              <v-tabs
                                v-model="active"
                                color="blue-grey darken-2"
                                dark
                                slider-color="white"
                              >
                                <v-tab
                                  v-for="type in orderTypes"
                                  :key="type"
                                  ripple
                                >
                                  {{ type }} 
                                  <v-badge color="success" v-if="type === 'Ready'" > ( {{ readyOrders.length }} ) </v-badge>
                                  <v-badge color="success" v-if="type === 'Cooking'" > ({{ cookingOrders.length }}) </v-badge>
                                  <v-badge color="success" v-if="type === 'Complete'" > ({{ completeOrders.length }} )</v-badge>
                                  <v-badge color="success" v-if="type === 'Pending'" >( {{ pendingOrders.length }}) </v-badge>


                                </v-tab>
                                <v-tab-item
                                  v-for="type in orderTypes"
                                  :key="type"
                                >

                                 <v-card>
                                  <v-card-title primary-title class="headline grey lighten-2">
                                  <div>
                                      <h3 class="mb-0">{{type }} Orders</h3>
                                  </div>
                                  </v-card-title>
                                  <template>   
                                      <v-container fluid>
                                          <v-layout column wrap>
                                          <v-flex v-if="type === 'Ready' " v-for="order in readyOrders" :key="order.order_id" xs4>
                                              <Order :order="order" />
                                          </v-flex> 
                                          <v-flex v-if="type === 'Cooking' " v-for="order in cookingOrders" :key="order.order_id" xs4>
                                              <Order :order="order" />
                                          </v-flex>
                                          <v-flex v-if="type === 'Complete' " v-for="order in completeOrders" :key="order.order_id" xs4>
                                              <Order :order="order" />
                                          </v-flex>

                                          <v-flex v-if="type === 'Pending' " v-for="order in pendingOrders" :key="order.order_id" xs4>
                                              <Order :order="order" />
                                          </v-flex>                                        
                                          </v-layout>
                                      </v-container>
                                  </template>

                                  
                              </v-card>
                                  
                                </v-tab-item>
                              </v-tabs>
                            </div>


                        </v-flex>
                    </v-layout>
                </template>

            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import Order from "@/components/admin/Order.vue";
export default {
  name: "Orders",
  components: {
    Order
  },
  data() {
    return {
      orderTypes: ["Pending", "Ready", "Cooking", "Complete"]
    };
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
    },
    allOrders() {
      return this.$store.state.adminOrdersIds;
    }
  },
  sockets: {
    sendOrderToRestaurant: function(newOrder) {
      console.log("We got a new order, yay!!!", newOrder);
      // this.$store.dispatch("updateAdminOrders", newOrder);
      this.$store.dispatch("getOrders");
      // console.log("we got a new order!", newOrder);
    }
  }
};
</script>