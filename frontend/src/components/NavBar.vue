<template>
  <v-toolbar flat>
    <v-row align="center" justify="center" justify-sm="space-around">
      <v-toolbar-title>
        <v-img :src="require('@/assets/' + src)" :alt="alt" width="200" ></v-img>
      </v-toolbar-title>
      <div>
        <v-btn v-for="(button, idx) in btns" :key="idx" v-bind="button.props"
               v-show="!$vuetify.breakpoint.xsOnly">
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
    btns: {
      type: Object,
      required: true
    }
  }
}
</script>
