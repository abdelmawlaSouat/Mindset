<template>
  <div class="security-settings">
    <h2>Security</h2>

    <v-divider></v-divider>

    <!-- Desactivation -->
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
        <v-btn small outlined color="grey" @click="desactivateAccount()">
          Desactivate Account
        </v-btn>
      </div>
    </div>

    <!-- Delete Account -->
    <div class="settings-subcontent">
      <div class="d-flex flex-column" style="width: 60%">
        <h3>Delete account</h3>
        <p class="setting-details">
          Permanently delete your account and all of your content.
        </p>
      </div>

      <div class="btns-container">
        <v-btn small outlined color="grey" @click="deleteAccount()">
          Desactivate Account
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SecuritySettings',
  methods: {
    desactivateAccount () {
      console.log('des')
    },
    deleteAccount () {
      console.log('del')
    }
  }
}
</script>
