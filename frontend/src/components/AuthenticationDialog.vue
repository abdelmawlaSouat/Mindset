<template>
<div>
     <v-dialog
      v-model="isOpen"
      :width="this.$vuetify.breakpoint.mdAndDown ? '60%' : '35%'"
      :fullscreen="$vuetify.breakpoint.xsOnly ? true : false"
      overlay-opacity="0.9"
      overlay-color="white"
      persistent
     >
        <v-card height="100%">
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
                  <v-card-text class="py-15">
                    <v-col
                      class="d-flex flex-column align-center"
                      cols="8" 
                      lg="7" 
                    >
                      <v-btn
                        v-bind="template.buttonsAttrs"
                        v-for="(button, idx) in template.buttonsList" :key="idx"
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
    </v-dialog>
</div>
</template>

<script>
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
    },
  },
  methods: {
    emitCloseDialog () {
      this.$emit('close-dialog', {
        isOpen: this.openDialog
      })
    },
    changeDialog () {
      this.template.name = (this.template.name === 'signUp') ? 'signIn' : 'signUp'
    }
  }
}
</script>
