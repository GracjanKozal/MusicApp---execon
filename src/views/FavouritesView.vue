<template>
  <FavouriteList />
</template>

<script lang="ts">
import Vue from 'vue'
import FavouriteList from "@/components/FavouriteList/FavouriteList.vue";



export default Vue.extend({
  name: 'FavouritesView',
  components: {
    FavouriteList,
  }
})
</script>

