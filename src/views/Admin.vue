<template>
  <div class="about">
    <h1>This is the super secret admin view wooooooOOOoo!</h1>
    <Orders />
  </div>
</template>

<script>
import Orders from "@/components/admin/Orders.vue";

export default {
  name: "Admin",
  components: {
    Orders
  },
  create() {
    this.$store.dispatch("getOrders");
  }
};
</script>