<template>
  <div class="addAlbums">
    <h2 class="header-title">Dodaj Album</h2>
    <AddNewInput @onChange="handleTitle($event)" :title="'Dodaj Tytuł'" :placeholder="'Dodaj tytuł'"/>
    <!--    <AddNewInput @onChange="handleInputValue" :title="'Dodaj Zdjęcie'" :placeholder="'Dodaj adres url'"/>-->
    <AddNewInput @onChange="handleInputValue($event, index)"
                 :title="'Dodaj Zdjęcie'"
                 :placeholder="'Dodaj adres url'" v-for="(input, index) in albumImages"></AddNewInput>
    <div class="add-albums">
      <div class="addAlbums-btn">
        <button class="btn-add" @click.prevent="addNewInputImage"><i class="fas fa-plus"></i> Dodaj
          kolejne zdjęcie
        </button>
      </div>
      <div class="addAlbums-btn">
        <button class="btn-add" @click.prevent="addNewAlbum">Dodaj !</button>
      </div>
    </div>
  </div>


</template>

<script lang="ts">

import Vue from 'vue'
import {mapGetters, mapMutations} from "vuex";
import AddToFavouriteButton from '../AddToFavouritesButton/AddToFavouritesButton.vue';
import AddNewInput from "@/components/AddNewInput/AddNewInput.vue";


export default Vue.extend({
  name: 'Newalbums',
  data: () => ({
    albumTitle: '',
    albumImages: [] as string[],
  }),
  components: {
    AddToFavouriteButton,
    AddNewInput,
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
      this.CREATE_ALBUM({title: this.albumTitle, images: this.albumImages})
    }
  }
})

</script>

<style lang="scss" scoped>
.addAlbums {
  .header-title {
    margin-bottom: 30px;
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

  .addAlbums-btn {
    margin-top: 14px;
  }

  .input-wrapper {
    margin-top: 10px;
  }
}
</style>
