<template>
      <AlbumList />
</template>

<script lang="ts">
import Vue from 'vue'
import AlbumList  from '../components/AlbumList/AlbumList.vue'


export default Vue.extend({
    name: 'HomeView',
    components: {
      AlbumList,
    }
})
</script>

