<template>
  <header>
    <nav class="nav">
      <a href="/">
        <img
          src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/wdev.svg"
          alt="WDEV logo"
        />
      </a>
      <ul class="menu" :class="{show: isActive}">
        <div class="close" @click="showMenu">
          <div class="line"></div>
        </div>
        <li>
          <img class="menu-logo"
            src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/wdev.svg"
            alt="WDEV logo"
          >
        </li>
        <li>
          <a @click="showMenu" href="/">Home</a>
        </li>
        <li>
          <a @click="showMenu" href="/sobre">Sobre</a>
        </li>
        <li>
          <a @click="showMenu" href="/videos">Vídeos</a>
        </li>
        <li>
          <a @click="showMenu" href="/contato">Contato</a>
        </li>
      </ul>
      <div class="mobile" @click="showMenu">
        <img src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/menu.svg" alt="">
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
  data(){
    return{
      isActive: false,
    }
  },
  methods:{
    showMenu(){
      this.isActive = !this.isActive;
    }
  }
};
</script>

<style scoped>
header {
  background-color: var(--color-background-nav);
}
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
  max-width: 900px;
  margin: 0 auto;
}
.nav img {
  width: 130px;
}
.nav a {
  color: #fff;
  font-weight: 500;
  font-size: 1.2rem;
}
.menu {
  position: absolute;
  top: 0px;
  right: 0px;
  width: 60%;
  height: 100vh;
  background-color: var(--color-background-nav);
  display: none;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  padding-top: 50px;
  box-shadow: 0 0 0 500px rgba(0, 0, 0, 0.8);
}
.menu.show{
  display: flex;
}
.mobile{
  width: 30px;
  cursor: pointer;
}
.close{
  width: 30px;
  height: 30px; 
  position: absolute;
  left: 10px;
  top: 10px;
  display: grid;
  place-items: center;
  cursor: pointer;
}
.line{
  width: 30px;
  height: 4px;
  background-color: var(--color-background);
  transform: rotate(45deg);
}
.line::after{
  content: '';
  width: 30px;
  height: 4px;
  background-color: var(--color-background);
  display: block;
  position: absolute;
  top: 0px;
  transform: rotate(-90deg);
}
@media screen and (min-width:700px){
  .mobile,
  .close, 
  .menu-logo{
    display: none;
  }
  .menu{
    position: static;
    display: flex;
    flex-direction: row;
    box-shadow: none;
    height: 60px;
    width: unset;
    padding-top: 0px;
  }
}
</style>
