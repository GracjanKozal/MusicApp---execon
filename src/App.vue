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
    .header-title {
      font-size: 2rem;
      margin-bottom: 30px;
      color: #44e1d1;
    }
    .notice {
      position: absolute;
      top: 16px;
      right: 0;
      background-color: #ebebeb;
      padding: 30px;
      &.notice-success {
        border-left: 5px solid #178344;
      }
      &.notice-warning {
        border-left: 5px solid darkred;
      }
      .alert {
        color: #6c6c6c;
        font-size: 18px;
      }
    }
    .list-container {
      ul {
        padding: 0;
        .list-wrapper {
          list-style-type: none;
          display: flex;
          padding: 15px 10px;
          margin: 8px 0;
          justify-content: space-between;
          background-color: rgba(64, 64, 64, 0.8);
          border-radius: 12px;
          align-items: center;
          &:hover {
            background-color: #404040;
          }
          .list-title {
            font-size: 1.25rem;
          }
        }
      }
      .list-favourites-icon {
        margin: auto 0 auto 0;
        font-size: 2rem;
      }
    }
  }
  .edit-title {
    .edit {
      height: 50px;
      width: 90%;
      background-color: rgba(255, 255, 255, 0.07);
      border-radius: 3px;
      padding: 0 10px;
      font-size: 14px;
      font-weight: 300;
      color: white;
    }
  }
}
</style>



