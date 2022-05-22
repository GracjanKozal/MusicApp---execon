<template>

  <div class="addAlbums">
    <h1 class="addAlbums-names">Dodaj Album</h1>
    <form aciton="0">
      <div class="form-group">
        <div class="col-1">
          <label class="addAlbums-form">Nazwa albumu:</label>
        </div>
        <div class="col-2">
          <input class="addAlbums-input" type="text" placeholder="Podaj nazwę albumu"
                 v-model="albumTitle">
        </div>
      </div>
      <div class="addAlbums-btn">
        <button class="btn-add" @click.prevent="addNewAlbum">Dodaj !</button>
      </div>
    </form>
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

</style>

