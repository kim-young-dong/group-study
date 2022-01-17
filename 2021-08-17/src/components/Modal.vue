<template>
  <div v-show="isModalOpen" id="modal">
    <slot></slot>
    <Button @click="closeModal">
      닫기
    </Button>
  </div>
</template>

<script>
import Button from './Button.vue'
export default {
  props: {
    isModalOpen: Boolean,
  },
  components: {
    Button
  },
  methods: {
    closeModal() {
      this.$emit('closeModal');
    }
  }
}
</script>

<style scoped>
#modal {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0 auto;
  width: 500px;
  height: 300px;
  border: 1px solid #999;
  border-radius: 10px;
}
.contents {
  text-align: center;
}
</style>