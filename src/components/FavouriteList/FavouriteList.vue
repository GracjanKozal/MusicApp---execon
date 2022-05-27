<template>
  <div>
    <h2 class="header-title">Ulubione</h2>
    <div class="list-container">
      <div class="notice notice-warning" v-if="sent" :class="{ 'd-none': !sent }"><span class="alert">Usunięto z ulubionych !</span></div>
      <ul v-if="$store.state.favourites">
        <li v-for="(album) in $store.state.favourites" :key="album.id" class="list-wrapper"><span class="list-title">{{ album.title }}</span>
          <div class="list-favourites-icon" @click="removeAlbumFromFavourites(album)"><i class="fas fa-thumbs-down"></i>
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
  .list-text {
    font-size: 2rem;
    font-weight: 900;
    padding: 2rem;
  }
  .header-title {
    font-size: 1.5rem;
    margin-bottom: 0;
  }
  .list-container {
    .notice {
      position: absolute;
      top: 16px;
      right: 0;
      background-color: #ebebeb;
      padding: 30px;
      &.notice-success {
        border-left: 5px solid #178344;
      }
      .alert {
        color: #6c6c6c;
        font-size: 18px;
      }
    }
  }
  ul {
    padding: 0;
    .list-wrapper {
      list-style-type: none;
      display: flex;
      padding: 12px 8px;
      margin: 8px 0;
      justify-content: space-between;
      background-color: rgba(64, 64, 64, 0.8);
      border-radius: 12px;
      &:hover {
        background-color: #404040;
      }
      .list-id {
        border-right: 2px solid rgba(191, 191, 191, 0.3);
        margin-right: 10px;
        padding: 0 10px;
        color: rgba(191, 191, 191, 0.3);
        font-size: 1.5rem;
      }
      .list-title {
        font-size: 1.25rem;
      }
      .list-favourites-icon {
        margin: auto 5px auto 0;
        font-size: 1.25rem;
      }
    }
  }
  .list-container {
    .notice {
      position: absolute;
      top: 16px;
      right: 0;
      background-color: #ebebeb;
      padding: 30px;

      &.notice-warning {
        border-left: 5px solid #8f130c;
      }
    }
  }
}


</style>
