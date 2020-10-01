<template>
  <div>
    <v-dialog
      v-model="this.$store.state.dialog.isOpen"
      :width="$vuetify.breakpoint.mdAndDown ? '60%' : '35%'"
      :fullscreen="$vuetify.breakpoint.xsOnly ? true : false"
      overlay-opacity="0.9"
      overlay-color="white"
      persistent
    >
      <AuthenticationListCard
        :templates="authenticationsListTemplates"
        v-show="this.$store.state.dialog.cardName === 'card-authentications-list'"
      />
      <AuthenticationEmailCardOne
        v-show="this.$store.state.dialog.cardName === 'card-email-1'"
      />
      <AuthenticationEmailCardTwo
        v-show="this.$store.state.dialog.cardName === 'card-email-2'"
      />
    </v-dialog>
  </div>
</template>

<script>
import AuthenticationListCard from './AuthenticationListCard'
import AuthenticationEmailCardOne from './AuthenticationEmailCardOne'
import AuthenticationEmailCardTwo from './AuthenticationEmailCardTwo'

export default {
  name: 'AuthenticationDialog',
  components: {
    AuthenticationListCard,
    AuthenticationEmailCardOne,
    AuthenticationEmailCardTwo
  },
  data () {
    return {
      authenticationsListTemplates: {
        signIn: {
          name: 'Sign in',
          title: 'Welcome Back.',
          footerDiv: {
            span: 'No Account ?',
            btnVal: 'Create One.'
          }
        },
        signUp: {
          name: 'Sign up',
          title: 'Join Mindset.',
          footerDiv: {
            span: 'Already have an account ?',
            btnVal: 'Sign In.'
          }
        }
      }
    }
  }
}
</script>
