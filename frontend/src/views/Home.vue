<template>
  <v-container class="home">
    <NavBar :src="navBar.src" :alt="navBar.alt" :btns="navBar.btns"  />
    <AuthenticationDialog />
    <v-row align="center" justify="center" style="height:82vh">
      <v-col align="center" sm="12" md="8" lg="6">
        <h1 class="text-h2 text-lg-h1 mb-5">Dive deeper on topics that matter to you.</h1>
        <v-btn
          v-bind:x-large="!$vuetify.breakpoint.xsOnly ? true : false"
          color="info"
          class="my-5 pa-10"
        >Get Started</v-btn>
        <div>
          <span class="text-body-1 text-lg-body-1">
            Already have a account ?
            <span class="primary--text">Sign in.</span>
          </span>
        </div>
      </v-col>
    </v-row>
    <Footer :value="footer.value" :attrs="footer.attrs" />
  </v-container>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import AuthenticationDialog from '@/components/AuthenticationDialog.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    NavBar, AuthenticationDialog, Footer
  },
  data () {
    return {
      navBar: {
        src: 'full-logo.png',
        alt: 'Mindset Logo',
        btns: {
          signInBtn: {
            value: 'Sign in',
            props: {
              text: true,
              large: true,
              class: 'mx-2'
            }
          },
          signUpBtn: {
            value: 'Get Started',
            props: {
              large: true,
              color: 'info'
            }
          }
        }
      },
      footer: {
        value: 'Copyright © 2020 Mindset. Tous droits réservés.X',
        attrs: {
          absolute: true,
          color: 'white'
        }
      }
    }
  }
}
</script>
