<template>
  <div class="input-wrapper">
    <label class="album-title addAlbums-label">{{ title }} </label>
    <input class="edit addAlbums-input" type="url" :placeholder="placeholder"
           @input.lazy="handleValue" ref="myInput" >
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

export default Vue.extend({
  name: "TextInput",
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

<style lang="scss" scoped>
.album-title {
  margin-top: 30px;
  margin-bottom: 0;
  font-weight: 600;
  font-size: 16px;
  display: block;
}
.edit {
  height: 50px;
  width: 90%;
  background-color: rgba(255, 255, 255, 0.07);
  border-radius: 3px;
  padding: 0 10px;
  margin-top: 8px;
  font-size: 14px;
  font-weight: 300;
  color: white;
  &::placeholder {
    color: white;
  }
}
</style>
