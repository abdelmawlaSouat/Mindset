<template>
  <div
    class="search-bar d-flex align-center"
    style="height: 50px"
  >
    <v-icon @click="showField = !showField">
      {{ searchIcon }}
    </v-icon>

    <v-expand-x-transition>
      <v-text-field
        class="ml-2"
        placeholder="Search Mindset"
        v-show="showField"
        v-model="searchRequest"
        style="font-size: 0.85rem; margin: 0; height: 45px"
      ></v-text-field>
    </v-expand-x-transition>
  </div>
</template>

<script>
import { mdiMagnify } from '@mdi/js'

export default {
  name: 'SearchBar',
  data () {
    return {
      searchIcon: mdiMagnify,
      searchRequest: '',
      showField: false
    }
  }
}
</script>
