<template>
    <div class="form-container">
        <div class="left-side">
            <div class="title-container">
                <h2 class="logo"><span>E</span>-Storix</h2>
                <h1 class="form-title">Create an account</h1>
            <p class="sub-title">The faster you fill up, the faster you shop</p>
            </div>
            
            <form class="signup-form" @submit.prevent="submit">
                <div class="user-box">
                    <input type="text" id="username" name="username" v-model="username" required class="user-input">
                    <label for="username" class="user-label">Username</label>
                </div>
                <div class="user-box">
                    <input type="email" id="email" name="email" v-model="email" required class="user-input">
                    <label for="email" class="user-label">Email</label>
                </div>
                <div class="user-box">
                    <input type="password" id="password" name="password" v-model="password" required class="user-input">
                    <label for="password" class="user-label">Password</label>
                </div>
                <button class="submit-btn">Create Account</button>
                <p class="already">already have an account? <a href="">Log in</a> </p>
            </form>
        </div>
        
        <div class="side-img">
            <h2 class="right-side-title">E-STORIX
            </h2>
            <span>The Store You Need</span>
            <img src="https://images.unsplash.com/photo-1628911774602-74a0cfee9b0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="products">
        </div>
    </div>
  
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        return {
            username: ref(''),
            email: ref(''),
            password: ref(''),
        }
    },
    methods: {
        submit() {
            console.log(this.username, this.password, this.repass);
        }
    }

}
</script>

<style scoped>
    .form-container {
        display: flex;
        width: 80%;
        height: 80vh;
        margin: 2rem auto;
        border-bottom-right-radius: 30px;
        border: 1px solid #f3f3f3;
        padding: 1rem;
        max-width: 800px;
        gap: 1rem;
    }

    .left-side {
        flex-basis: 70%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 1rem;
    }

    h1, h2, p {
        margin: 0;
        padding: 0;
    }

    .title-container {
        text-align: left;
        padding: 1rem;
    }

    .logo {
        font-size: 2.5rem;
        font-weight: 700;
        color: hsl(348, 85%, 64%);
    }

    .sub-title {
        font-size: .8rem;
        font-weight: 400;
        color: #555;}

    .form-title {
        margin-top: 2rem;
    }
    .signup-form {
        display: flex;
        flex-direction: column;
        justify-content: stretch;
        margin-top: 1rem;
        padding: 0 1rem;
        width: 100%;
    }

    .side-img {
        position: relative;
        flex-basis: 60%;
    }

    .right-side-title {
        position: absolute;
        color: white;
        border: 3px solid hsl(348, 85%, 64%);
        padding: .5rem 1rem;
        top: 30%;
        left: 50%;
        transform: translate(-50%, -30%);
    }

    .right-side-title + span {
        position: absolute;
        top: 40%;
        left: 10%;
        right: 10%;
        color: hsl(348, 85%, 64%);
        text-shadow: 0 0 10px #fff;
        display: block;
        font-size: 1.2rem;
        font-weight: 600;
    }

    .side-img img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-bottom-right-radius: 25px;
        border-top-left-radius: 25px;
    }

    .user-box {
        position: relative;
        /* width: 100%; */
    }

    .user-input {
        width: 100%;
        padding: 0.5em 0;
        font-size: 1rem;
        color: #333;
        margin-bottom: 1.5rem;
        border: none;
        border-bottom: 2px solid #151010;
        outline: none;
        background: transparent;
    }

    .user-label {
        position: absolute;
        top: 0;
        left: 0;
        padding: 0.5em 0;
        font-size: 1rem;
        color: #0c0c0c;
        pointer-events: none;
        transition: 0.5s;
    }

    .user-input:focus ~ .user-label,
    .user-input:valid ~ .user-label {
        top: -1.2em;
        left: 0;
        color: #000;
        font-size: 0.8rem;
    }

    .submit-btn {
        background: #000;
        color: #fff;
        border: none;
        font-size: .9rem;
        padding: 0.5rem 1rem;
        border-radius: 5px;
        cursor: pointer;
        transition: 0.5s;
    }

    .submit-btn:hover {
        /* background: #333; */
        box-shadow: 0 0 10px hsl(348, 85%, 64%);
    }

    .already {
        font-size: .8rem;
        font-weight: 400;
        color: #555;
        margin-top: 1rem;
    }

    .already a {
        color: hsl(348, 85%, 64%);
        font-weight: 600;
        text-decoration: none;
    }
</style>