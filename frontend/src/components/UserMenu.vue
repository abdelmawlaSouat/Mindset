<template>
  <v-menu
    offset-y
    transition="scale-transition"
    class="user-menu"
  >

      <template v-slot:activator="{ on, attrs }">
        <v-avatar v-bind="attrs" v-on="on">
          <v-img
            v-if="user.picture"
            :src="user.picture"
            :alt="user.displayName"
            size="24"
          ></v-img>
          <span v-else>ZE</span>
        </v-avatar>
      </template>

      <v-list>
        <v-list-item
          style="border-bottom: 1px solid rgba(230, 230, 230, 1)"
          class="pa-5 mb-2"
        >
          <v-avatar>
            <v-img
              v-if="user.picture"
              :src="user.picture"
              :alt="user.displayName"
              size="50"
            ></v-img>
            <span v-else>ZE</span>
          </v-avatar>
          <span class="ml-2">{{ user.displayName }}</span>
        </v-list-item>

        <v-list-item
          v-for="(item, idx) in menuItems"
          :key="idx"
          class="item"
        >
          <router-link :to="item.route">
            <v-list-item-title class="item-title">
              {{ item.title }}
            </v-list-item-title>
          </router-link>
        </v-list-item>

        <v-list-item class="item">
          <a>
            <v-list-item-title
              class="item-title"
              @click="logout"
            >
              Log out
            </v-list-item-title>
          </a>
        </v-list-item>
      </v-list>
  </v-menu>

</template>

<script>
export default {
  name: 'UserMenu',
  data () {
    return {
      menuItems: [
        { title: 'New Publication', route: '/new-publication' },
        { title: 'My Publications', route: '/my-publications' },
        { title: 'Library', route: '/library' },
        { title: 'Settings', route: '/settings' }
      ]
    }
  },
  computed: {
    user () {
      return this.$store.state.user
    },
    initialLetter () {
      return ''
    }
  },
  methods: {
    logout () {
      console.log('Logout')
    }
  }
}
</script>

<style lang="css">
  a {
    text-decoration: none;
  }
.item-title {
  color: grey;
  /* padding-right: 1rem; */
  padding-left: 1rem;
  font-size: 0.9rem;
}

.item {
  min-height: 40px;
}

</style>
