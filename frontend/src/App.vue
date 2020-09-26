<template>
  <v-app>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
    //
  },

  data: () => ({
    //
  }),
  methods: {
    // async secureRedirection () {
    //   await this.$store.dispatch('userAuth')
    // }
  },
  mounted () {
    this.$store.dispatch('userAuth').then(() => {
      if (this.$store.state.authenticated) {
        this.$router.push('session')
      }
    }).catch(err => console.log(err))
    // this.secureRedirection().then(() => {
    //   if (this.$store.state.authenticated) {
    //     this.$router.push('session')
    //   }
    // })
    // console.log(this.$store.state.authenticated)
  }
}
</script>
