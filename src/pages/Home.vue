<template>
  <section class="home-intro">
    <h1>Vídeos novos toda <strong>quinta</strong> às <strong>20h</strong></h1>
    <a href="https://youtube.com/wdevoficial" target="_blank">
      <img src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/subscribe.svg" alt="Inscreva-se no canal WDEV">
    </a>
    <a href="https://youtube.com/wdevoficial" target="_blank">youtube.com/wdevoficial</a>
  </section>
</template>

<script>
export default {
  name: 'TheHome',
}
</script>

<style scoped>
.home-intro{
  height: calc(100vh - 119px);
  background-color: var(--color-background-home);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  text-align: center;
}
h1{
  color: var(--color-background);
  font-size: 1.3rem;
  font-weight: 400;
}
.home-intro img{
  width: 300px;
  margin: 30px 0px;
}
.home-intro a{
  color: var(--color-background);
}
.home-intro a:hover{
  text-decoration: underline;
}
</style>