<template>
  <div class="email-settings">
    <h2>Email Settings</h2>
    <v-divider></v-divider>

    <!-- User Email Field -->
    <div class="settings-subcontent" >
      <div class="d-flex flex-column" style="width: 70%">
        <h3>Email</h3>
        <span class="settings-field">
          {{ email }}
        </span>
      </div>
    </div>

    <!-- Newsletters Settings  -->
    <div class="settings-subcontent" >
      <div class="d-flex flex-column" style="width: 70%">
      <h3>Newsletters</h3>
      <p class="setting-details">
        Receive emails with personalized posts.
      </p>
      </div>
      <div class="btns-container">
        <toggle-button
          :value="user.newsletters"
          v-bind="toggleBtn"
          @change="saveField({ 'newsletters': !user.newsletters })"
        />
      </div>
    </div>

    <!-- Social Notifications -->
    <div class="settings-subcontent" >
      <div class="d-flex flex-column" style="width: 70%">
        <h3>Social Notifications</h3>
        <p class="setting-details" style="margin-top: 1rem">
          Notifications when someone follows you
          or highlights the same passage in a post.
        </p>
      </div>
      <div class="btns-container">
        <toggle-button
          :value="user.socialNotification"
          v-bind="toggleBtn"
          @change="saveField({ 'socialNotification': !user.socialNotification })"
        />
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'EmailSettings',
  data () {
    return {
      toggleBtn: {
        width: 70,
        height: 30,
        sync: true,
        labels: {
          checked: 'ON',
          unchecked: 'OFF'
        }
      }
    }
  },
  computed: {
    user () {
      return this.$store.state.user
    },
    email () {
      return this.user.email
    }
  },
  methods: {
    saveField (field) {
      const data = { id: this.user.id, field }
      const key = Object.keys(field)[0]

      this.user[key] = !this.user[key]
      this.axios
        .post('http://localhost:3000/api/session/user/update', data)
        .then((res) => {
          this.$store.state.user = res.data.user
        })
        .catch((err) => console.log(err))
    }
  }
}
</script>
