<template>
  <div class="settings">
    <v-list class="sidebar">
      <v-list-item>
        <v-list-item-title class="title" style="line-height: 1.5rem"
          >Settings</v-list-item-title
        >
      </v-list-item>
      <v-list-item v-for="(item, idx) in categories" :key="idx" link>
        <v-list-item-content>
          <v-list-item-title class="categorie">{{
            item.name
          }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <div class="d-flex justify-center settings-content">
      <v-list>
        <AboutUserSettings />
        <EmailSettings />
        <AccountSettings />
        <SecuritySettings />
      </v-list>
    </div>
  </div>
</template>

<script>
import AboutUserSettings from '@/components/settings/AboutUserSettings'
import EmailSettings from '@/components/settings/EmailSettings'
import AccountSettings from '@/components/settings/AccountSettings'
import SecuritySettings from '@/components/settings/SecuritySettings'

export default {
  name: 'Settings',
  components: {
    AboutUserSettings,
    EmailSettings,
    AccountSettings,
    SecuritySettings
  },
  data () {
    return {
      categories: [
        { name: 'About You', link: '#aboutYou' },
        { name: 'Email Settings', link: '#emailSettings' },
        { name: 'Account', link: '#account' },
        { name: 'Security', link: '#security' }
      ]
    }
  }
}
</script>

<style lang="css">
.settings {
  margin-top: 5%;
  position: relative;
  padding-bottom: 5rem;
}

.settings-content h2 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.settings .categorie {
  color: grey;
}

.settings-content {
  margin: 0 15% 0 35%;
}

.setting-details {
  color: grey;
  font-size: 0.9rem;
  /* margin-top: 1rem; */
}

.settings-field {
  margin: 1rem 0 1rem 0;
}

.settings .sidebar {
  width: auto;
  position: fixed;
  margin: 0 0 0 20%;
}

.settings-subcontent {
  padding: 2rem 1rem 1rem 1rem;
  display: flex;
  justify-content: space-between;
}

.btns-container {
  width: 150px;
  display: flex;
  justify-content: flex-end;
}
</style>
