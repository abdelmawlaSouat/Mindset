<template>
  <v-toolbar flat>
    <v-row align="center" justify="center" justify-sm="space-around">
      <v-toolbar-title>
        <v-img
          :src="require('@/assets/' + src)"
          :alt="alt"
          width="200"
        ></v-img>
      </v-toolbar-title>
      <div>
        <v-btn
          v-for="(button, idx) in buttonsList"
          :key="idx"
          v-bind="button.attrs"
          v-show="!$vuetify.breakpoint.xsOnly"
          @click="openDialog(button)"
        >
          {{ button.value }}
        </v-btn>
      </div>
    </v-row>
  </v-toolbar>
</template>

<script>

export default {
  name: 'AuthenticationNav',
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    }
  },
  data () {
    return {
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
    }
  },
  methods: {
    openDialog (button) {
      this.$store.state.dialog.isOpen = true
      this.$store.state.dialog.authenticationType = button.name
    }
  }
}
</script>
