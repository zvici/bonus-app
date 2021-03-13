<template>
  <div modal="true">
    <div>
      <div v-if="visible" :data-modal="name" class="modal">
        <div
          aria-modal="true"
          data-reach-dialog-content="true"
          tabindex="-1"
          class="modal__mask"
        >
          <div class="modal__body">
            <slot :payload="payload" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vmodal from './handle'
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      payload: null,
      visible: false
    }
  },
  beforeMount () {
    // open event
    Vmodal.EventBus.$on('open', (params) => {
      if (this.name === params.name) {
        this.open(params)
      }
    })
    // close event
    Vmodal.EventBus.$on('close', (params) => {
      if (this.name === params.name) {
        this.close(params)
      }
    })
  },
  methods: {
    open (params) {
      this.visible = true
      // to do somthing
      this.payload = params.payload
    },
    close () {
      this.visible = false
      // to do somthing
    }
  }
}
</script>
<style scoped lang="scss">
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  max-width: unset;
  height: 100vh;
  overflow-y: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(18, 18, 18, 0.8);
  z-index: 999;
  padding-top: 10px;
  padding-bottom: 10px;
  &__body {
    background: #fff;
    min-width: 500px;
    min-height: 200px;
    padding: 1.5rem;
    border-radius: 5px;
  }
}
</style>
