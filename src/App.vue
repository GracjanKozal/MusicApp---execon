<template>
  <main>
    <div class="albumList">
      <Navbar/>
      <router-view v-slot="{Component}"/>
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

</style>



