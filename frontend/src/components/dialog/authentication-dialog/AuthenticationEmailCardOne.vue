<template>
  <v-card height="100%" class="card-email-1" >
    <v-row align="center" justify="center" class="ma-0">
      <v-col cols="12" align="center">

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-icon @click="closeDialog" class="ma-2"> mdi-close </v-icon>
        </v-card-actions>

        <h3 class="text-h4">{{ authenticatedType }} with Email</h3>

        <v-card-text class="px-0">
          <v-col class="d-flex flex-column align-center">
            <p>
              Enter the email address associated with your account, and we’ll
              send a magic link to your inbox.
            </p>

            <v-form ref="form" class="mb-5" v-model="validEmail">
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
              ></v-text-field>
              <v-btn
                dark
                color="info"
                class="mt-4"
                @click="sendEmail"
              >Validate</v-btn
              >
            </v-form>

            <v-btn
              dark
              text
              color="#212121"
              class="text-caption"
              @click="backToPreviousCard"
            >
              <v-icon left small>mdi-arrow-left</v-icon> All sign in options
            </v-btn>
          </v-col>
        </v-card-text>

      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'AuthenticationEmailCardOne',
  data () {
    return {
      validEmail: true,
      email: '',
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ]
    }
  },
  computed: {
    authenticatedType () {
      return (this.$store.state.dialog.authenticationType === 'signUp') ? 'Sign in' : 'Sign up'
    }
  },
  methods: {
    backToPreviousCard () {
      this.$store.state.dialog.cardName = 'card-authentications-list'
    },
    closeDialog () {
      this.$store.state.dialog.isOpen = false
      this.$store.state.dialog.cardName = 'card-authentications-list'
      this.$store.state.dialog.authenticationType = ''
    },
    sendEmail () {
      this.$refs.form.validate()
      if (this.email && this.validEmail) {
        this.$store.state.dialog.cardName = 'card-email-2'
        this.$store.state.dialog.userEmail = this.email
        this.axios
          .post('http://localhost:3000/api/auth/email', { email: this.email })
          .then((res) => console.log(res))
          .catch((err) => console.log(err))
      }
    }
  }
}
</script>
