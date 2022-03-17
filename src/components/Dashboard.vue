<template>
  <h2>Welcome {{ userData.userName }}</h2>
</template>

<script>
export default {
  computed: {
    userData() {
      return this.$store.getters["userData"];
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
}
input {
  display: block;
  width: 100%;
  padding: 0.15rem;
  font: inherit;
  border: 1px solid #ccc;
}
</style>
