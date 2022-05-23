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
@import './assets/variables';
@import './main.scss';
@import "./components/style";
@import "./components/FavouriteList/style";
@import "./components/AlbumDetail/style";
</style>



