<template>
    <div class="category-bar">
        <div class="categories">
            <span class="cat-title">Categories</span>
            <div class="cat-container">
                <button @click="showProduct('')" class="all">All</button>
                <button class="btn prev-btn" @click="scrollLeft">&lt;</button>
                <div v-if="categories" class="cat-list">
                    <button v-for="category in categories" :key="category" class="cat-btn" @click="showProduct(category)">{{ category }}</button>
                </div>
                <button class="btn next-btn" @click="scrollRight">&gt;</button>
            </div>
        </div>
        <button class="filter-btn" @click="toggleFilters"><font-awesome-icon :icon="['fa', 'arrow-down-wide-short']" /><span class="fil-title">Filters</span></button>
    </div>
    <transition name="show">
        <div v-if="showFilters" class="filter-input">
            <label for="product-name">
                Product<br>
                <input type="text" id="product-name" name="product-name" v-model="name" @input="$event => doFilters('name', $event.target.value, 'name')">
            </label>
            <label for="price">
                Price<br>
                <input type="number" id="price" name="price" v-model="price" @input="setPrice($event.target.value)">
            </label>
            <label for="rating" class="rating">
                Rating
                <Rating :star-size="25" class="rat" @takeRating="setRating" v-model="rating"></Rating>
                
            </label>
        </div>
    </transition>
</template>

<script>
import Rating from './Rating.vue';

export default {
    props: ['categories'],
    name: 'Categories',
    
    components: {
        Rating,
    },

    data() {
        return {
            showFilters: false,
            catName: '',
            rating: 0,
            name: '',
            price: 0
        }
    },

    computed: {
        
    },

    methods: {
        doFilters(prop, value, type) {
            this.$store.dispatch('updateProduct', {prop, value});
            this.$store.dispatch('filter', {type});
        },
        setPrice(price) {
            this.$store.dispatch('commitUpdatePrice', price);
            this.$store.dispatch('filterByPrice');
        },
        setRating(rating) {
            // this.rating = rating;
            this.$store.dispatch('commitUpdateRat', rating);
            this.$store.dispatch('filterByRat');
        },
        showProduct(cat) {
            this.$store.dispatch('commitUpdateCat', cat);
            this.$store.dispatch('filterByCat');
        },
        toggleFilters() {
            this.showFilters = !this.showFilters;
        },
        scrollLeft() {
            let content = document.querySelector(".cat-list");
            content.scrollLeft -= 50;
            let leftBtn = document.querySelector(".prev-btn");
            if (content.scrollLeft <= 0)
                leftBtn.style.visibility = "hidden";
            else {
                let rightBtn = document.querySelector(".next-btn");
                rightBtn.style.visibility = "visible";
            }
        },
        scrollRight() {
            let content = document.querySelector(".cat-list");
            if (content.scrollLeft + 1 >= content.scrollWidth - content.clientWidth) {
                let rightBtn = document.querySelector(".next-btn");
                rightBtn.style.visibility = "hidden";
            } else {
                let leftBtn = document.querySelector(".prev-btn");
                leftBtn.style.visibility = "visible";
            }
            content.scrollLeft += 40;
        },
    },

}
</script>

<style scoped>
    .category-bar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0 auto;
        width: 90vw;
        padding: 1em 1.5em;
        /* min-width: 500px; */
    }

    .filter-btn {
        font-size: 1em;
        padding: .8em 1em;
        background-color: #f3f3f4;
        border: 1px solid #f3f3f4;
        border-radius: .5em;
        cursor: pointer;
        margin-right: clamp(5px, 1rem, 5%);
    }

    .fil-title {
        margin-left: 10px;
    }

    .categories {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .cat-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .btn {
        border: none;
        font-size: large;
        background-color: white;
    }
    
    .cat-title {
        font-weight: 600;
    }

    .all {
        border: none;
        color: #222;
        font-size: 1.2rem;
        padding: .2em;
        margin: 0 1rem;
        font-weight: bold;
        border: 5px solid hsl(348, 85%, 64%);
        cursor: pointer;
    }

    .cat-list {
        display: flex;
        overflow-x: hidden;
        overflow-y: hidden;
        white-space: nowrap;
        /* flex-basis: 70%; */
        width: 50vw;
        max-width: 700px;
    }
    .cat-btn {
        font-size: 1rem;
        background-color: transparent;
        color: #c1c0ca;
        padding: .8em;
        margin: 0 .5rem;
        border: none;
        border-radius: .5em;
        cursor: pointer;
    }

    .cat-btn:has(.active) {
        background-color: #6e6d7a;
        color: white;
    }

    .cat-btn:hover {
        color: #222;
        text-shadow: 5px 5px 5px 0 #272729;
    }

    .next-btn, .prev-btn {
        cursor: pointer;
    }

    .prev-btn {
        visibility: hidden;
    }

    .filter-input {
        width: 98%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        gap: 5rem;
        padding: 1.5em 5em;
        border-top: 1px solid#f3f3f4;
        border-bottom: 1px solid#f3f3f4;
    }

    label {
        font-size: 1rem;
        font-weight: 600;
        color: rgb(77, 76, 76);
        display: flex;
        flex-direction: column;
        align-items: baseline;
        justify-content: flex-start;
        width: 100%;
    }

    input {
        font-size: 1.2rem;
        padding: .5em .8em;
        background-color: #f3f3f4;
        border: none;
        border-radius: .5em;
        width: 100%;
        margin-top: .5em;
    }

    input:focus {
        outline: none;
        box-shadow: 1px 1px 5px 0px #6e6d7a;
    }

    .rat {
        padding-top: .5em;
        /* align-self: center; */
    }
    .rating {
        place-items: center;
        flex-basis: 50%;
    }

    .show-enter-from {
        opacity: 0;
        transform: translate(0, -60px);
    }
    .show-enter-to {
        opacity: 1;
        transform: translate(0, 0);
    }

    .show-enter-active {
        transition: all .3s ease;
    }

    .show-leave-from {
        opacity: 1;
        transform: translate(0, 0);
    }

    .show-leave-to {
        opacity: 0;
        transform: translate(0, -60px);
    }

    .show-leave-active {
        transition: all .3s ease;
    }
</style>