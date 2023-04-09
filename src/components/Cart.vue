<template>
  <div class="cart-container">
    <div class="cart-header">
        <h3 class="cart-title">Shopping Cart</h3>
        <p>Items: <span class="items-length">{{ getItemsCount }}</span></p>
        <button class="close-btn" @click="closeCart">x</button>
    </div>
    <div v-if="getCartItems && getCartItems.length" class="items-container">
        <ul class="list-items">
            <li v-for="product in getCartItems" :key="product.id" class="product-item">
                <div class="image-container">
                    <img :src="product.images[0]" :alt="product.title">
                    <div class="product">
                        <h2 class="product-title">{{ product.title }}</h2>
                        <h3 class="product-category">{{ product.category.name }}</h3>
                    </div>
                </div>
                
                <div class="product-price">$ {{ product.price }}</div>
                <Counter :id="product.id" :product="product" :key="product.id"></Counter>
                <font-awesome-icon :icon="['fas', 'trash-can']" class="delete-btn" @click="removeItemFromCart(product)"/>
            </li>
        </ul>
        <div v-if="check" class="checkout-container">
            <span v-if="error" class="error">{{ error }}</span>
            <button class="checkout-btn" @click="checkout">Checkout</button>
        </div>
        
    </div>
    <div v-else class="empty">Empty For Now</div>
  </div>
</template>

<script>
import Counter from '@/components/Counter.vue'

export default {
    props: ['check'],
    components: {
        Counter
    },

    data() {
        return {
            error: ''
        }
    },

    computed: {
        getCartItems() {
            return this.$store.getters.getCartItems;
        },
        getItemsCount() {
            return this.$store.getters.itemsCounter;
        },
    },

    methods: {
        closeCart() {
            this.$emit('close');
        },
        removeItemFromCart(product) {
            this.$store.dispatch('removeItemAction', product);
        },
        checkout() {
            if (this.$store.state.user) {
                this.closeCart();
                this.$router.push({ path: '/cart'});
            } else this.error = "you must login to checkout"
        }
    }

}
</script>

<style scoped>

    .cart-container {
        position: absolute;
        right: clamp(10px, 10%, 100px);
        top: clamp(10px, 10%, 100px);
        display: flex;
        flex-direction: column;
        padding: .5rem;
        border-radius: 10px;
        width: clamp(500px, 60vw, 800px);
        border: 2px solid black;
        overflow: auto;
        z-index: 999;
        background-color: white;
        max-height: 80vh;
        overflow: auto;
    }
    .cart-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        border-bottom: 1px solid #EEE;
    }
    .cart-header p {
        margin: 0;
    }

    .cart-title {
        margin: 0;
    }
    .items-length {
        font-weight: 600;
    }
    .close-btn {
        border: none;
        color: red;
        font-size: larger;
        font-weight: 600;
        padding: 0;
        background-color: transparent;
        cursor: pointer;
    }
    .list-items {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        width: 100%;
        /* gap: 10px; */
        padding: 0;
        margin: 0;
    }

    .product-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: white;
        padding: 1rem;
        height: 100px;
        /* border: 2px solid black; */
        /* box-shadow: 0 0 1px 1px#AAA; */
        /* border-radius: 10px; */
    }

    .product-item:not(:last-child) {
        border-bottom: 1px solid #eee;
    }

    .product-item img {
        width: 60px;
        height: 70px;
        object-fit: cover;
        margin-right: 1rem;
    }

    .product-item li {
        list-style-type: none;
    }

    .image-container {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-basis: 50%;
    }
    .product {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }
    .product-title {
        margin: 0;
        font-size: 1rem;
        color: #444
    }

    .product-category {
        color: #BBB;
        font-size: .8rem;
        margin: 0;
    }

    .product-price {
        font-weight: 600;
    }
    .delete-btn {
        color: rgb(239, 9, 9);
        cursor: pointer;
    }
    .checkout-container {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        border-top: 1px solid #EEE;
    }

    .checkout-btn {
        font-size: 1.2rem;
        font-weight: 600;
        padding: .3em;
        background-color: hsl(348, 85%, 64%);
        border-radius: 10px;
        color: white;
        margin: .5em .5em 0 0;
        width: 20%;
        cursor: pointer;
        border: 2px solid rgb(145, 10, 10);
    }

    .checkout-btn:hover {
        background-color: rgb(255, 10, 10);
        box-shadow: 0 0 5px rgb(255, 9, 9);
        text-shadow: 0 0 20px #eee;
    }
    .empty {
        font-size: 1.5rem;
        padding: 2rem;
        color: hsl(348, 85%, 64%);
        text-align: center;
    }
    .error {
        color: red;
        margin:  0 1rem;
        font-weight: 600;
    }
</style>