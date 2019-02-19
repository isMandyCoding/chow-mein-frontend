<template>
  <div class="hello">
    Welcome home!

  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    // msg: String
  },
  computed: {
    menu() {
      return this.$store.state.menu;
    },
    menuError() {
      return this.$store.state.menuError;
    }
  },
  methods: {
    // increment: function() {
    //   this.$store.dispatch("increment");
    // },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
