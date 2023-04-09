<template>
    <div class="modal" @click.self="closeModal">
        <div v-if="product" class="product-modal">
            <button class="back-btn" @click="closeModal">&lt; Back</button>
            <div class="product-pictures-container">
                <div class="product-picture">
                    <img :src="product.images[product.images.length - 1]" :alt="product.title" ref="mainPic">
                </div>
                <div class="other-images">
                    <img v-for="img in product.images" :key="img" :src="img" :alt="product.title" @click="changePic(img)">
                </div>
            </div>
            <div class="product-details">
                <div class="title-section">
                    <h2 class="product-title">{{ product.title }}</h2>
                    <Rating :rating="product.rating" :read-only="true" :show-rating="true" :star-size="15" class="rating" active-color="#ffd055"></Rating>
                    <p class="product-price">${{ product.price }}</p>
                </div>
                <div class="quantity-section">
                    Quantity
                    <span class="quantity">
                        <Counter :id="product.id" :product="product"></Counter>
                    </span>
                </div>
                <div class="btn-section">
                    <button class="add-to-cart" @click.stop="addItemToCart(product)">Add to cart</button>
                    <!-- <button class="like"></button> -->
                </div>
                <div class="description-section">
                    <h4 class="description">Description</h4>
                    <p class="desc-para">{{ product.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { ref } from 'vue';
import Rating from './Rating.vue';
import Counter from './Counter.vue';

export default {
    
    name: 'ProductDetails',
    props: ['product'],

    components: {
        Rating,
        Counter
    },

    data() {
        return {
            numb: 1
        }
    },

    computed: {
        number() {
            return this.numb.toLocaleString({ minmumIntegerDigits:3 })
        }
    },

    methods: {
        closeModal() {
            this.$emit('close');
        },
        addItemToCart(product) {
        this.$store.dispatch('addItemAction', product);
      },

        changePic(src) {
            this.$refs.mainPic.src = src;
        },

        // increment() {
        //     this.numb++;
        // },

        // decrement() {
        //     if (this.numb > 0)
        //         this.numb--;
        // }
    },

    mounted() {
        // fetch('https://api.escuelajs.co/api/v1/products/' + this.id)
        //     .then(response => response.json())
        //     .then(data => {
        //         this.product = data;
        //     })
    }
}
</script>

<style scoped>
.modal {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(81, 74, 74, 0.5);
    z-index: 2;
}
.product-modal {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
    max-width: 800px;
    min-width: 600px;
    height: 70%;
    padding: 20px;
    background-color: white;
    border-radius: 1rem;
}
.back-btn {
    position: absolute;
    top: 0;
    left: 0;
    background-color: transparent;
    border: none;
    font-size: 1rem;
    padding: .8em;
    color: #000;
    cursor: pointer;
}
.back-btn:hover {
    box-sizing: border-box;
    font-weight: 600;
}
.product-pictures-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-basis: 60%;
    max-width: 400px;
    height: 100%;
}
.product-picture {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
}
.product-picture img {
    width: 80%;
    height: 80%;
    object-fit: contain;
    border-radius: 10px;
}
.other-images {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}
.other-images img {
    width: 70px;
    height: 70px;
    object-fit: contain;
    cursor: pointer;
}

.other-images img:focus {
    border: 2px solid black;
}
.product-details {
    flex-basis: 50%;
    height: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: left;
    /* min-width: 300px; */
    max-width: 400px;
}
.title-section {
    padding: .5em;
    border-bottom: 1px solid #DDD;
    padding-bottom: 1rem
}
.title-section * {
    padding: .2em 0;
}
.product-title {
    text-transform: uppercase;
    margin: 0;
    width: 100%;
}

.rating {
    display: flex;
    font-size: 1rem;
    font-weight: 700;
}

.product-price {
    color: #E00;
    font-size: 1.5rem;
    margin: 0;
    font-weight: bold;
}
.quantity-section {
    width: 100%;
    border-bottom: 1px solid #DDD;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: .3em 0;
}
.quantity {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: .5rem 2rem;
    border: none;
    border-radius: 5rem;
    background-color: #EEE;
    /* padding: .5em; */
}
.btn-minus, .btn-plus {
    border: none;
    border-radius: 50%;
    font-size: 1rem;
    background-color: white;
    cursor: pointer;
}
.number {
    border: none;
    width: 5em;
    font-size: .8rem;
    font-weight: 600;
    text-align: center;
    background-color: transparent;
    outline: none;
}
.btn-section {
    width: 100%;
    border-bottom: 1px solid #DDD;
    padding: 1rem 0;
    display: flex;
    justify-content: center;
}
.add-to-cart {
    background-color: #f0c14b;
    border: 1px solid;
    border-color: #a88734 #9c7e31 #846a29;
    color: #111;
    width: 60%;
    padding: .5em 1em;
    border-radius: .5rem;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 700;
    margin: 0 auto;
}

.add-to-cart:hover {
    background-color: #eabc3b;
    box-shadow: 0 0 5px #dea619;
}
.description {
    margin: 0;
    margin-top: 1em;
}
.desc-para {
    font-size: .9rem;
}
@media (max-width: 1200px) {
    .product-modal {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        max-height: 100vh;
        height: auto;
        width: auto;
        margin: .2rem;
        overflow: auto;
        min-width: auto;
    }
    .title-section {
        padding: .2rem;
        margin-top: .2rem;
        border-top: 1px solid #DDD;
    }
    .product-details {
        text-align: center;
        padding: 0;
    }
    .description {
        margin-top: .5rem;
    }
    .desc-para {
        margin: .5rem 0;
        font-size: .8rem;
        text-align: left;
    }

    .product-picture img {
        width: 25vh;
        height: 25vh;
        margin-bottom: 10px;
    }
    .rating {
        display: block;
        align-items: center;
    }
}
</style>