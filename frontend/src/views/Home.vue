<template>
  <v-container class="home">
    <NavBar
      :src="navBar.src"
      :alt="navBar.alt"
      :buttonsList="navBar.buttonsList"
      @open-dialog="openDialog"
    />
    <AuthenticationDialog
      :isOpen="dialog.isOpen"
      :template="dialog.template"
      :templatesList="dialog.templatesList"
      @close-dialog="dialog.isOpen = false"
    />
    <v-row
      align="center"
      justify="center"
      style="height:82vh"
    >
      <v-col
        align="center"
        xs="10" sm="8" lg="6"
      >
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
    <Footer
      :value="footer.value"
      :attrs="footer.attrs"
    />
  </v-container>
</template>

<script>
import { mdiFacebook, mdiGoogle, mdiEmail } from '@mdi/js'
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
        buttonsList: {
          signInBtn: {
            name: 'signIn',
            value: 'Sign in',
            attrs: {
              text: true,
              large: true,
              class: 'mx-2'
            }
          },
          signUpBtn: {
            name: 'signUp',
            value: 'Get Started',
            attrs: {
              large: true,
              color: 'info'
            }
          }
        }
      },
      dialog: {
        isOpen: false,
        template: {
          name: '',
          buttonsList: {
            google: {
              name: 'google',
              value: 'Google',
              icon: mdiGoogle
            },
            facebook: {
              name: 'facebook',
              value: 'Facebook',
              icon: mdiFacebook
            },
            email: {
              name: 'email',
              value: 'Email',
              icon: mdiEmail
            }
          },
          buttonsAttrs: {
            outlined: true,
            large: true,
            color: 'grey darken-1',
            class: 'my-3'
          }
        },
        templatesList: {
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
      },
      footer: {
        value: 'Copyright © 2020 Mindset. Tous droits réservés.',
        attrs: {
          absolute: true,
          color: 'white'
        }
      }
    }
  },
  methods: {
    openDialog (payload) {
      this.dialog.isOpen = true
      this.dialog.template.name = payload.name
    }
  }
}
</script>
