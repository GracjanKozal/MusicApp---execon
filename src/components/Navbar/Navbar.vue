<template>
  <div class="app-left">
    <h1>Music App</h1>
    <router-link to="/">
      <button class="btn"><i class="fas fa-home"></i> Home</button>
    </router-link>
    <router-link to="/ulubione/">
      <button class="btn"><i class="fas fa-heart"></i>Ulubione</button>
    </router-link>
    <div class="edit-text">Zarządzaj</div>
    <router-link to="/addalbums">
      <button class="btn"><i class="fas fa-plus-circle"></i> Dodaj album</button>
    </router-link>
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

.app-left {
  background-color: $color--page;
  color: $color--writing;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
  height: 1000px
}

.btn {
  font-size: 1.5rem;
  padding: .8rem;
  width: 20rem;
  background-color: #262628;
  border: 1px solid #262626;
}

.btn:hover {
  background-color: #4d4d4d;
}

.edit-text {
  font-size: 1.25rem;
  padding: .5rem;
}

</style>
