<template>
    <main>
        <router-view></router-view>
    </main>
</template>

<script>
import homeIndex from './views/home-index.vue'
export default {
  name: 'App',
  components: {
    homeIndex
  }
}
</script>
