<template>
  <v-container class="home">
    <AuthenticationPage v-if="!this.$store.state.authenticated" />
    <ArticlesPage v-else />
  </v-container>
</template>

<script>
import AuthenticationPage from './AuthenticationPage'
import ArticlesPage from './ArticlesPage'

export default {
  name: 'Home',
  components: {
    ArticlesPage,
    AuthenticationPage
  }
}
</script>
