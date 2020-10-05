<template>
  <v-container class="home">
    <Authentication v-if="!this.$store.state.authenticated" />
    <Articles v-else />
  </v-container>
</template>

<script>
import Authentication from './AuthenticationPage'
import Articles from './ArticlesPage'

export default {
  name: 'Home',
  components: {
    Articles,
    Authentication
  }
}
</script>
