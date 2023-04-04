<template>
    <div class="form-container">
        <div class="side-img">
            <img src="https://images.unsplash.com/photo-1628911774602-74a0cfee9b0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="products">
        </div>
        <form class="signup-form" @submit.prevent="submit">
            <label for="username">
                Username
                <input type="text" id="username" name="username" v-model="username" required>
            </label>
            <label for="password">
                Password
                <input type="password" id="password" name="password" v-model="password" required>
            </label>
            <label for="repass">
                Confirm Password
                <input type="password" id="repass" name="repass" v-model="repass" required>
            </label>
            <button class="submit-btn">Subit</button>
        </form>
    </div>
  
</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: '',
            repass: '',
        }
    },
    methods: {
        submit() {
            console.log(this.username, this.password, this.repass);
        }
    }

}
</script>

<style>
    .form-container {
        display: flex;
        width: 80%;
        margin: 0 auto;
    }

    .signup-form {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        flex-basis: 60%;
    }

    .side-img {
        flex-basis: 40%;
    }
</style>