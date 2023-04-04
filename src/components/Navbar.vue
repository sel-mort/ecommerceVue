<template>
    <div class="navbar">
        <h2 class="logo">E-Store</h2>
        <nav>
            <ul class="left-bar">
                <li><router-link :to="{name: 'home'}">Home</router-link></li>
                <li><router-link :to="{name: 'product'}">Product</router-link></li>
            </ul>
            <ul class="right-bar">
                <li>
                    <router-link :to="{name: 'cart'}">
                        <font-awesome-icon :icon="['fa', 'cart-shopping']" />
                        <span class=""></span>
                    </router-link>
                </li>
                <li><router-link :to="{name: 'sign'}">Log In</router-link></li>
                <li><router-link :to="{name: 'sign'}" class="signup">SignUp</router-link></li>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'Navbar'
    }
</script>

<style scoped>
    .navbar {
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
    }

    .logo:hover {
        color: #6e6d7a;
        cursor: pointer;
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
        background-color: hsl(348, 69%, 70%);;
    }
</style>