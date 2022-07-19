<template>
  <div id="app">
    <Header />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
  name: 'App',
  components:{
    Header,
  }
}
</script>

<style>
:root {
  --color-background:#F3F3F3;
  --color-background-nav:#2B3D50;
  --color-background-home:#344960;
  --color-text-light:#EDEDED;
  --color-text-title:#FF5555;
  --color-text-dark:#3D3D3D;
}

*{
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
}

body{
  font-family: Arial, Helvetica, sans-serif;
  background-color: var(--color-background);
}

img{
  max-width: 100%;
  display: block;
}

ul{
  list-style: none;
}

a{
  text-decoration: none;
}

</style>
