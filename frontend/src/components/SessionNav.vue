<template>
  <v-toolbar
    extended
    class="py-5"
  >
    <v-row align="center" justify="center" justify-sm="space-around">
      <v-toolbar-title>
          <router-link to="/">
            <v-img
              :src="require('@/assets/' + src)"
              :alt="alt"
              width="200"
            ></v-img>
          </router-link>
      </v-toolbar-title>
      <div
        class="d-flex align-center justify-end"
        style="min-width: 35vh"
      >
        <SearchBar />
        <router-link to="library">
          <v-icon class="mx-2">{{ libraryIcon }}</v-icon>
        </router-link>
        <NotificationsMenu />
        <UserMenu />
      </div>
    </v-row>
  </v-toolbar>
</template>

<script>
import { mdiBookshelf } from '@mdi/js'
import SearchBar from './SearchBar'
import NotificationsMenu from './NotificationsMenu'
import UserMenu from './UserMenu'

export default {
  name: 'SessionNav',
  components: {
    SearchBar,
    NotificationsMenu,
    UserMenu
  },
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      libraryIcon: mdiBookshelf
    }
  }
}
</script>
