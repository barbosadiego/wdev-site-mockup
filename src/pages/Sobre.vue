<template>
  <section class="sobre-intro container">
    <h1 class="title">Sobre</h1>
    <p v-html="text"></p>
  </section>
</template>

<script>
import getLinks from '@/api/services.js';

export default {
  name: 'TheSobre',
  data() {
    return {
      text: '',
    };
  },
  methods: {
    buscarTexto() {
      getLinks('/about.json')
        .then((res) => res.json())
        .then((json) => (this.text = json.about));
    },
  },
  created() {
    this.buscarTexto();
  },
};
</script>

<style scoped>
.sobre-intro {
  padding: 20px;
  margin-bottom: 50px;
}
</style>
