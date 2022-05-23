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

    <button class="btn" @click="editMode = !editMode">Edytuj Szczegóły</button>
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

<style lang="scss" scoped>
@import './style.scss';
@import '../style.scss';
</style>

