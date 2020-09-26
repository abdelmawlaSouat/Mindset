<template>
<div>
     <v-dialog
      v-model="isOpen"
      :width="$vuetify.breakpoint.mdAndDown ? '60%' : '35%'"
      :fullscreen="$vuetify.breakpoint.xsOnly ? true : false"
      overlay-opacity="0.9"
      overlay-color="white"
      persistent
     >
        <v-card height="100%" class="card-authentications-list" v-show="this.activeCard === 'card-authentications-list'">
          <v-row
            align="center"
            justify="center"
            class="ma-0"
          >
            <v-col
              cols="12"
              align="center">
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-icon
                      @click="emitCloseDialog"
                      class="ma-2"
                    >
                      mdi-close
                    </v-icon>
                  </v-card-actions>
                  <h3 class="text-h4">
                    {{ title }}
                  </h3>
                  <v-card-text class="px-0">
                    <v-col class="d-flex flex-column align-center">
                      <v-btn
                        v-bind="template.buttonsAttrs"
                        v-for="(button, idx) in template.buttonsList" :key="idx"
                        @click="oAuth(button.name)"
                        :style="{ width: $vuetify.breakpoint.mdAndUp ? '60%' : '100%' }"
                      >
                        <v-icon left>{{ button.icon }}</v-icon>
                        {{ templateName }} with {{ button.value  }}
                      </v-btn>
                      <div class="mt-15 text-body-1 d-flex flex-column align-center">
                        <span>{{ footerSpan }}</span>
                        <v-btn
                          @click="changeDialog"
                          color="primary"
                          text
                        >
                          {{ footerValBtn }}
                        </v-btn>
                      </div>
                    </v-col>
                  </v-card-text>
            </v-col>
          </v-row>
        </v-card>

        <v-card height="100%" class="card-email-1" v-show="this.activeCard === 'card-email-1'">
          <v-row
            align="center"
            justify="center"
            class="ma-0"
          >
            <v-col
              cols="12"
              align="center">
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-icon
                      @click="emitCloseDialog"
                      class="ma-2"
                    >
                      mdi-close
                    </v-icon>
                  </v-card-actions>
                  <h3 class="text-h4">{{ templateName }} with Email</h3>
                  <v-card-text class="px-0">
                    <v-col class="d-flex flex-column align-center">
                      <p>Enter the email address associated with your account, and we’ll send a magic link to your inbox.</p>
                      <v-form ref="form" class="mb-5" v-model="validEmail">
                        <v-text-field v-model="email" :rules="emailRules" label="E-mail"></v-text-field>
                        <v-btn dark color="info" class="mt-4" @click="sendEmail">Validate</v-btn>
                      </v-form>
                      <v-btn dark text color="#212121" class="text-caption" @click="activeCard = 'card-authentications-list'">
                        <v-icon left small >mdi-arrow-left</v-icon> All sign in options
                      </v-btn>
                    </v-col>
                  </v-card-text>
            </v-col>
          </v-row>
        </v-card>

        <v-card height="100%" class="card-email-2" v-show="this.activeCard === 'card-email-2'">
          <v-row
            align="center"
            justify="center"
            class="ma-0"
          >
            <v-col
              cols="12"
              align="center">
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-icon
                      @click="emitCloseDialog"
                      class="ma-2"
                    >
                      mdi-close
                    </v-icon>
                  </v-card-actions>
                  <v-icon size="120" color="#616161" class="mb-3">{{ this.emailIcon }}</v-icon>
                  <h3 class="text-h4">Check your inbox</h3>
                  <v-card-text class="px-0">
                    <v-col class="d-flex flex-column align-center">
                      <p class="text-body-1">We just emailed a magic link to {{ email }}. Click the link to sign in.</p>
                       <v-btn dark color="info" class="mt-4" @click="emitCloseDialog">OK</v-btn>
                    </v-col>
                  </v-card-text>
            </v-col>
          </v-row>
        </v-card>
    </v-dialog>
</div>
</template>

<script>
import { mdiEmailCheckOutline } from '@mdi/js'

export default {
  name: 'AuthenticationDialog',
  props: {
    isOpen: {
      type: Boolean,
      required: true
    },
    template: {
      type: Object,
      default: () => {
        return {}
      }
    },
    templatesList: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {
      activeCard: 'card-authentications-list',
      validEmail: true,
      emailIcon: mdiEmailCheckOutline,
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ]
    }
  },
  computed: {
    title () {
      return this.templatesList[this.template.name] ? this.templatesList[this.template.name].title : ''
    },
    templateName () {
      return this.templatesList[this.template.name] ? this.templatesList[this.template.name].name : ''
    },
    footerSpan () {
      return this.templatesList[this.template.name] ? this.templatesList[this.template.name].footerDiv.span : ''
    },
    footerValBtn () {
      return this.templatesList[this.template.name] ? this.templatesList[this.template.name].footerDiv.btnVal : ''
    }
  },
  methods: {
    emitCloseDialog () {
      this.$emit('close-dialog', {
        isOpen: this.openDialog
      })
      this.activeCard = 'card-authentications-list'
      this.validEmail = true
      this.email = ''
    },
    changeDialog () {
      this.template.name = (this.template.name === 'signUp') ? 'signIn' : 'signUp'
    },
    oAuth (name) {
      if (name === 'email') {
        console.log(`Authentication with ${name}`)
        this.activeCard = 'card-email-1'
      } else {
        window.location.href = `http://localhost:3000/api/auth/${name}`
      }
    },
    sendEmail () {
      this.$refs.form.validate()
      if (this.email && this.validEmail) {
        this.activeCard = 'card-email-2'
        this.axios.post('http://localhost:3000/api/auth/email',
          { email: this.email }
        ).then(res => console.log(res))
          .catch((err) => console.log(err))
      }
    }
  }
}
</script>
