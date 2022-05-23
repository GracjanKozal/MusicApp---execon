<template>
  <div class="addAlbums">
    <h2 class="header-title">Dodaj Album</h2>
      <div class="input-wrapper">
          <label class="addAlbums-label">Nazwa albumu:</label>
          <input class="addAlbums-input" type="text" placeholder="Podaj nazwę albumu"
                 v-model="albumTitle">
      </div>
      <div class="addAlbums-btn">
        <button class="btn-add" @click.prevent="addNewAlbum">Dodaj !</button>
      </div>
  </div>


</template>

<script lang="ts">

import Vue from 'vue'
import {mapGetters, mapMutations} from "vuex";
import AddToFavouriteButton from '../AddToFavouritesButton/AddToFavouritesButton.vue';
import {IAlbum} from "@/store/actions";


export default Vue.extend({
  name: 'Newalbums',
  data: () => ({
    albumTitle: '',
  }),
  components: {
    AddToFavouriteButton,
  },
  computed: {
    ...mapGetters([
      "getAlbums"
    ]),
  },
  methods: {
    ...mapMutations([
      "ADD_ALBUM"
    ]),
    addNewAlbum(): void {
      this.ADD_ALBUM({title: this.albumTitle})

    }
  }
})

</script>

<style lang="scss" scoped>
@import './style.scss';
@import "../style";
</style>

