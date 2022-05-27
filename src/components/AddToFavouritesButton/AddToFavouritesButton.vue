<template>
  <button class="list-favourites-icon" @click="addToFavouritesHandler" :class="{ 'active': isActive }"><i class="fas fa-heart"></i></button>
</template>

<script lang="ts">
import Vue from "vue"
import {mapGetters} from 'vuex'

export default Vue.extend({
    name: "AddToFavouriteButton",
    data: () => ({
      isActive: false,
    }),
    computed: {
      ...mapGetters([
        "getAlbums"
      ])
    },
    methods: {
      addToFavouritesHandler(): void {
        this.$emit('addToFavouritesHandler')
        this.isActive = !this.isActive;
      },
    },
  }
)
</script>

