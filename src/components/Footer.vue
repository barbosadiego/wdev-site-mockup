<template>
  <footer class="footer">
    <ul class="social">
      <li v-for="(item, index) in links" :key="index">
        <a :href="item.link" target="_blank">
          <img :src="item.icon" :alt="item.label">
        </a>
      </li>
    </ul>
  </footer>
</template>

<script>
import getLinks from '@/api/services.js';

export default {
  name: 'TheFooter',
  data() {
    return {
      links: [],
    };
  },
  methods: {
    puxarDados() {
      getLinks('/social-links.json')
        .then((res) => res.json())
        .then((json) => this.links = json)
    },
  },
  created(){
    this.puxarDados()
    console.log(this.links)
  }
};
</script>

<style scoped>
.footer{
  background-color: var(--color-background-nav);
  height: 60px;
  display: flex;
  justify-content: center;
  /* position: relative; */
  /* top: 60px; */
}
.footer img{
  width: 20px;
}
.social{
  display: flex;
  align-items: center;
  gap: 20px;
}
.social a{
  border: 2px solid var(--color-background);
  height: 40px;
  width: 40px;
  border-radius: 50%;
  display: grid;
  place-items: center;
}
</style>
