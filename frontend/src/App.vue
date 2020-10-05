<template>
  <v-app>
    <v-main>
      <TheNavBar />
      <div style="min-height: 74vh">
        <router-view></router-view>
      </div>
      <TheFooter />
    </v-main>
  </v-app>
</template>

<script>
import TheNavBar from '@/components/navbar/TheNavBar.vue'
import TheFooter from '@/components/footer/TheFooter.vue'

export default {
  name: 'App',
  components: {
    TheNavBar,
    TheFooter
  },
  mounted () {
    this.$store.dispatch('userAuth')
  }
}
</script>
