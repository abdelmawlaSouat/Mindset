<template>
  <div class="profil">
    <h1>SESSION PAGE</h1>
    <v-img :src='this.$store.state.user.picture' width="20%"></v-img>
    <h2>Hello {{ this.$store.state.user.displayName }}</h2>
    <span>email : {{ this.$store.state.user.email }}</span>
  </div>
</template>

<script>
export default {
  name: 'Profile'
}
</script>
