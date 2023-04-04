<template>
  <div class="product-modal">
    <button class="back-btn">back</button>
    <div class="product-details">
        <div class="image">
            <img src="" alt="" width="200px" height="200px">
            <div v-for="img in product.images" :key="img">
                <img src="img" alt="product.title">
            </div>
        </div>
        
    </div>
  </div>
</template>

<script>
export default {
    props: ['id'],

    data() {
        return {
            product: null
        }
    },

    mounted() {
        // fetch('');
    }
}
</script>

<style>

</style>