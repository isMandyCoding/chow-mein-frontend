<template>
<v-app>
    <v-toolbar class="blue-grey white--text" >
    <v-toolbar-side-icon class="white--text"></v-toolbar-side-icon>
    <v-toolbar-title>Asian Cafe Express</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn class="white--text" flat to="/" >Home</v-btn>      
      <v-btn class="white--text" flat to="/about">About</v-btn>
      <v-btn class="white--text" flat to="/contact">Location & Hours</v-btn>
      <v-btn class="white--text" flat to="/menu">Menu</v-btn>
    </v-toolbar-items>
  </v-toolbar>
  <v-content>
    <v-container fluid>
      <router-view></router-view>
    </v-container>
  </v-content>
  <v-footer app></v-footer>
</v-app>
  
</template>

<script>
export default {
  created() {
    this.$store.dispatch("getMenu");
    this.$store.dispatch("getOrderItems");
  },
  sockets: {
    connect: function() {
      console.log("socket connected");
    }
  }
};
</script>



<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
