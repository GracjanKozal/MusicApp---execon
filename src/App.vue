<template>
  <main>
    <div class="app">
      <Navbar/>
      <div class="container">
        <router-view v-slot="{Component}"/>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import Navbar from './components/Navbar/Navbar.vue'
import {mapActions} from 'vuex'

export default Vue.extend({
  name: 'App',
  data: () => ({
    title: 'MusicApp',
  }),
  components: {
    Navbar,
  },
  created() {
    this.fetchAlbums()
  },
  methods: {
    ...mapActions([
      "fetchAlbums"
    ])
  }
});
</script>

<style lang="scss">


*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  font-size: 2rem;
  color: white;
  text-decoration: none;
}

html {
  font-family: 'Montserrat', sans-serif;
  font-size: 10px;
}

button {
  border: 0;
  margin: 0;
  padding: 0;
  outline: none;
  background: transparent;
}

h1 {
  font-size: 3rem;
  padding-bottom: 3rem;
}


.app {
  display: flex;
  height: 100%;
  .container {
    color: white;
    background-color: #4d4d4d;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    padding: 24px;
    margin: 0;
  }
}
</style>



