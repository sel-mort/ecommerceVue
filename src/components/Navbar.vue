<template>
    <div class="navbar">
        <h2 class="logo"><span class="e">E</span>-Store<span class="x">X</span></h2>
        <nav>
            <ul class="left-bar">
                <li><router-link :to="{name: 'home'}">Home</router-link></li>
                <!-- <li><router-link :to="{name: 'product'}">Product</router-link></li> -->
            </ul>
            <template v-if="authIsReady">
                <div class="right-bar-container">
                    <ul class="right-bar">
                        <li class="checkout">
                            <router-link :to="{ name: 'cart' }"></router-link>
                        </li>
                        <li class="cart" @click="toggleCart">
                            <!-- <router-link :to="{name: 'cart'}"> -->
                                <font-awesome-icon :icon="['fa', 'cart-shopping']" />
                                <span class="items-length">{{ cartCounter }}</span>
                            <!-- </router-link> -->
                        </li>
                        <li v-if="!user"><router-link :to="{ name: 'signin' }">Log In</router-link></li>
                        <li v-if="!user"><router-link :to="{ name: 'signup' }" class="signup">SignUp</router-link></li>
                        <li v-if="user"><font-awesome-icon :icon="['fa', 'right-from-bracket']" @click="logout" class="logout"/></li>
                    </ul>
                </div>
            </template>
        </nav>
        <transition name="toggleCart">
                    <Cart v-if="showCart" class="cart-modal" @close="toggleCart" :check="check"></Cart>
        </transition>
    </div>
</template>

<script>
    import Cart from '@/components/Cart.vue'

    export default {
        name: 'Navbar',

        components: {
            Cart,
        },

        data() {
            return {
                showCart: false,
                check: true
            }
        },

        computed: {
            cartCounter() {
                return this.$store.getters.itemsCounter;
            },
            user() {
                return this.$store.state.user;
            },
            authIsReady() {
                return this.$store.state.authIsReady;
            }
        },

        methods : {
                toggleCart() {
                    this.showCart = !this.showCart;
                },
                logout() {
                    this.$store.dispatch('logout');
                }
        }
    }
</script>

<style scoped>
    .navbar {
        /* position: fixed;
        top: 0;
        left: 0;
        right: 0; */
        display: flex;
        align-items: center;
        justify-content: space-between;
        /* border-bottom: 2px solid crimson; */
        box-shadow: inset 0px -1px 0px #f3f3f4;
    }

    .logo {
        font-family: 'Edu NSW ACT Foundation', cursive;
        color: #222;
        margin: 0;
        padding: 0 1.5rem;
        width: 150px;
    }

    .logo:hover {
        color: #6e6d7a;
        cursor: pointer;
    }

    .e, .x {
        font-size: 1.5rem;
        font-weight: bolder;
        color: hsl(348, 85%, 64%);
    }

    nav {
        display: flex;
        justify-content: space-between;
        flex-basis: 90%;
        padding: .5rem 1.5rem;
    }

    .left-bar, .right-bar {
        display: flex;
        justify-content: flex-end;
    }

    li {
        list-style-type: none;
        font-weight: 600;
        
    }

    li:not(:last-child) {
        margin-right: .8rem;
        padding-right: .8rem;
        border-right: 2px solid#0d0c22;
    }

    li a {
        text-decoration: none;
        color: #6e6d7a;
    }

    li a:hover {
        color: #0d0c22;
    }

    .signup {
        color: white;
        background-color: hsl(348, 85%, 64%);
        padding: .6em 1em;
        border: none;
        border-radius: .5em;
    }

    .signup:hover {
        color: #f3f3f4;
        background-color: hsl(348, 93%, 48%);
        box-shadow: 0 0 5px hsl(348, 93%, 48%);
    }

    /* .cart-modal {
        background-color: #AAA;
        position: absolute;
        right: 200px;
        top: 55px;
        width: clamp(450px, 80vw, 1000px);
        height: clamp(450px, 80vh, 1000px);
        overflow: auto;
    } */
    .items-length {
        background-color: red;
        color: black;
        border-radius: 50%;
        font-size: .8em;
        font-weight: 800;
        padding: 0 .2em;
        position: relative;
    }
    .cart {
        cursor: pointer;
    }
    .logout {
        cursor: pointer;
    }
</style>