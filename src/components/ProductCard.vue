<template>
  <div class="card">
    <img :src="product.images[0]" alt="product.name" class="product-img">
    <Rating :rating="3" :read-only="true" :star-size="16" class="rating"></Rating>
    <div class="title">
        <span class="product-name">{{ product.title }}</span>
        <span class="price">${{ product.price }}</span>
    </div>
    <button class="add-to-cart">Add to Cart</button>
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
    height: 100%;
    border: 2px solid #f3f3fF;
    border-radius: 10px;
    padding: 1em;
    margin: 1em;
  }

  .card:hover {
    transform: translate(0, -5px);
    box-shadow: 0 5px 10px 0px rgba(185, 181, 181, 0.5);
    cursor: pointer;
  }

  .product-img {
    width: 100%;
    height: 80%;
    object-fit: cover;
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
    font-size: 1.2rem;
    color: white;
    width: 100%;
    margin-top: 1rem;
    padding: .5em;
    background-color: #a0a0ac;
    border: 1px solid #f3f3f4;
    border-radius: 10px;
    cursor: cell;
  }

  .add-to-cart:hover {
    background-color: #6e6d7a;
    box-shadow: 0 0 5px 0 #272729;
  }
</style>