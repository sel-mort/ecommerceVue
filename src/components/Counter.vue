<template>
    <span class="counter">
        <button class="btn-minus" @click="decrement">-</button>
        <input type="text" v-model="numb" class="number" disabled>
        <button class="btn-plus" @click="increment">+</button>
    </span>
</template>

<script>
export default {
    props: ['id', 'product'],

    data() {
        return {
            number: this.product.quantity || 1
        }
    },

    computed: {
        numb() {return this.number},
    },

    methods: {
        increment() {
            this.number++;
            this.$store.dispatch('setQuantityAct', { id: this.id, quantity: this.number })
            // console.log(this.$store.state.cartItems[0])
        },
        decrement() {
            if (this.number > 0) {
                this.number--;
                this.$store.dispatch('setQuantityAct', { id: this.id, quantity: this.number })
                // console.log(this.$store.state.cartItems[0])
            }
        }
    },
    // mounted() {
    //     this.number = this.$store.commit('getQuantity',this.id);
    // }
}
</script>

<style>
    .counter-section {
    width: 100%;
    border-bottom: 1px solid #DDD;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: .3em 0;
    }

    .counter {
        display: flex;
        justify-content: center;
        align-items: center;
        /* margin: .5rem 2rem; */
        border: none;
        border-radius: 5rem;
        background-color: #EEE;
        padding: .5rem;
    }

    .btn-minus, .btn-plus {
        border: none;
        border-radius: 50%;
        font-size: 1rem;
        background-color: white;
        /* padding: .5rem; */
        cursor: pointer;
    }

    .number {
        border: none;
        width: 5em;
        font-size: .8rem;
        font-weight: 600;
        text-align: center;
        background-color: transparent;
    }
</style>