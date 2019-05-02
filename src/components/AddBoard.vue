<template>
  <Modal>
    <div slot="header">
      <h2>
        Create new board
        <a
          href=""
          class="modal-default-button"
          @click.prevent="SET_IS_ADD_BOARD(false)"
          >&times;</a
        >
      </h2>
    </div>
    <div slot="body">
      <form id="add-board-form" @submit.prevent="addBoard">
        <input class="form-control" type="text" v-model="input" ref="input" />
      </form>
    </div>
    <div slot="footer">
      <button
        class="btn"
        :class="{'btn-success': valid}"
        type="submit"
        form="add-board-form"
        :disabled="!valid"
      >
        Create Board
      </button>
    </div>
  </Modal>
</template>

<script>
  import Modal from "./Modal.vue";
  import { mapState, mapMutations } from "vuex";
  export default {
    components: {
      Modal
    },
    data() {
      return {
        input: "",
        valid: false
      };
    },
    watch: {
      input(v) {
        // input을 감시하다가 0보다 클 경우 true로 변환
        this.valid = v.trim().length > 0;
      }
    },
    mounted() {
      this.$refs.input.focus();
    },
    methods: {
      ...mapMutations(["SET_IS_ADD_BOARD"]),
      // close() {
      //   this.$emit("close");
      // },
      addBoard() {
        // this.$emit("close");
        this.SET_IS_ADD_BOARD(false);
        this.$emit("submit", this.input);
      }
    }
  };
</script>

<style></style>
