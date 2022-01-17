<template>
  <div id="app">
    <Modal :isModalOpen="show" @closeModal="closeModal">
      <div class="contents">modal contents</div>
    </Modal>
    <Button @click="openModal">
      버튼
    </Button>
  </div>
</template>

<script>
import Modal from './components/Modal.vue'
import Button from './components/Button.vue'

export default {
  name: 'App',
  components: {
    Modal,
    Button,
  },
  data() {
    return {
      show: false,
    }
  },
  methods: {
    openModal() {
      this.show = true;
    },
    closeModal() {
      this.show = false;
    }
  }
}
</script>

<style>
#app {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.button {
  border-radius: 5px;
  margin: 0 auto;
}
</style>