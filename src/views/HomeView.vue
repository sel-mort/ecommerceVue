<template>
  <div class="home">
    <Categories></Categories>
  </div>
</template>

<script>
// @ is an alias to /src
import Categories from '@/components/Categories.vue'

export default {
  name: 'HomeView',
  components: {
    Categories
  }
}
</script>
