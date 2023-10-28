<template>
  <div class="container">
    <NavComp/>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component"/>
      </transition>
    </router-view>
  </div>
</template>

<script>
import NavComp from './components/NavComp.vue'

export default {
  name: 'App',
  components: {
    NavComp
  }
}
</script>

<style>

#app {
  background-color: rgb(55, 32, 09);
  font-family: Comfortaa, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100vw;
  height: 100vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
body{
  margin: 0;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
