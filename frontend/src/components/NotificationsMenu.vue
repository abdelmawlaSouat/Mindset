<template>
  <div class="notifications-menu">

    <v-menu offset-y transition="scale-transition">
      <template v-slot:activator="{ on, attrs }">
        <v-icon
          class="mr-2"
          v-bind="attrs"
          v-on="on"
        >
          {{ notifsIcon }}
        </v-icon>
      </template>
      <v-list>
        <v-list-item>
          <v-list-item-title>Notification X</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

  </div>
</template>

<script>
import { mdiBellOutline } from '@mdi/js'

export default {
  name: 'NotificationsMenu',
  data () {
    return {
      notifsIcon: mdiBellOutline
    }
  }
}
</script>
