<template>
  <SessionNav
    v-if="this.$store.state.authenticated"
    :src="logo.src"
    :alt="logo.alt"
  />
  <AuthenticationNav
    v-else
    :src="logo.src"
    :alt="logo.alt"
  />
</template>

<script>
import AuthenticationNav from './AuthenticationNav'
import SessionNav from './session-nav/SessionNav'

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
