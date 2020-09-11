<template>
<div>
    <v-btn large class="mx-2" @click.stop="dialog = true">Click</v-btn>
     <v-dialog v-model="dialog" width="35%" overlay-opacity="0.9" overlay-color="white">
        <v-card height="100%">
          <v-row  align="center" justify="center" class="ma-0">
            <v-col cols="12" align="center">
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-icon @click="dialog = false" class="ma-2">mdi-close</v-icon>
                  </v-card-actions>
                  <h3 class="text-h4" >Welcome Back.</h3>
                  <v-card-text class="py-15">
                    <v-col cols="8" lg="7">
                      <v-btn outlined large color="grey darken-1" class="my-3"><v-icon left color="">{{ icons.mdiGoogle }}</v-icon> Sign in with Google</v-btn>
                      <v-btn outlined large color="grey darken-1" class="my-3"><v-icon left>{{ icons.mdiGithub }}</v-icon> Sign in with Github</v-btn>
                      <v-btn outlined large color="grey darken-1" class="my-3"><v-icon left>{{ icons.mdiEmail }}</v-icon> Sign in with email</v-btn>
                      <div class="mt-15 text-body-1">
                        <span>
                          No account ?
                          <span class="primary--text">Create one.</span>
                        </span>
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
import { mdiGoogle, mdiGithub, mdiEmail } from '@mdi/js'

export default {
  name: 'AuthenticationDialog',
  data () {
    return {
      icons: {
        mdiGoogle,
        mdiGithub,
        mdiEmail
      },
      dialog: false
    }
  }
}
</script>
