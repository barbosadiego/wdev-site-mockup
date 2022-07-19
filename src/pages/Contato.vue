<template>
  <section class="contato-intro container">
    <h1 class="title">Contato</h1>
    <ul class="contact" >
      <li v-for="(item, index) in links" :key="index">
        <h2>{{ item.title }}</h2>
        <a :href="item.link" target="_blank">{{item.label}}</a>
      </li>
    </ul>
  </section>
</template>

<script>
import getLinks from '@/api/services.js';

export default {
  name: 'TheContato',
  data() {
    return {
      links: null,
    };
  },
  methods: {
    puxarDados() {
      getLinks('/contacts.json')
        .then((res) => res.json())
        .then((json) => (this.links = json));
    },
  },
  created() {
    this.puxarDados();
  },
};
</script>

<style scoped>
.contato-intro {
  padding: 20px;
}
h2{
  font-size: 1.2rem;
}
.contact li{
  margin-bottom: 20px;
}
.contact a{
  color: var(--color-text-dark);
}
</style>
