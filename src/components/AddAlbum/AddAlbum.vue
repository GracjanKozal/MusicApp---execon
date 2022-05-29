<template>
  <div class="addAlbum">
    <h2 class="header-title">Dodaj Album</h2>
    <div class="notice notice-success" v-if="sent"><span class="alert">Dodano nowy album</span></div>
    <TextInput @onChange="handleTitle($event)" :title="'Dodaj Tytuł'" :placeholder="'Wpisz tytuł'"/>
    <TextInput @onChange="handleInputValue($event, index)" key="index"
                 :title="'Dodaj Zdjęcie'"
                 :placeholder="'Wpisz adres url'" v-for="(input, index) in albumImages"></TextInput>
    <div class="add-album">
      <div class="addAlbum-btn">
        <button class="btn-add" @click.prevent="addNewInputImage"><i class="fas fa-plus"></i> Dodaj
          kolejne zdjęcie
        </button>
      </div>
      <div class="addAlbum-btn">
        <button class="btn-add" @click.prevent="addNewAlbum">Dodaj !</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import Vue from 'vue'
import {mapGetters, mapMutations} from "vuex";
import AddToFavouriteButton from '../AddToFavouritesButton/AddToFavouritesButton.vue';
import TextInput from "@/components/TextInput/TextInput.vue";

export default Vue.extend({
  name: 'AddAlbum',
  data: () => ({
    albumTitle: '',
    albumImages: [] as string[],
    sent: false
  }),
  components: {
    AddToFavouriteButton,
    TextInput,
  },
  computed: {
    ...mapGetters([
      "getAlbums"
    ]),
  },
  methods: {
    ...mapMutations([
      "CREATE_ALBUM"
    ]),
    handleInputValue(inputValue: string, index: number) {
      this.albumImages[index] = inputValue
    },
    handleTitle(title: string) {
      this.albumTitle = title
    },
    addNewInputImage() {
      this.albumImages.push('')
    },
    addNewAlbum(): void {
      this.CREATE_ALBUM({title: this.albumTitle, images: this.albumImages}),
      this.submit()
    },
    submit(): void {
      this.sent = true;
      setTimeout(() => {
        this.sent = false;
      }, 5000);
    }
  }
})

</script>

<style lang="scss" scoped>
.addAlbum {
  .album-title {
    margin-top: 30px;
    margin-bottom: 0;
    font-weight: 600;
    font-size: 16px;
  }
  .input-wrapper {
    label {
      width: 100%;
      margin-top: 30px;
      margin-bottom: 0;
      font-weight: 600;
      font-size: 16px;
    }

    input {
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

      &::placeholder {
        color: white;
      }
    }
  }

  .btn-add {
    padding: 12px 24px;
    border-radius: 5px;
    border: none;
    background-color: rgba(10, 59, 51, 0.9);
    color: #44e1d1;
  }

  .addAlbum-btn {
    margin-top: 14px;
  }

  .input-wrapper {
    margin-top: 10px;
  }
}
</style>
