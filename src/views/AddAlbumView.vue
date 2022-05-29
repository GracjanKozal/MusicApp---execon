<template>
  <AddAlbum />
</template>

<script lang="ts">
import Vue from 'vue'
import AddAlbum from "@/components/AddAlbum/AddAlbum.vue";


export default Vue.extend({
  name: 'AddAlbumView',
  components: {
    AddAlbum,
  }
})
</script>
