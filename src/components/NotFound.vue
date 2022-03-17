<template>
  <section class="container">
    <h2>Page not found</h2>
    <div>
      This page could not be found -
      <router-link to="/register">SignUp</router-link>
      <p>OR</p>
      <router-link to="/login">Login</router-link>
    </div>
  </section>
</template>
<style scoped>
.container {
  border: 1rem solid black;
  margin-top: 10rem;
  font-size: 1.5rem;
}
h2,
div {
  text-align: center;
  padding: 5px;
}
</style>
