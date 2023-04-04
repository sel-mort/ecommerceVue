<template>
    <button class="back-btn">&lt; Back</button>
  <div class="product-modal">
    <div class="product-picture">
        <div class="image">
            <img src="product.img" alt="" width="200px" height="200px">
            <div v-for="img in product.images" :key="img">
                <img src="img" alt="product.title">
            </div>
        </div>
    </div>
    <div class="product-details">
        <div>
            <h2>{{ product.title }}</h2>
            <star-rating :rating="product.id" read-only="true" show-rating="false" :star-size="20" class="rating"></star-rating>
            <p>{{ product.price }}</p>
        </div>
        <div>
            Quantity
            <span class="quantity">
                <button class="btn-minus">-</button>
                <input type="number" value="01" class="number">
                <button class="btn-plus">+</button>
            </span>
        </div>
        <div>
            <button class="add-to-cart">Add to cart</button>
            <button class="like"></button>
        </div>
        <div>
            <h4>Description</h4>
            <p>{{ product.description }}</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'ProductDetails',
    props: ['id'],

    data() {
        return {
            product: null
        }
    },

    mounted() {
        fetch('https://api.escuelajs.co/api/v1/products/' + this.id)
            .then(response => response.json())
            .then(data => {
                this.product = data;
            })
    }
}
</script>

<style scoped>
.product-modal {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    height: 80%;
    padding: 20px;
}
</style>