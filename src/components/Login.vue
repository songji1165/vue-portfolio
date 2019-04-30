Skip to content Search or jump to… Pull requests Issues Marketplace Explore
@songji1165 Code Issues 1 Pull requests 0 Projects 0 Wiki Pulse Community
lecture-vue-trello/src/components/Login.vue @jeonghwan-kim jeonghwan-kim Login
onSumbit() 구현 9272f7c on 6 Aug 2018 68 lines (63 sloc) 1.43 KB

<template>
  <div class="login">
    <h2>Log in to Trello</h2>
    <form @submit.prevent="onSubmit">
      <div>
        <label for="email">Email</label>
        <input
          class="form-control"
          type="text"
          name="email"
          v-model="email"
          autofocus
          placeholder="e.g., test@test.com"
        />
      </div>
      <div>
        <label for="password">Passwrod</label>
        <input
          class="form-control"
          type="password"
          v-model="password"
          placeholder="123123"
        />
      </div>
      <button
        class="btn"
        :class="{'btn-success': !invalidForm}"
        type="submit"
        :disabled="invalidForm"
      >
        Log In
      </button>
    </form>
    <p class="error" v-if="error">{{ error }}</p>
  </div>
</template>

<script>
  import { auth, setAuthInHeader } from "../api";
  export default {
    data() {
      return {
        email: "",
        password: "",
        error: "",
        rPath: ""
      };
    },
    computed: {
      invalidForm() {
        return !this.email || !this.password;
      }
    },
    created() {
      this.rPath = this.$route.query.rPath || "/";
    },
    methods: {
      onSubmit() {
        auth
          .login(this.email, this.password)
          .then(data => {
            localStorage.setItem("token", data.accessToken);
            setAuthInHeader(data.accessToken);
            this.$router.push(this.rPath);
          })
          .catch(err => {
            this.error = err.data.error;
          });
      }
    }
  };
</script>

<style>
  .login {
    width: 400px;
    margin: 0 auto;
  }
  .error {
    color: #f00;
  }
</style>
© 2019 GitHub, Inc. Terms Privacy Security Status Help Contact GitHub Pricing
API Training Blog About
