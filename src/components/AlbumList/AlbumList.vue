<template>
  <div>
    <h2 class="header-title">Cała biblioteka muzyczna</h2>
      <div class="list-container">
        <div class="notice notice-success" v-if="sent"><span class="alert">Dodano do ulubionych</span></div>
        <ul>
          <li v-for="(album, index) in $store.state.albums" :key="album.id" class="list-wrapper">
            <router-link :to="'/album/' + album.id">
              <div><span class="list-id">{{ index + 1}}</span></div><span class="list-title">{{ album.title }}</span>
            </router-link>
            <AddToFavouritesButton @addToFavouritesHandler="addToFavourites(album)"/>
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
.container {
  .list-container {
    ul {
      .list-wrapper {
        padding: 0 10px;
        a {
          display: flex;
          align-items: center;
          width: 100%;
          height: 100%;
          padding: 15px 0;
          div {
            width: 35px;
            border-right: 2px solid rgba(191, 191, 191, 0.3);
            margin-right: 10px;
            text-align: center;
          }
          .list-id {
            color: rgba(191, 191, 191, 0.3);
            font-size: 1.5rem;
          }
        }
        .list-favourites-icon {
          &.active {
            color: red;
          }
        }
      }
    }
  }
}
</style>

