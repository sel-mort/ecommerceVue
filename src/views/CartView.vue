<template>
  <div class="container">
    <div class="left-side">
        <Cart class="cart" :check="false"></Cart>
    </div>
    <div class="right-side">
        <div class="header">
            <h2>Payment Details</h2>
            <p>Complete your purchase by providing your payment details</p>
        </div>
        <form @submit.prevent="submit" class="form">
            <!-- <div class="user-details">
                <label for="firstName">
                    FirstName
                    <input type="text" id="firstName" name="firstName" ref="firstName">
                </label>
                <label for="firstName">
                    LastName
                    <input type="text" id="lastName" name="lastName" ref="lastName">
                </label>
            </div> -->
            <div class="email-details">
                <label for="email">
                    Email Address
                    <input type="email" id="email" name="email" v-model="email" required>
                </label>
            </div>
            <div>
                <label for="card-holder">
                    Card Holder
                    <input type="text" id="card-holder" name="card-holder" v-model="cardHolder" required>
                </label>
            </div>
            <div class="card-details">
                <label>Card Details
                    <div class="card-number">
                        <input type="number" class="card-field" maxlength="4" v-model="card1" required />-
                        <input type="number" class="card-field" maxlength="4" v-model="card2" required />-
                        <input type="number" class="card-field" maxlength="4" v-model="card3" required />-
                        <input type="number" class="card-field" maxlength="4" v-model="card4" required />
                    </div>
                </label>
                <div class="card-info">
                    <label for="" class="date">
                        Expiry Date
                        <div class="datec">
                            <input type="text" class="datem" maxlength="2" placeholder="mm" v-model="month" required><span>/</span>
                            <input type="text" class="datey" maxlength="2" placeholder="yy" v-model="year" required>
                        </div>
                    </label>
                    <label for="cvv">
                        CVV
                        <input type="text" class="cvv" maxlength="3" placeholder="cvv" v-model="cvv" required>
                    </label>
                </div>
            </div>
            <div class="address">
                <label for="address">
                    Billing Address 
                    <input type="text" id="address" name="address" v-model="address" required>
                </label>
            </div>
            <div class="summery">
                <div>
                    <label for="sub-total" class="fee">
                        Subtotal
                        <span>${{ subTotal }}</span>
                    </label>
                </div>
                <div>
                    <label for="fee" class="fee">
                        Platform Fee
                        <span>$5</span>
                    </label>
                </div>
                <div>
                    <label for="shipping" class="fee">
                        Shipping Fee
                        <span>$30</span>
                    </label>
                </div>
                <div>
                    <label for="total" class="total fee">
                        Total
                        <span>${{ total }}</span>
                    </label>
                </div>
            </div>
            <div v-if="error">{{ error }}</div>
            <input class="pay-btn" type="submit" :value="'Pay $' + total" />
        </form>
    </div>
  </div>
</template>

<script>
import Cart from '@/components/Cart.vue';
import { ref, computed } from 'vue';
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
    components: {
        Cart
    },

    setup() {

        const store = useStore();
        const router = useRouter();
        const error = '';

        const email = ref('');
        const cardHolder = ref('');
        const card1 = ref('');
        const card2 = ref('');
        const card3 = ref('');
        const card4 = ref('');
        const month = ref('');
        const year = ref('');
        const cvv = ref('');
        const address = ref('');

        const cardNumber = [];

        const subTotal = computed(() => store.getters.getSubTotal);
        const total = computed(() => subTotal.value + 5 + 30);

        const isDigit = (number) => /^\d+$/.test(number);
        const submit = () => {
            if (email.value !== '' && isDigit(card1.value) && isDigit(card2.value) && isDigit(card3.value) && isDigit(card4.value) && isDigit(month.value) && isDigit(year.value) && isDigit(cvv.value) && address.value !== '') {
                store.dispatch('clearAllItems');
                alert('done thanks for shopping in EstoreX')
                setTimeout(() => {
                    router.push('/');
                }, 1500);
            } else {
                error = 'You must enter all info';
            }
        }

        return { email, cardHolder, cardNumber, card1, card2, card3, card4, month, year, cvv, address, subTotal, total, error, submit }
    },
}
</script>

<style scoped>

    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }

    /* Fiv-modelox */
    input[type=number] {
    -moz-appearance: textfield;
    }
    
    .container {
        display: grid;
        grid-template-columns: minmax(400px, 1fr) minmax(300px, 1fr);
        gap: 10px;
        justify-content: center;
        padding: 1em;
        margin: 1rem 2rem;
    }

    @media (max-width: 1000px) {
        .container {
            grid-template-columns: 600px;
            grid-auto-rows: minmax(300px, auto) minmax(300px, 1fr);
            justify-content: center;
            gap: 20px;
        }
        .cart {
            flex-direction: column;
            position: static;
        }
    }

    .left-side {
        position: relative;
        width: 100%;
        display: flex;
        justify-content: center;
        max-width: 600px;
    }

    .cart {
        position: static;
        border: none;
        width: 100%;
        padding: 1em;
        /* margin: 3rem auto; */
        max-width: 700px;
    }
    .right-side {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 5rem;
        max-width: 600px;
    }
    form {
        display: flex;
        flex-direction: column;
        /* justify-content: center; */
    }
    .header {
        margin-bottom: 1em;
        text-align: center;
    }
    .header h2, p {
        margin: 0 auto;
    }

    .header p {
        font-size: .8rem;
        color: gray;
    }

    label {
        font-size: .8rem;
        display: flex;
        flex-direction: column;
        text-align: left;
        margin: .5em .1vw;
        padding: 0 .5em;
    }

    input {
        font-size: 1rem;
        padding: .3em;
        border: none;
        border: 2px solid #DDD;
        border-radius: .3em;
        width: 100%;
        margin: .2em;
    }

    input:focus {
        outline: none;
        box-shadow: 0 0 5px 1px #111;
    }
    .card-number {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-basis: 25%;
    }

    .card-number input {
        width: 20%;
        max-width: 80px;
    }
    .card-info {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
    }
    .datem, .datey, .cvv {
        flex-basis: 20%;
    }
    .date {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .datec {
        display: flex;
    }
    .pay-btn {
        color: white;
        font-size: 1rem;
        font-weight: 800;
        padding: .3em 1em;
        border: none;
        border-radius: .3em;
        background-color: hsl(335, 80%, 58%);
        width: 60%;
        cursor: pointer;
        margin: 0 auto;
    }

    .pay-btn:hover {
        box-shadow: 0 0 5px hsl(335, 80%, 58%);
    }
    .summery {
        margin: 1rem 0;
        padding: 1rem 0;
        border-top: 1px solid #DDD;
        border-bottom: 1px solid #DDD;
    }
    .fee {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-weight: 600;
    }
    .error {
        color: red;
        font-size: .8rem;
    }
</style>