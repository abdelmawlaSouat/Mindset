<template>
  <v-footer absolute color="white">
    <v-row justify="center">
      <span class="py-5 text-center text-caption">
        {{ text }}
      </span>
    </v-row>
    </v-footer>
</template>

<script>
export default {
  name: 'AuthenticationFooter',
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>
