<template>
  <v-toolbar flat>
    <v-row align="center" justify="center" justify-sm="space-around">
      <v-toolbar-title>
        <v-img src="../assets/full-logo.png" alt="Logo" width="200" ></v-img>
      </v-toolbar-title>
      <div>
        <v-btn v-show="!$vuetify.breakpoint.xsOnly" text large>Sign in</v-btn>
        <v-btn v-show="!$vuetify.breakpoint.xsOnly" large color="info">Get Started</v-btn>
      </div>
    </v-row>
  </v-toolbar>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style lang="css">

</style>
