<template>
  <div>
    <h2 class="header-title">Cała biblioteka muzyczna</h2>
      <div class="list-container">
        <div class="notice notice-success" v-if="sent" :class="{ 'd-none': !sent }"><span class="alert">Dodano do ulubionych</span></div>
        <ul>
          <li v-for="(album, index) in $store.state.albums" :key="album.id" class="list-wrapper">
            <router-link :to="'/album/' + album.id">
              <span class="list-id">{{ index + 1}}</span><span class="list-title">{{ album.title }}</span>
            </router-link>
            <AddToFavouritesButton @addToFavouritesHandler="addToFavourites(album)" v-if="!sent" :class="{ 'd-none': sent }"/>
          </li>
        </ul>
      </div>
  </div>
</template>

<script lang="ts">

import Vue from "vue"
import {mapGetters, mapMutations} from 'vuex'
import AddToFavouritesButton from "@/components/AddToFavouritesButton/AddToFavouritesButton.vue";
import {IAlbum} from "@/store/actions";


export default Vue.extend({
  name: 'Todos',
  components: {AddToFavouritesButton},
  data: () => ({
    sent: false,
  }),
  computed: {
    ...mapGetters([
      "getAlbums"
    ])
  },
  methods: {
    ...mapMutations([
      "ADD_FAVOURITES"
    ]),
    addToFavourites(album: IAlbum): void {
      console.log('test')
      this.ADD_FAVOURITES(album)
      this.submit()
    },
    submit(): void {
      this.sent = true;
      setTimeout(() => {
        this.sent = false;
      }, 5000);
    }
  }
});

</script>

<style lang="scss" scoped>
@import './style.scss';

</style>

