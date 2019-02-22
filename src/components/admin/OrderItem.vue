<template>
    <v-list-tile>
        {{item.eng_name}}  | {{item.ch_name}}  | Quantity: {{item.quantity}}  |  Price: {{ ( (item.priceInCents * item.quantity)  / 100).toLocaleString("en-US", {style:"currency", currency:"USD"}) }}
    </v-list-tile>
</template>

<script>
export default {
  props: ["item"],
  name: "OrderItem"
};
</script>
