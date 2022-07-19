<template>
  <div id="app">
    <Header />
    <main>
      <router-view></router-view>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
:root {
  --color-background: #f3f3f3;
  --color-background-nav: #2b3d50;
  --color-background-home: #344960;
  --color-text-light: #ededed;
  --color-text-title: #ff5555;
  --color-text-dark: #3d3d3d;
}

* {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  background-color: var(--color-background);
}

img {
  max-width: 100%;
  display: block;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main{
  flex: 1;
}

.container{
  max-width: 900px;
  margin: 0 auto;
}

.title{
  margin: 50px 0px 30px;
  color: var(--color-text-title);
  font-size: 2rem;
}
</style>
