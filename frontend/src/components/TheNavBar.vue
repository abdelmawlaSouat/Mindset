<template>
  <SessionNav v-if="this.$store.state.authenticated" />
  <AuthenticationNav
    v-else
    :src="logo.src"
    :alt="logo.alt"
  />
</template>

<script>
import AuthenticationNav from './authentication/AuthenticationNav'
import SessionNav from './SessionNav'

export default {
  name: 'TheNavBar',
  components: {
    AuthenticationNav,
    SessionNav
  },
  data () {
    return {
      logo: {
        src: 'full-logo.png',
        alt: 'Mindset Logo'
      }
    }
  }
}
</script>
