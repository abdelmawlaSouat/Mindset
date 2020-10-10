<template>
  <div class="profil py-4 d-flex flex-column align-center">
    <h1>Profil PAGE</h1>
    <v-img :src='this.$store.state.user.avatar' width="20%"></v-img>
    <h2>Hello {{ this.$store.state.user.displayName }}</h2>
    <span>email : {{ this.$store.state.user.email }}</span>
  </div>
</template>

<script>
export default {
  name: 'Profile'
}
</script>
