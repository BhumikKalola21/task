<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="submitForm">
      <div class="form-control">
        <label for="email">E-Mail</label>
        <input type="email" id="email" v-model.trim="email" />
      </div>
      <div class="form-control">
        <label for="password">Password</label>
        <input type="password" id="password" v-model.trim="password" />
      </div>
      <br />
      <p v-if="!formIsValid">
        Please enter a valid email and password (must be at least 6 characters
        long).
      </p>
      <button>Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      formIsValid: true,
      mode: "login",
      error: null,
    };
  },
  methods: {
    submitForm() {
      this.formIsValid = true;
      if (
        this.email === "" ||
        !this.email.includes("@") ||
        this.password.length < 6
      ) {
        this.formIsValid = false;
        return;
      }
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      });
      this.email = "";
      this.password = "";
      this.isLogin = "go to Dashboard";

      this.$router.replace("/dashboard");
    },

    loginError() {
      this.error = null;
    },
  },
};
</script>

<style>
body {
  margin: 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
}
input {
  display: block;
  width: 100%;
  padding: 0.15rem;
  font: inherit;
  border: 1px solid #ccc;
}
</style>
