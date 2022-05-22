<template>
  <div>
    <h2>Ulubione</h2>
    <div class="favourites-wrapper">
      <ul v-if="$store.state.favourites">
        <li v-for="(album) in $store.state.favourites" :key="album.id">{{ album.title }}
          <button class="removeAdd" @click="removeAlbumFromFavourites(album)" v-if="!sent"
                  :class="{ 'd-none': sent }">Usuń
          </button>
        </li>
      </ul>
      <div class="toast" v-if="sent" :class="{ 'd-none': !sent }">TEST</div>
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

<style scoped>

</style>
