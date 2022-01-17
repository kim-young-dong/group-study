<template>
  <div @click="click" class="button">
    <slot></slot>
  </div>
</template>

<script>
export default {
  methods: {
    click() {
      this.$emit('click');
    }
  }
}
</script>

<style scoped>
div {
  width: 100px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border: 1px solid #999;
}
</style>