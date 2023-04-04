<template>
    <div class="category-bar">
        <div class="cat-container">
            <button class="btn prev-btn">&lt;</button>
            <ul class="cat-list">
                <li v-for="category in categories" :key="category.id"></li>
            </ul>
            <button class="btn next-btn">&gt;</button>
        </div>
        
        <button class="filter-btn"><font-awesome-icon :icon="['fa', 'arrow-down-wide-short']" /><span class="fil-title">Filters</span></button>
    </div>
    <div class="filter-input">
        <label for="product-name">
            Product
            <input type="text" id="product-name" name="product-name">
        </label>
        <label for="price">
            Price
            <input type="number" id="price" name="price">
        </label>
        <label for="rating">
            Rating
            <Rating :rating="0"></Rating>
        </label>
    </div>
</template>

<script>
import Rating from './Rating.vue';

export default {
    name: 'Categories',
    components: {
        Rating
    },

    data() {
        return {
            categories: [],
        }
    }

}
</script>

<style scoped>
    .category-bar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 1rem auto;
        width: 90vw;
        padding: .5em;
    }

    .filter-btn {
        font-size: 1em;
        padding: .8em 1em;
        background-color: transparent;
        border: 1px solid #f3f3f4;
        border-radius: .5em;
        cursor: pointer;
    }

    .fil-title {
        margin-left: 10px;
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

    .cat-list {
        flex-basis: 80%;
        height: 50px;
        border: 1px solid #f3f3f4;
    }
    .filter-input {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    /* .rating {
        display: flex;
        align-items: center;
    } */
</style>