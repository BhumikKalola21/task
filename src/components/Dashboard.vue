<template>
  <h2>Welcome {{ userData.userName }}</h2>
</template>

<script>
export default {
  computed: {
    userData(){
      return this.$store.getters['userData'];
    }
  }
};
</script>

