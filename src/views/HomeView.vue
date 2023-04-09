<template>
  <div class="home">
    <Categories :categories="categories"></Categories>
    
      <transition name="move">
        <div v-if="products" class="products">
          <ProductCard v-for="product in products" :key="product.id" :product="product" @click="toggleModal(product)">
          </ProductCard>
        </div>
      </transition>
      
      <transition name="showModal">
        <ProductDetails v-if="showModal" :product="product" @close="toggleModal(product)">
        </ProductDetails>
      </transition>
  </div>
</template>

<script>
// @ is an alias to /src
import Categories from '@/components/Categories.vue'
import ProductCard from '@/components/ProductCard.vue'
import ProductDetails from '@/components/ProductDetails.vue'

export default {
  name: 'HomeView',
  components: {
    Categories,
    ProductCard,
    ProductDetails,
  },

  data() {
    return {
      categories: [],
      // products: [],
      showModal: false,
      product: {},
      check: true
    }
  },

  computed: {
    products() {
      return this.$store.state.products;
    }
  },

  methods: {
    toggleModal(product) {
      this.product = product;
      this.showModal = !this.showModal;
    },
    showmsg(data) {
      console.log(data);
    }
  },

  mounted() {
    //fetch('https://api.escuelajs.co/api/v1/categories')
    fetch('https://dummyjson.com/products/categories')  
    .then(res => res.json())
      .then(data => {
        this.categories = data;
      });
    this.$store.dispatch('fetchProducts');
  }
}
</script>

<style scoped>
  .products {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-auto-rows: 380px;
    gap: 1em;
    width: 90%;
    margin: 0 auto;
  }


  .move-enter-from {
    transform: translate(0, 0);
  }
  .move-enter-to {
    transform: translate(0, 60px);
  }
  .move-enter-active {
    transition: all 1s ease-in-out;
  }

  .move-leave-from {
    transform: translate(0, 30px)
  }
  .move-leave-to {
    transform: translate(0, 0);
  }
  .move-leave-active {
    transition: all 1s ease;
  }

  .showModal-enter-from {
    transform: scale(0);
    opacity: 0;
  }
  .showModal-enter-to {
    transform: scale(1);
    opacity: 1;
  }
  .showModal-enter-active {
    transition: all .3s ease-in-out;
  }

  .showModal-leave-from {
    transform: scale(1);
    opacity: 1;
  }
  .showModal-leave-to {
    transform: scale(0);
    opacity: 0;
  }
  .showModal-leave-active {
    transition: all .3s ease;
  }

</style>
