<template>
  <div class="account-settings">
    <h2>Account</h2>

    <v-divider></v-divider>

    <!-- Given Name Field -->
    <div class="settings-subcontent" >
      <div class="d-flex flex-column" style="width: 70%">
        <h3>First Name</h3>
        <v-text-field
          v-if="givenName.editing"
          v-model="givenName.value"
          v-bind="givenName.attrs"
        ></v-text-field>
        <span
          v-else
          class="settings-field"
        >
          {{ givenName.value }}
        </span>
      </div>

      <div class="btns-container">
        <div v-if="givenName.editing" class="d-flex">
          <v-btn
            small
            outlined
            color="success"
            class="mr-2"
            @click="saveField({ 'givenName': givenName.value })"
          >
          Save
          </v-btn>
          <v-btn
            small
            outlined
            color="grey"
            @click="givenName.editing = !givenName.editing"
          >
            Cancel
          </v-btn>
        </div>
        <v-btn
          v-else
          small
          outlined
          color="grey"
          @click="givenName.editing = !givenName.editing"
        >
          Edit
        </v-btn>
      </div>
    </div>

    <!-- Family Name Field -->
    <div class="settings-subcontent" >
      <div class="d-flex flex-column" style="width: 70%">
        <h3>Last Name</h3>
        <v-text-field
          v-if="familyName.editing"
          v-model="familyName.value"
          v-bind="familyName.attrs"
        ></v-text-field>
        <span
          v-else
          class="settings-field"
        >
          {{ familyName.value }}
        </span>
      </div>

      <div class="btns-container">
        <div v-if="familyName.editing" class="d-flex">
          <v-btn
            small
            outlined
            color="success"
            class="mr-2"
            @click="saveField({ 'familyName': familyName.value })"
          >
          Save
          </v-btn>
          <v-btn
            small
            outlined
            color="grey"
            @click="familyName.editing = !familyName.editing"
          >
            Cancel
          </v-btn>
        </div>
        <v-btn
          v-else
          small
          outlined
          color="grey"
          @click="familyName.editing = !familyName.editing"
        >
          Edit
        </v-btn>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'AccountSettings',
  data () {
    return {
      givenName: {
        value: '',
        editing: false,
        attrs: {
          placeholder: 'First Name',
          color: 'grey'
        }
      },
      familyName: {
        value: '',
        editing: false,
        attrs: {
          placeholder: 'Last Name',
          color: 'grey'
        }
      }
    }
  },
  methods: {
    saveField (field) {
      const data = { id: this.user.id, field }
      this.axios
        .post('http://localhost:3000/api/session/user/update', data)
        .then((res) => {
          this.$store.state.user = res.data.user
        })
        .catch((err) => console.log(err))
    },
    setUserData (user) {
      this.givenName.value = user.givenName
      this.familyName.value = user.familyName
    }
  },
  mounted () {
    this.setUserData(this.user)
  },
  computed: {
    user () {
      return this.$store.state.user
    }
  },
  watch: {
    user: function (val) {
      this.givenName.value = val.givenName
      this.familyName.value = val.familyName
    }
  }
}
</script>
