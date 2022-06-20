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

    <div class="authincation h-100">
        <div class="container h-100">

            <div class="row justify-content-center h-100 align-items-center">
                <div class="col-md-6">

                    <div class="authincation-content">

                        <div class="row no-gutters">

                            <div class="col-xl-12">
                                <div class="auth-form">
                                
                                    <h2 class="text-center mb-4">Welcome !</h2>
                                    <h4 class="text-center text-muted">Login to continue</h4>

                                
                                    <form method="post" class="needs-validation" novalidate>
                                        
                                        <div class="form-group">
                                            <label for="email" class="mb-1"><strong>Email address *</strong></label>

                                            <input type="email" style="color: black;" class="form-control" id="email" name="email" placeholder="Provide your email address" required>

                                            <div class="invalid-feedback">
                                                This field is mandatory.
                                            </div>
                                        </div>
                                        
                                        <div class="form-group">
                                            <label for="password" class="mb-1"><strong>PASSWORD *</strong></label>
                                            <input type="password" style="color: black;" class="form-control" id="password" name="password" placeholder="Saisissez votre mot de passe" required>

                                            <div class="invalid-feedback">
                                                this field is mandatory.
                                            </div>
                                        </div>

                                        <div class="form-row d-flex justify-content-between mt-4 mb-2">
                                            <div class="form-group">
                                            <div class="custom-control custom-checkbox ml-1">
                                                    <input type="checkbox" style="color: black;" class="custom-control-input" id="basic_checkbox_1">
                                                    <label class="custom-control-label" for="basic_checkbox_1">Remember me</label>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <a class="" href="#">Forgot password ?</a>
                                            </div>
                                        </div>

                                        <div class="text-center">
                                            <button type="submit" class="btn btn-primary text-white btn-block">Login</button>
                                        </div>

                                    </form>

                                    <div class="new-account mt-3">
                                        <p class="">You don't have an account yet ? <a class="text" style="color: #e4032e;" href="{% url 'register' %}"> Sign Up </a></p>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>



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
