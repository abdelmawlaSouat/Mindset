<template>
  <v-card height="100%" class="card-authentications-list">
    <v-row align="center" justify="center" class="ma-0">
      <v-col cols="12" align="center">

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-icon @click="closeDialog" class="ma-2"> mdi-close </v-icon>
        </v-card-actions>

        <h3 class="text-h4">{{ template.title }}</h3>

        <v-card-text class="px-0">
          <v-col class="d-flex flex-column align-center">
            <v-btn
              v-bind="buttons.attributes"
              v-for="(button, idx) in buttons.elements"
              :key="idx"
              @click="oAuth(button.name)"
              :style="{
                width: $vuetify.breakpoint.mdAndUp ? '60%' : '100%',
              }"
            >
              <v-icon left>{{ button.icon }}</v-icon>
              {{ template.name }} with {{ button.value }}
            </v-btn>
            <div class="mt-15 text-body-1 d-flex flex-column align-center">
              <span>{{ template.footerDiv.span }}</span>
              <v-btn
                @click="changeAuthenticationType"
                color="primary"
                text
              >
                {{ template.footerDiv.btnVal }}
              </v-btn>
            </div>
          </v-col>
        </v-card-text>

      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import {
  mdiFacebook,
  mdiGoogle,
  mdiEmail
} from '@mdi/js'

export default {
  name: 'AuthenticationListCard',
  props: {
    templates: {
      type: Object
    }
  },
  data () {
    return {
      buttons: {
        elements: {
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
        attributes: {
          outlined: true,
          large: true,
          color: 'grey darken-1',
          class: 'my-3'
        }
      }
    }
  },
  computed: {
    template () {
      const template = this.templates[this.$store.state.dialog.authenticationType]
      if (template) {
        return template
      }
      return { name: '', title: '', footerDiv: { span: '', btnVal: '' } }
    }
  },
  methods: {
    closeDialog () {
      this.$store.state.dialog.isOpen = false
      this.$store.state.dialog.authenticationType = ''
      this.$store.state.dialog.cardName = 'card-authentications-list'
    },
    changeAuthenticationType () {
      this.$store.state.dialog.authenticationType = (this.$store.state.dialog.authenticationType === 'signUp') ? 'signIn' : 'signUp'
    },
    oAuth (name) {
      if (name === 'email') {
        this.$store.state.dialog.cardName = 'card-email-1'
      } else {
        window.location.href = `http://localhost:3000/api/auth/${name}`
      }
    }
  }
}
</script>
