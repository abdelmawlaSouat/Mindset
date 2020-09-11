<template>
  <v-footer v-bind="attrs">
      <v-row justify="center" >
          <span class="py-5">{{ value }}</span>
      </v-row>
    </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    value: {
      type: String,
      required: true
    },
    attrs: Object
  }
}
</script>
