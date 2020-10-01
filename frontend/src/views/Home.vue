<template>
  <v-container class="home">
    <Authentication v-if="!this.$store.state.authenticated" />
    <Articles v-else />
  </v-container>
</template>

<script>
import Authentication from './Authentication'
import Articles from './Articles'

export default {
  name: 'Home',
  components: {
    Articles,
    Authentication
  }
}
</script>
