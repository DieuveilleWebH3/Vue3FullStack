<script setup>
import { ref, watch } from "vue";
import axios from "axios";
import router from "../router";

const email = ref("");
const password = ref("");
const isChecked = ref(false);

const handleSignIn = async () => {
  console.log(email.value, password.value);
  try {
    const res = await axios.post("http://localhost:5000/user/login", {
      email: email.value,
      password: password.value,
    });
    console.log(res.data);
    if (isChecked.value) {
      localStorage.setItem("user", JSON.stringify(res.data));
    }
    // router.push({ name: "home" });
  } catch (err) {
    console.log(err.message);
  }
};
</script>

<template>

    <h1> Sign In </h1>

    <form class="my-3" @submit.prevent="handleSignIn">
        <div class="form-group">
        
            <label for="exampleInputEmail1">Email</label>

            <input type="email" class="form-control" placeholder="Provide your email ..." v-model="email" />

        </div>
        
        <div class="form-group">
            <label for="exampleInputPassword1">Mot de passe</label>

            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Provide your password" v-model="password" />
        </div>

        <div class="form-check">

            <input type="checkbox" class="form-check-input" id="exampleCheck1" v-model="isChecked" />
            
            <label class="form-check-label" for="exampleCheck1">
                Souvnenir de moi
            </label>

        </div>

        <button type="submit" class="btn btn-primary"> Login </button>
    </form>
</template>
