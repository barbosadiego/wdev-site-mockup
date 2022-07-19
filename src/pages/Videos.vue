<template>
  <section class="videos-intro container">
    <h1 class="title">Vídeos</h1>
    <div class="videos-container">
      <div class="video" v-for="(item, index) in dados" :key="index">
        <a :href="item.link" target="_blank">
          <img :src="item.thumb" :alt="item.title" />
        </a>
        <p>{{ item.title }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import getLinks from '@/api/services.js';

export default {
  name: 'TheVideos',
  data() {
    return {
      dados: null,
    };
  },
  methods: {
    puxarVideos() {
      getLinks('/videos.json')
        .then((res) => res.json())
        .then((json) => (this.dados = json));
    },
  },
  created() {
    this.puxarVideos();
  },
};
</script>

<style scoped>
.videos-intro {
  padding: 20px;
  margin-bottom: 50px;
}
.videos-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
}
.video {
  text-align: center;
  max-width: 250px;
}
.video p {
  margin-top: 10px;
  font-weight: bold;
  color: var(--color-text-dark);
}
@media screen and (min-width: 550px) {
  .videos-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    align-items: flex-start;
    justify-items: center;
  }
}
</style>
