<template>
    <div>
        <v-btn @click="changeToEnglish" color="red darken-3" class="white-text" >English</v-btn>
        <v-btn @click="changeToChinese" >中文</v-btn>
        <v-btn @click="changeToBoth" >English & 中文 </v-btn>

        
    </div>
</template>

<script>
export default {
  name: "MenuLanguage",
  methods: {
    changeToEnglish() {
      return this.$store.dispatch("changeMenuLang", "english");
    },
    changeToChinese() {
      return this.$store.dispatch("changeMenuLang", "chinese");
    },
    changeToBoth() {
      return this.$store.dispatch("changeMenuLang", "both");
    }
  }
};
</script>
