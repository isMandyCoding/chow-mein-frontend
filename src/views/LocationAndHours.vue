<template>
    <v-container>
    <v-layout>
      <v-flex column xs6 sm6 md6>

        <v-container>
          <v-layout>
            <v-flex>

              <v-card>
                <v-card class="elevation-0 transparent">
                      <v-card-title class="headline grey lighten-2"
                      primary-title>
                        <div class="headline">Location & Hours</div>
                      </v-card-title>
                      <v-list class="transparent">
                        <v-list-tile>
                          <v-list-tile-title>Hours</v-list-tile-title>                      
                        </v-list-tile>
                        <v-list-tile>
                          <p>Mon - Thurs: 11AM - 9 PM</p>
                        </v-list-tile>
                        <v-list-tile>
                          <p>Fri & Sat: 11AM - 9:30 PM</p>
                        </v-list-tile>
                        <v-list-tile>
                          <p>Sun: 11AM - 9 PM</p>
                        </v-list-tile>
                        <v-list-tile>
                          <v-list-tile-action>
                            <v-icon class="blue--text text--lighten-2">phone</v-icon>
                          </v-list-tile-action>
                          <v-list-tile-content>
                            <v-list-tile-title>(480) 668-5910</v-list-tile-title>
                          </v-list-tile-content>
                        </v-list-tile>
                        <v-list-tile>
                          <v-list-tile-action>
                            <v-icon class="blue--text text--lighten-2">place</v-icon>
                          </v-list-tile-action>
                          <v-list-tile-content>
                            <v-list-tile-title>1911 W Main St. #3, Mesa, AZ 85201</v-list-tile-title>
                          </v-list-tile-content>
                        </v-list-tile>
                        <v-list-tile>
                          <v-list-tile-action>
                            <v-icon class="blue--text text--lighten-2">email</v-icon>
                          </v-list-tile-action>
                          <v-list-tile-content>
                            <v-list-tile-title>Leungmike36@yahoo.com</v-list-tile-title>
                          </v-list-tile-content>
                        </v-list-tile>
                      </v-list>
                    </v-card>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>

      <v-flex column xs6 sm6 md6>
        <v-container>
          <v-layout>
            <v-flex>
              <v-img src="assets/map.png" height="600"></v-img>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "LocationAndHours",
  components: {}
};
</script>

<style>
</style>