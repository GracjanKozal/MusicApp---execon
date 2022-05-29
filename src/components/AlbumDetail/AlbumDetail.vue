<template>
  <div class="edit-detail">
    <h2 class="header-title">Szczegóły Albumu</h2>
    <div class="notice notice-success" v-if="sent"><span class="alert">Zaaktualizowano Zmiany</span></div>
    <div class="title-wrapper">
    <p class="album-title">Tytuł Albumu</p>
    <div v-if="editMode">
      <div class="edit-title">
        <input type="text" class="edit" v-model.lazy="album.title"/>
      </div>
    </div>
    <div v-else class="edit-title-disabled">
      <span class="edit-title-inner">{{ album.title }}</span>
    </div>
    </div>
    <p class="album-title">Zdjęcie Albumu</p>
    <div v-for="(x, index) in album.images" class="album-image-wrapper" key="index">
      <img :src="getAlbumImage(index)" alt="" class="album-image">
      <div v-if="editMode">
        <div class="edit-title">
          <input type="url" class="edit" v-model.lazy="album.images[index]"
                 :src="getAlbumImage(index)"/>
        </div>
      </div>
    </div>
    <div v-if="editMode">
      <button class="btn" @click="revertToOriginalState">Anuluj</button>
      <button class="btn" @click="saveAlbumChanges">Zapisz!</button>
    </div>
    <div v-else>
      <button class="btn" @click="editMode = !editMode">Edytuj Szczegoly</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {mapActions, mapGetters, mapMutations} from 'vuex'
import {IAlbum} from "@/store/actions";


export default Vue.extend({
  name: "AlbumDetail",
  data: () => ({
    album: {} as IAlbum,
    editMode: false,
    sent: false
  }),
  mounted() {
    this.album = this.getCurrentAlbumFromState()
  },
  computed: {
    ...mapGetters(
      ['getAlbums']
    ),
  },
  methods: {
    ...mapActions([
        'fetchAlbums',
      ]
    ),
    ...mapMutations([
      'UPDATE_ALBUM'
    ]),
    getCurrentAlbumFromState(): IAlbum {
      const currentId: number = parseInt(this.$route.params.id)
      const currentAlbum: IAlbum = this.getAlbums.find((album: IAlbum) => album.id === currentId)
      return {...currentAlbum, images: [...currentAlbum.images]}
    },
    getAlbumImage(index: number): string {
      return this.album.images[index]
    },
    saveAlbumChanges(): void {
      this.UPDATE_ALBUM(this.album)
      this.editMode = !this.editMode
      this.submit()
    },
    submit(): void {
      this.sent = true;
      setTimeout(() => {
        this.sent = false;
      }, 5000);
    },
    revertToOriginalState(): void {
      this.album = this.getCurrentAlbumFromState()
      this.editMode = false
    },
  },
})

</script>

<style lang="scss" scoped>

.container {
  .edit-detail {
    width: 100%;
    .album-title {
      margin: 30px 0 8px 0;
      font-weight: 600;
      font-size: 16px;
    }
  }

  .edit-title-disabled {
    height: 50px;
    width: 90%;
    background-color: rgba(255, 255, 255, 0.07);
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
    margin: 0 0 16px 0;
  }

  .btn {
    margin: 10px 5px 0 0;
    padding: 12px 24px;
    border-radius: 5px;
    border: none;
    background-color: rgba(10, 59, 51, 0.9);
    color: #44e1d1;
  }
}

</style>
