<template>
    <div>
        <v-card>
            <v-card-title
            class="headline grey lighten-2"
          primary-title>
          Review Your Order
          </v-card-title>

        <v-container>
            <v-layout>
                <v-flex>
                    <v-card flat>
                        <v-card-title>
                            <h3>Customer Information</h3>
                        </v-card-title>
                        <v-list>
                            <v-list-tile>
                                Name: {{order.customerName}}
                            </v-list-tile>
                            <v-list-tile>
                                Email: {{order.customerEmail}}
                            </v-list-tile>
                            <v-list-tile>
                                Phone: {{order.customerPhone}}
                            </v-list-tile>
                        </v-list>

                        <v-divider></v-divider>

                        <v-card-title>
                            <h3>Order Items</h3>
                        </v-card-title>
                        <v-list>
                            <v-list-tile v-for="item in order.items" :key="item.id" >
                                <v-list-tile-content>
                                    {{ item.eng_name }} | {{ item.ch_name }} | Quantity: {{item.quantity}} | Amount: {{ ( (item.priceInCents * item.quantity)  / 100).toLocaleString("en-US", {style:"currency", currency:"USD"}) }}
                                </v-list-tile-content>
                            </v-list-tile>
                            <v-divider></v-divider>
                        </v-list>

                        <v-card-title>
                            <h3>Order Totals</h3>
                        </v-card-title>
                        <v-list>
                            <v-list-tile>
                                Subtotal: {{ subTotal.toLocaleString("en-US", {style:"currency", currency:"USD"}) }}
                            </v-list-tile>
                            <v-list-tile>
                                Tax: {{ (subTotal * 0.0867).toLocaleString("en-US", {style:"currency", currency:"USD"}) }}
                            </v-list-tile>
                            <v-list-tile>
                                Total: {{ ((subTotal * 0.0867) + subTotal).toLocaleString("en-US", {style:"currency", currency:"USD"}) }}
                            </v-list-tile>
                        </v-list>

                                <v-btn
                                color="primary"
                                @click="submitOrder"
                                >
                                Submit Order
                                </v-btn>
                        
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>

        </v-card>
    </div>
</template>

<script>
export default {
  name: "OrderSummary",
  computed: {
    order() {
      return this.$store.state.order;
    },
    subTotal() {
      return this.$store.state.order.items.reduce((acc, item) => {
        return acc + (item.priceInCents * item.quantity) / 100;
      }, 0);
    }
  },
  methods: {
    submitOrder() {
      this.$socket.emit("submitOrder", this.order);
      this.$emit("continuar");
    }
  }
};
</script>