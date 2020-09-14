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
          v-for="(button, idx) in buttonsList" :key="idx"
          v-bind="button.attrs"
          v-show="!$vuetify.breakpoint.xsOnly"
          @click="emitOpenDialog(button)"
        >
          {{ button.value }}
        </v-btn>
      </div>
    </v-row>
  </v-toolbar>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    },
    buttonsList: {
      type: Object,
      required: true
    }
  },
  methods: {
    emitOpenDialog (button) {
      this.$emit('open-dialog', {
        name: button.name
      })
    }
  }
}
</script>
