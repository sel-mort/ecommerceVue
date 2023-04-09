<template>
  <div class="card">
    <img :src="product.images[0]" alt="product.name" class="product-img">
    <Rating :rating="product.rating" :read-only="true" :star-size="16" class="rating"></Rating>
    <div class="title">
        <span class="product-name">{{ product.title }}</span>
        <span class="price">${{ product.price }}</span>
    </div>
    <button class="add-to-cart" @click.stop="addItemToCart(product)">Add to Cart</button>
  </div>
</template>

<script>
import Rating from './Rating.vue';

export default {
    props: {
        product: Object,
    },

    components: {
        Rating
    },

    methods: {
      addItemToCart(product) {
        this.$store.dispatch('addItemAction', product);
      },
      
    }
}
</script>

<style scoped>
  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 380px;
    height: 100%;
    border: 2px solid #f3f3fF;
    border-radius: 5px;
    padding: 1em;
    margin: 1em;
  }

  .card:hover {
    transform: translate(0, -5px);
    box-shadow: 0 5px 10px 0px rgba(185, 181, 181, 0.5);
    cursor: pointer;
  }

  .product-img {
    width: clamp(10vw, 20vw, 90%);
    max-width: 300px;
    height: 80%;
    max-height: 200px;
    object-fit: contain;
    border-radius: 10px;
  }

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: .5em;
  }

  .rating {
    margin: .5em;
  }

  .price {
    font-size: 1.2rem;
    font-weight: 600;
  }

  .add-to-cart {
    font-size: 1rem;
    font-weight: 600;
    color: white;
    width: 50%;
    margin-top: .5rem;
    padding: .3em;
    background-color: hsl(348, 85%, 64%);
    border: 1px solid #f3f3f4;
    border-radius: 5px;
    cursor: cell;
  }

  .add-to-cart:hover {
    background-color: hsl(348, 84%, 53%);
    box-shadow: 0 0 5px 0 hsl(348, 94%, 47%);
  }
</style>