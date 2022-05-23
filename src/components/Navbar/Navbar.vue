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
@import '../../assets/variables.scss';
@import "style";



</style>
