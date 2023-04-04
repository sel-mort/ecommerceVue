<template>
  <div class="card">
    <img :src="product.img" alt="product.name">
    <StarRating rating="product.rating"></StarRating>
    <div class="price">
        <span class="product-name">{{ product.name }}</span>
        <span>{{ product.price }}</span>
    </div>
    <button class="add-to-card">Add to Cart</button>
  </div>
</template>

<script>
import StarRating from 'Rating.vue';

export default {
    props: {
        product: Object,
    },

    components: {
        StarRating
    }
}
</script>

<style>

</style>