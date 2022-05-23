<template>
      <AlbumList />
</template>

<script lang="ts">
import Vue from 'vue'
import AlbumList  from '../components/AlbumList.vue'


export default Vue.extend({
    name: 'Home',
    components: {
      AlbumList,
    }
})
</script>

