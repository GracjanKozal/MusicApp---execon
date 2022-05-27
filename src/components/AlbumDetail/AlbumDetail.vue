<template>
  <div class="edit-detail">
    <h2 class="header-title">Szczegóły Albumu</h2>
    <p class="album-title">Tytuł Albumu</p>
    <div v-if="editMode" >
      <div class="edit-title">
        <input type="text" class="edit" v-model.lazy="album.title"/>
      </div>
    </div>
    <div v-else class="edit-title-disabled">
      <span class="edit-title-inner">{{ album.title }}</span>
    </div>
    <p class="album-title">Zdjęcie Albumu</p>
    <div v-if="editMode" >
      <div class="edit-title">
        <input type="url" class="edit" v-model.lazy="newImageUrl"/>
      </div>
    </div>
    <div v-else>
      <img :src="handleAlbumImage" alt="" class="album-image">
    </div>
    <button class="btn" @click="editMode = !editMode">Edytuj Szczegóły</button>
  </div>

</template>

<script lang="ts">
import Vue from 'vue'
import {mapActions, mapGetters} from 'vuex'
import {IAlbum} from "@/store/actions";


export default Vue.extend({
  name: "AlbumDetail",
  data: () => ({
      editMode: false,
      newImageUrl: '',
    }),
  computed: {
    ...mapGetters(
      ['getAlbums']
    ),
    album(): IAlbum {
      const currentId = parseInt(this.$route.params.id)
      return this.getAlbums.find((album: IAlbum) => album?.id === currentId)
    },
    handleAlbumImage(): string {
      return !this.newImageUrl ? this.album.thumbnailUrl : this.newImageUrl
    }
  },
  methods: {
    ...mapActions(
      ['fetchAlbums']
    ),
  },
})

</script>

<style lang="scss" scoped>

.edit {
  font-size: 1.2rem;
  margin-left: -.5rem;
}

.container {
  .edit-detail {
    width: 100%;

    .album-title {
      margin-top: 30px;
      margin-bottom: 0;
      font-weight: 600;
      font-size: 16px;
    }
  }
  .edit-title-disabled {
    height: 50px;
    width: 90%;
    background-color: rgba(255,255,255,0.07);
    border-radius: 3px;
    padding: 0 10px;
    margin-top: 8px;
    font-size: 14px;
    font-weight: 300;
    color: white;
    display: flex;
    .edit-title-inner {
      margin: auto 0;
    }
  }
  .edit-title {

    .edit {
      height: 50px;
      width: 90%;
      background-color: rgba(255,255,255,0.07);
      border-radius: 3px;
      padding: 0 10px;
      margin-top: 8px;
      font-size: 14px;
      font-weight: 300;
      color: white;
    }
  }
  .btn {
    margin-top: 10px;
    padding: 12px 24px;
    border-radius: 5px;
    border: none;
    background-color: rgba(10, 59, 51, 0.9);
    color: #44e1d1;
  }
}

</style>
