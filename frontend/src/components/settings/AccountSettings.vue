<template>
  <div class="account-settings">
    <h2>Account</h2>

    <v-divider></v-divider>

    <!-- Username Field -->
    <div class="settings-subcontent" >
      <div class="d-flex flex-column" style="width: 70%">
        <h3>Username</h3>
        <v-text-field
          v-if="username.editing"
          v-model="username.value"
          v-bind="username.attrs"
        ></v-text-field>
        <span
          v-else
          class="settings-field"
        >
          {{ username.value }}
        </span>
      </div>

      <div class="btns-container">
        <div v-if="username.editing" class="d-flex">
          <v-btn
            small
            outlined
            color="success"
            class="mr-2"
            @click="saveField(username.value)"
          >
          Save
          </v-btn>
          <v-btn
            small
            outlined
            color="grey"
            @click="username.editing = !username.editing"
          >
            Cancel
          </v-btn>
        </div>
        <v-btn
          v-else
          small
          outlined
          color="grey"
          @click="editField(username)"
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
      username: {
        value: 'abdelmawla.swt',
        editing: false,
        attrs: {
          placeholder: 'Username',
          color: 'grey'
        }
      }
    }
  },
  methods: {
    editField (field) {
      field.editing = !field.editing
      if (field.attrs) {
        field.attrs.readonly = false
        field.attrs.autofocus = true
      }
    },
    saveField (field) {
      console.log(field)
    }
  }
}
</script>
