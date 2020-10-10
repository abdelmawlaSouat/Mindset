<template>
  <div class="security-settings">
    <h2>Security</h2>

    <v-divider></v-divider>

    <!-- Desactivation -->
    <v-dialog
      v-model="desactivationDialog"
      persistent
      max-width="450"
      max-height="300"
    >
      <template v-slot:activator="{ on, attrs }">
        <div class="settings-subcontent">
          <div class="d-flex flex-column" style="width: 60%">
            <h3>Desactivate account</h3>
            <p class="setting-details">
              Deactivating your account will remove it from Mindset within a few
              minutes. You can sign back in anytime to reactivate your account and
              restore its content.
            </p>
          </div>
          <div class="btns-container">
            <v-btn
              small
              outlined
              color="grey"
              v-bind="attrs"
              v-on="on"
            >
              Desactivate Account
            </v-btn>
          </div>
        </div>
      </template>
      <v-card class="px-5">
        <v-card-title class="headline">
          Confirm
        </v-card-title>
        <v-card-text >Are you sure you want to desactivate your account ?</v-card-text>
        <v-card-actions class="py-4">
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="desactivationDialog = false"
          >
            Cancel
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="desactivateAccount()"
          >
            Desactivate
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Delete Account -->
    <v-dialog
      v-model="deletionDialog"
      persistent
      max-width="450"
      max-height="300"
    >
      <template v-slot:activator="{ on, attrs }">
        <div class="settings-subcontent">
          <div class="d-flex flex-column" style="width: 60%">
            <h3>Delete account</h3>
            <p class="setting-details">
              Permanently delete your account and all of your content.
            </p>
          </div>

          <div class="btns-container">
            <v-btn
              small
              outlined
              color="grey"
              v-bind="attrs"
              v-on="on"
            >
              Delete Account
            </v-btn>
          </div>
        </div>
      </template>
      <v-card class="px-5">
        <v-card-title class="headline">
          Confirm
        </v-card-title>
        <v-card-text >
          We’re sorry to see you go. Once your account is
          deleted, all of your content will be permanently gone,
          including your profile, stories, publications, notes,
          and responses. Are you sure you want to delete your
          account ?
        </v-card-text>
        <v-card-actions class="py-4">
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="deletionDialog = false"
          >
            Cancel
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="deleteAccount()"
          >
            Delete
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </div>
</template>

<script>
export default {
  name: 'SecuritySettings',
  data () {
    return {
      desactivationDialog: false,
      deletionDialog: false
    }
  },
  computed: {
    user () {
      return this.$store.state.user
    }
  },
  methods: {
    desactivateAccount () {
      const data = { id: this.user.id, field: { activated: false } }
      this.axios
        .post('http://localhost:3000/api/session/user/update', data)
        .then((res) => {
          window.location.href = 'http://localhost:3000/api/session/user/logout'
        })
        .catch((err) => console.log(err))
    },
    deleteAccount () {
      const data = { id: this.user.id }
      this.axios
        .post('http://localhost:3000/api/session/user/deleteAll', data)
        .then((res) => {
          window.location.href = 'http://localhost:3000/api/session/user/logout'
        })
        .catch((err) => console.log(err))
    }
  }
}
</script>
