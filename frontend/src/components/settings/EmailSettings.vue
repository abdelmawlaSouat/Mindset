<template>
  <div class="email-settings">
    <h2>Email Settings</h2>

    <v-divider></v-divider>

    <!-- User Email Field -->
    <div class="settings-subcontent" >
      <div class="d-flex flex-column" style="width: 70%">
      <h3>Email</h3>
      <v-text-field
        v-if="email.editing"
        v-model="email.value"
        v-bind="email.attrs"
      ></v-text-field>
      <span
        v-else
        class="settings-field"
      >
        {{ email.value }}
      </span>
      </div>

      <div class="btns-container">
        <div v-if="email.editing" class="d-flex">
          <v-btn
            small
            outlined
            color="success"
            class="mr-2"
            @click="saveField(email.value)"
          >
          Save
          </v-btn>
          <v-btn
            small
            outlined
            color="grey"
            @click="email.editing = !email.editing"
          >
            Cancel
          </v-btn>
        </div>
        <v-btn
          v-else
          small
          outlined
          color="grey"
          @click="editField(email)"
        >
          Edit
        </v-btn>
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
        <div class="d-flex">
          <v-btn
            small
            color="success"
          >
            ON
            <!-- class="mr-2" -->
            <!-- @click="saveField(bio.value)" -->
          </v-btn>
          <v-btn
            small
            outlined
            color="grey"
          >
            <!-- @click="bio.editing = !bio.editing" -->
            OFF
          </v-btn>
        </div>
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
        <div class="d-flex">
          <v-btn
            small
            color="success"
          >
            ON
            <!-- class="mr-2" -->
            <!-- @click="saveField(bio.value)" -->
          </v-btn>
          <v-btn
            small
            outlined
            color="grey"
          >
            <!-- @click="bio.editing = !bio.editing" -->
            OFF
          </v-btn>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'EmailSettings',
  data () {
    return {
      email: {
        value: 'abdelmawla.swt@gmail.com',
        editing: false,
        attrs: {
          placeholder: 'Email',
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
