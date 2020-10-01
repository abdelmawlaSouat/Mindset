<template>
  <v-footer class="d-flex flex-column align-center pt-5" dark>
    <v-img :src="require('@/assets/' + imgSrc)" width="250"></v-img>
    <span class="py-5 text-center text-caption"> {{ text }} </span>
  </v-footer>
</template>

<script>
export default {
  name: 'SessionFooter',
  props: {
    text: {
      type: String,
      required: true
    },
    imgSrc: {
      type: String,
      required: true
    }
  }
}
</script>
