<template>
  <div class="home">
    <Categories :categories="categories"></Categories>
    <div class="products">
      <ProductCard v-for="product in products" :key="product.id" :product="product"></ProductCard>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Categories from '@/components/Categories.vue'
import ProductCard from '@/components/ProductCard.vue'

export default {
  name: 'HomeView',
  components: {
    Categories,
    ProductCard
  },

  data() {
    return {
      categories: [],
      products: [],
    }
  },

  mounted() {
    fetch('https://api.escuelajs.co/api/v1/categories')
      .then(res => res.json())
      .then(data => {
        this.categories = data;
      });
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(res => res.json())
      .then(data => {
        this.products = data;
      });
  }
}
</script>

<style scoped>
  .products {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1em;
    width: 90%;
    margin: 0 auto;
  }
</style>
