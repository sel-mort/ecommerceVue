<template>
  <star-rating @update:rating="setRating" :rating="rating" class="rating" :star-size="20" :show-rating="false" active-color="#f15574"></star-rating>
</template>

<script>
import StarRating from 'vue-star-rating';

export default {
    props: ['rating'],

    components: {
        StarRating
    },

    methods: {
        setRating(rating) {
            this.$emit('takeRating', rating);
        }
    },
}
</script>

<style>
.vue-star-rating[data-v-f675a548] {
    display: inline-block;
    vertical-align: middle;
}
    .rating {
        display: inline-block;
        font-size: 1rem;
    }
</style>