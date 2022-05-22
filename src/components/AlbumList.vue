<template>

  <div class="list">
    <p class="list-text">Cała biblioteka muzyczna</p>
    <div class="body-list">
      <div class="body-list">
        <div class="toast" v-if="sent" :class="{ 'd-none': !sent }">TEST</div>
        <ul>
          <li v-for="(album, index) in $store.state.albums" :key="album.id">
            <router-link :to="'/album/' + album.id">
              {{ index + 1}} | {{ album.title }}
            </router-link>
            <AddToFavouritesButton @addToFavouritesHandler="addToFavourites(album)" v-if="!sent" :class="{ 'd-none': sent }"/>
          </li>
        </ul>
      </div>

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

