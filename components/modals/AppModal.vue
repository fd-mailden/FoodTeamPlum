<template>
  <portal :to="to">
    <div v-if="visible" class="modal-overlay" @click.self="close">
      <app-loader :loading="isLoading"/>
      <div class="modal ">
        <header class="modal-header">
          <slot name="header">
            <h2>Modal Header</h2>
          </slot>
          <button class="close-button" @click="close">
            <CloseSvg/>
          </button>
        </header>
        <section class="modal-body">
          <slot>
            Modal content goes here...
          </slot>
        </section>
        <footer class="modal-footer">
          <slot name="footer">
            <button @click="close">Close</button>
          </slot>
        </footer>
      </div>
    </div>
  </portal>
</template>

<script>
import CloseSvg from "~/components/svg/CloseSvg.vue";

export default {
  name: "AppModal",
  components: {CloseSvg},
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
    to: {
      type: String,
      required: true
    }
  },
  methods: {
    close() {
      this.$emit('close');
    },
  },
};
</script>

<style scoped lang="scss">

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal {
  background: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background: linear-gradient(239.24deg, #E6D0A5 9.27%, #BFB08C 119.52%);

  @media (max-width: $md) {
    width: 100vw;
    height: 100vh;
    overflow-y: scroll;

  }


}

.modal-header {
  color: $white;

  :deep() {
    h2 {
      font-size: 25px;
      font-weight: 500;
      line-height: 25px;
      margin-bottom: 30px;
      letter-spacing: 0.05em;
      text-align: left;
      color: $white;
      text-transform: uppercase;
    }
  }


}

.modal-header,
.modal-footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.modal-body {
  margin: 10px 0 20px 0;
  color: $white;
}

.close-button {
  background: none;
  border: none;
  cursor: pointer;
  margin-left: 10px;
}
</style>
