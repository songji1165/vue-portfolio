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
      //$route를 통해 라우터정보 접속
      // .query로 쿼리문자열 가져옴
      // 아무것도 없을 땐 '/' 기본 경로 설정
      this.rPath = this.$route.query.rPath || "/";
    },
    methods: {
      onSubmit() {
        auth
          .login(this.email, this.password)
          .then(data => {
            // console.log(data);
            localStorage.setItem("token", data.accessToken);
            setAuthInHeader(data.accessToken);
            this.$router.push(this.rPath); //this.rPath로 리다이렉트
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
