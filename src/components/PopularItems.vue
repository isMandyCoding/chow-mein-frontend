<template> <!-- Popular Items Carousel -->
  <v-layout>
    <v-flex row>
        <v-carousel>
          <v-carousel-item
            v-for="(item,i) in mostPopularItems"
            :key="i"
            :src="item.img_url"
            >
              <v-jumbotron>
                <v-container fill-height>
                  <v-layout align-center>
                    <v-flex>
                      <h3 class="display-3" v-if="menuLang === 'english' || menuLang === 'both' " >{{ item.eng_name }}  </h3>
                      <h3 class="display-3" v-if="menuLang === 'chinese' || menuLang === 'both' " >{{ item.ch_name }}</h3>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-jumbotron>
            </v-carousel-item>        
        </v-carousel>                          
      </v-flex>
    </v-layout>
  </template>



<script>
export default {
  name: "PopularItems",
  data() {
    return {};
  },
  computed: {
    orderItems() {
      return this.$store.state.orderItems;
    },
    mostPopularItems() {
      return this.$store.getters.mostPopularItems;
    },
    menuLang() {
      return this.$store.state.menuLang;
    }
  }
};
</script>