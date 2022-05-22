<template>
  <div class="edit-detail">
    <h1>Szczegóły Albumu</h1>
    <h2>Tytuł Albumu</h2>
    <div v-if="editMode">
      <div class="edit-title">
        <input type="text" class="edit" v-model.lazy="album.title"/>
      </div>
      <div class="edit-img">
        <input class="addAlbums-input_file" type="file" @change="uploadFile">
      </div>
    </div>
    <div v-else>
      {{ album.title }}
    </div>
    <h2>Zdjęcie Albumu</h2>
    <img :src="album.thumbnailUrl" :alt="album.title">
    <button @click="submitFile">Zmień zdjęcie</button>
    <button class="btn" @click="editMode = !editMode"><i class="icon"
                                                         :class="{ 'icon-edit': !editMode, 'icon-check': editMode}">Edytuj
      Szczegóły</i></button>
  </div>

</template>

<script lang="ts">
import Vue from 'vue'
import {mapActions, mapGetters} from 'vuex'
import {IAlbum} from "@/store/actions";


export default Vue.extend({
  name: "AlbumDetail",
  data() {
    return {
      editMode: false
    };
  },
  computed: {
    ...mapGetters(
      ['getAlbums']
    ),
    album(): IAlbum {
      const currentId = parseInt(this.$route.params.id)
      return this.getAlbums.find((album: IAlbum) => album?.id === currentId)
    },
  },
  methods: {
    ...mapActions(
      ['fetchAlbums']
    ),
  },
})

</script>

<style>
@import './style.scss';
</style>

