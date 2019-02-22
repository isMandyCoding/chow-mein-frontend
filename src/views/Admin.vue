<template>
  <div class="admin">
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