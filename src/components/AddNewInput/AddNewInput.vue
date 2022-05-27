<template>
  <div class="input-wrapper">
    <label class="addAlbums-label">{{ title }} </label>
    <input class="addAlbums-input" type="url" :placeholder="placeholder"
           @input.lazy="handleValue" ref="myInput" >
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

export default Vue.extend({
  name: "AddNewInput",
  props: {
      title: {
        type: String as PropType<string>,
        required: true
      },
      placeholder: {
        type: String as PropType<string>,
        required: true
      }
    },
  methods: {
    handleValue(): void {
      // @ts-ignore
      this.$emit('onChange', this.$refs.myInput.value)
    }
  }
})
</script>

<style scoped>

</style>
