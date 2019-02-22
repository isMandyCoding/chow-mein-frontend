<template>
    <div>
        <v-btn class="blue-grey white--text" @click="changeToEnglish" >English</v-btn>
        <v-btn class="blue-grey white--text" @click="changeToChinese" >中文</v-btn>
        <v-btn class="blue-grey white--text" @click="changeToBoth" >English & 中文 </v-btn>        
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
