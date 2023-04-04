<template>
    <div class="category-bar">
        <div class="categories">
            <span class="cat-title">Categories</span>
            <div class="cat-container">
                <button class="btn prev-btn" @click="scrollLeft">&lt;</button>
                <div v-if="categories" class="cat-list">
                    <button v-for="category in categories" :key="category.id" class="cat-btn">{{ category.name }}</button>
                </div>
                <button class="btn next-btn" @click="scrollRight">&gt;</button>
            </div>
        </div>
        
        <button class="filter-btn"><font-awesome-icon :icon="['fa', 'arrow-down-wide-short']" /><span class="fil-title">Filters</span></button>
    </div>
    <div class="filter-input">
        <label for="product-name">
            Product<br>
            <input type="text" id="product-name" name="product-name">
        </label>
        <label for="price">
            Price<br>
            <input type="number" id="price" name="price">
        </label>
        <label for="rating" class="rating">
            Rating
            <Rating :rating="0" :star-size="25" class="rat"></Rating>
        </label>
    </div>
</template>

<script>
import Rating from './Rating.vue';

export default {
    props: ['categories'],
    name: 'Categories',
    components: {
        Rating
    },

    data() {
        return {
        }
    },

    methods: {
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
    }

    .filter-btn {
        font-size: 1em;
        padding: .8em 1em;
        background-color: #f3f3f4;
        border: 1px solid #f3f3f4;
        border-radius: .5em;
        cursor: pointer;
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

    .cat-list {
        display: flex;
        overflow-x: hidden;
        overflow-y: hidden;
        white-space: nowrap;
        flex-basis: 70%;
    }
    .cat-btn {
        font-size: 1rem;
        background-color: transparent;
        color: #6e6d7a;
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
        box-shadow: 0 0 5px 0 #272729;
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
</style>