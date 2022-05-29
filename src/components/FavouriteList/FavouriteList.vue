<template>
  <div>
    <h2 class="header-title">Ulubione</h2>
    <div class="list-container">
      <div class="notice notice-warning" v-if="sent" :class="{ 'd-none': !sent }"><span class="alert">Usunięto z ulubionych !</span></div>
      <ul v-if="$store.state.favourites">
        <li v-for="(album) in $store.state.favourites" :key="album.id" class="list-wrapper"><span class="list-title">{{ album.title }}</span>
          <div class="list-favourites-icon" @click="removeAlbumFromFavourites(album)"><i class="fas fa-heart"></i>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import {mapGetters, mapMutations} from 'vuex'
import {IAlbum} from "@/store/actions";

export default Vue.extend({
    name: "FavouriteList",
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
        "REMOVE_FAVOURITE"
      ]),
      removeAlbumFromFavourites(album: IAlbum): void {
        this.REMOVE_FAVOURITE(album)
        this.submit()
      },
      submit(): void {
        this.sent = true;
        setTimeout(() => {
          this.sent = false;
        }, 5000);
      },
    }
  }
)
</script>

<style lang="scss" scoped>
.container {
  .list-container {
    ul {
      .list-wrapper {
        .list-favourites-icon {
          color: red;
        }
      }
    }
  }
}


</style>
