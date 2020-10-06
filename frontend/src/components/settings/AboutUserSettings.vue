<template>
  <div class="about-user">
    <h2>About You</h2>

    <v-divider></v-divider>

    <!-- User name Field -->
    <div class="settings-subcontent" >
      <div class="d-flex flex-column" style="width: 70%">
      <h3>Name</h3>
      <v-text-field
        v-if="name.editing"
        v-model="name.value"
        v-bind="name.attrs"
      ></v-text-field>
      <span
        v-else
        class="settings-field"
      >
        {{ name.value }}
      </span>
      <p class="setting-details">
        Your name appears on your Profile page, as your byline,
        and in your responses. It is a required field.
      </p>
      </div>

      <div class="btns-container">
        <div v-if="name.editing" class="d-flex">
          <v-btn
            small
            outlined
            color="success"
            class="mr-2"
            @click="saveField(name.value)"
          >
          Save
          </v-btn>
          <v-btn
            small
            outlined
            color="grey"
            @click="name.editing = !name.editing"
          >
            Cancel
          </v-btn>
        </div>
        <v-btn
          v-else
          small
          outlined
          color="grey"
          @click="editField(name)"
        >
          Edit
        </v-btn>
      </div>
    </div>

    <!-- User Bio Field  -->
    <div class="settings-subcontent" >
      <div class="d-flex flex-column" style="width: 70%">
      <h3>Bio</h3>
      <v-textarea
        v-if="bio.editing"
        v-model="bio.value"
        v-bind="bio.attrs"
      ></v-textarea>
      <span
        v-else
        class="settings-field"
      >
        {{ bio.value }}
      </span>
      <p class="setting-details">
        Your bio appears on your Profile page. Max 160 characters.
      </p>
      </div>

      <div class="btns-container">
        <div v-if="bio.editing" class="d-flex">
          <v-btn
            small
            outlined
            color="success"
            class="mr-2"
            @click="saveField(bio.value)"
          >
          Save
          </v-btn>
          <v-btn
            small
            outlined
            color="grey"
            @click="bio.editing = !bio.editing"
          >
            Cancel
          </v-btn>
        </div>
        <v-btn
          v-else
          small
          outlined
          color="grey"
          @click="editField(bio)"
        >
          Edit
        </v-btn>
      </div>
    </div>

    <!-- Avatar User Field -->
    <div class="settings-subcontent" >
      <div class="d-flex flex-column" style="width: 70%">
        <h3>Avatar</h3>
        <p class="setting-details" style="margin-top: 1rem">
          Your photo appears with your posts across Mindset.
        </p>
        <p class="setting-details">
          Recommended size: Square, at least 5000 pixels per side.
          File type: JPG, PNG or GIF.
        </p>
      </div>

      <div class="btns-container">
        <div v-if="avatar.editing" class="d-flex">
          <v-btn
            small
            outlined
            color="success"
            class="mr-2"
            @click="saveField(avatar.value)"
          >
          Save
          </v-btn>
          <v-btn
            small
            outlined
            color="grey"
            @click="avatar.editing = !avatar.editing"
          >
            Cancel
          </v-btn>
        </div>
        <v-btn
          v-else
          small
          outlined
          color="grey"
          @click="editField(avatar)"
        >
          Edit
        </v-btn>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'AboutUserSettings',
  data () {
    return {
      name: {
        value: 'Souat Abdelmawla',
        editing: false,
        attrs: {
          placeholder: 'Name',
          color: 'grey'
        }
      },
      bio: {
        value: '',
        editing: false,
        attrs: {
          placeholder: 'Add your bio...',
          color: 'grey',
          solo: true,
          counter: true,
          rules: [v => v.length <= 160 || 'Max 160 characters']
        }
      },
      avatar: {
        value: '',
        editing: false
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
