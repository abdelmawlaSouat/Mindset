<template>
  <v-container class="authentication">
    <AuthenticationDialog />
    <v-row align="center" justify="center" style="height:82vh">
      <v-col align="center" xs="10" sm="8" lg="6" >
        <h1 class="text-sm-h2 text-md-h1  mb-5">
          Dive deeper on topics that matter to you.
        </h1>
        <v-btn
          v-bind:x-large="!$vuetify.breakpoint.xsOnly ? true : false"
          color="info"
          class="my-5 pa-10"
          @click="openDialog({name: 'signUp'})"
        >
          Get Started
        </v-btn>
        <div class="my-10 d-flex flex-column align-center">
          <span class="text-body-1 text-lg-body-1">
            Already have a account ?
          </span>
          <v-btn
            @click="openDialog({name: 'signIn'})"
            color="primary"
            text
          >
            Sign in.
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AuthenticationDialog from '@/components/dialog/authentication-dialog/AuthenticationDialog.vue'

export default {
  name: 'Authentication',
  components: {
    AuthenticationDialog
  },
  methods: {
    openDialog (button) {
      this.$store.state.dialog.isOpen = true
      this.$store.state.dialog.authenticationType = button.name
    }
  }
}
</script>
