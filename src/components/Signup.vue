<template>
  <div>
    <h2>SignUp</h2>
    <form @submit.prevent="submitForm">
      <div class="form-control">
        <label for="userName">Name</label>
        <input typ="text" id="userName" v-model.trim="userName" required />
      </div>
      <div class="form-control">
        <label for="email">E-Mail</label>
        <input type="email" id="email" v-model.trim="email" />
      </div>
      <div class="form-control">
        <label for="password">Password</label>
        <input type="password" id="password" v-model.trim="password" />
        <p v-if="!!invalidPassword">{{ invalidPassword }}</p>
      </div>
      <div class="form-control">
        <label for="confirmpassword">Confirm Password</label>
        <input
          type="password"
          id="confirmpassword"
          v-model.trim="confirmPassword"
        />
      </div>
      <br />
      <button>SignUp</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
      invalidPassword: "",
      formIsValid: true,
      error: null,
    };
  },

  methods: {
    submitForm() {
      this.formIsValid = true;

      if (this.password.length < 6) {
        this.invalidPassword = "Password Length must be 6 letters or more:)";
      }
      if (
        this.userName === "" ||
        !this.email.includes("@") ||
        this.password.length < 6 ||
        !this.confirmPasswordValidate
      ) {
        this.formIsValid = false;
        return;
      }

      this.$store.dispatch("registration", {
        userName: this.userName,
        email: this.email,
        password: this.password,
      });

      this.userName = "";
      this.email = "";
      this.password = "";
      this.confirmpassword = "";
      this.error = "go to login";
      this.$router.replace("/login");
    },
    handleError() {
      this.error = null;
    },
  },
  computed: {
    confirmPasswordValidate() {
      if (this.password != this.confirmPassword) {
        return false;
      }
      return true;
    },
  },
};
</script>

<style scoped>
body {
  margin: 0;
}
p {
  color: red;
}
label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}
input {
  display: block;
  width: 50%;
  padding: 0.15rem;
  font: inherit;
  border: 1px solid #ccc;
}
</style>
