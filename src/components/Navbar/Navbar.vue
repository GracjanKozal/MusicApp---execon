<template>
  <div class="navbar">
    <h1 class="logo">Music App</h1>
    <div class="link-wrapper">
    <router-link to="/">
      <i class="fas fa-home btn"><span>Home</span></i>
    </router-link>
    <router-link to="/ulubione/">
      <i class="fas fa-heart btn"><span>Ulubione</span></i>
    </router-link>
    <div class="edit-text">Zarządzaj</div>
    <router-link to="/addalbums">
      <i class="fas fa-plus-circle btn"><span>Dodaj album</span></i>
    </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Navbar'
})
</script>

<style lang="scss" scoped>


.navbar {
  background-color: #262626;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
  top: 0;
  left: 0;
  z-index: 3;
  .logo {
    font-size: 2rem;
  }
  .link-wrapper {
    padding-left: 10px;
    .btn {
      font-size: 1.5rem;
      padding: .8rem;
      width: 15rem;
      background-color: #262628;
      border: 1px solid #262626;
      &:hover {
        background-color: #4d4d4d;
      }
      span {
        padding-left: 10px;
        font-family: 'Montserrat', sans-serif;
      }
    }
    .edit-text {
      font-size: 1.25rem;
      padding: 10px 10px 0;
      font-weight: 300;
    }
  }
}




</style>
