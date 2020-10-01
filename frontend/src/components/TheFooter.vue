<template>
  <div class="footer">
    <SessionFooter
      v-if="!this.$store.state.authenticated"
      :imgSrc="img"
      :text="text"
    />
    <AuthenticationFooter v-else :text="text" />
  </div>
</template>

<script>
import AuthenticationFooter from './AuthenticationFooter'
import SessionFooter from './SessionFooter'

export default {
  name: 'TheFooter',
  components: {
    AuthenticationFooter,
    SessionFooter
  },
  data () {
    return {
      text: 'Copyright © 2020 Mindset. Tous droits réservés.',
      img: 'full-white-logo.png'
    }
  }
}
</script>
