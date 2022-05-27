<template>
  <div>
    <h2 class="header-title">Cała biblioteka muzyczna</h2>
      <div class="list-container">
        <div class="notice notice-success" v-if="sent"><span class="alert">Dodano do ulubionych</span></div>
        <ul>
          <li v-for="(album, index) in $store.state.albums" :key="album.id" class="list-wrapper">
            <router-link :to="'/album/' + album.id">
              <span class="list-id">{{ index + 1}}</span><span class="list-title">{{ album.title }}</span>
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
.active {
  color: red;
}
</style>

