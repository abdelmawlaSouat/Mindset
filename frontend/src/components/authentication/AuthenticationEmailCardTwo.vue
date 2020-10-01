<template>
  <v-card
    height="100%"
    class="card-email-2"
  >
    <v-row align="center" justify="center" class="ma-0">
      <v-col cols="12" align="center">

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-icon @click="closeDialog" class="ma-2"> mdi-close </v-icon>
        </v-card-actions>

        <v-icon size="120" color="#616161" class="mb-3">
          {{ this.emailIcon }}
        </v-icon>

        <h3 class="text-h4">Check your inbox</h3>

        <v-card-text class="px-0">
          <v-col class="d-flex flex-column align-center">
            <p class="text-body-1">
              We just emailed a magic link to {{ email }}. Click the link to
              sign in.
            </p>
            <v-btn
              dark
              color="info"
              class="mt-4"
              @click="closeDialog"
            >
              OK
            </v-btn>
          </v-col>
        </v-card-text>

      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { mdiEmailCheckOutline } from '@mdi/js'

export default {
  name: 'AuthenticationEmailCardTwo',
  data () {
    return {
      emailIcon: mdiEmailCheckOutline
    }
  },
  computed: {
    email () {
      return this.$store.state.dialog.userEmail
    }
  },
  methods: {
    closeDialog () {
      this.$store.state.dialog.isOpen = false
      this.$store.state.dialog.authenticationType = ''
      this.$store.state.dialog.cardName = 'card-authentications-list'
    }
  }
}
</script>
