<template>
  <div @click="addToFavouritesHandler"><i class="fas fa-heart"></i></div>
</template>

<script lang="ts">
import Vue from "vue"
import {mapGetters} from 'vuex'
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default Vue.extend({
    name: "AddToFavouriteButton",
    data: () => ({}),
    computed: {
      ...mapGetters([
        "getAlbums"
      ])
    },
    methods: {
      addToFavouritesHandler(): void {
        this.$emit('addToFavouritesHandler')
      }
    },
  }
)
</script>
