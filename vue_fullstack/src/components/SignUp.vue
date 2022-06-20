
<script setup>

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
                                    <h4 class="text-center text-muted">Register to continue</h4>

                                    <br>
                                
                                    <form method="post" class="needs-validation" novalidate>
                                        
                                        <div class="form-group">
                                            <label for="username" class="mb-1"><strong>Username *</strong></label>

                                            <input type="text" style="color: black;" class="form-control" id="username" name="username" placeholder="Saisissez votre nom d'utilisateur" required>

                                            <div class="invalid-feedback">
                                                This field is mandatory.
                                            </div>
                                        </div>

                                        <br>

                                        <div class="form-group">
                                            <label for="email" class="mb-1"><strong>Email address *</strong></label>

                                            <input type="email" style="color: black;" v-model="email" class="form-control" id="email" name="email" placeholder="Provide your email address" required>

                                            <div class="invalid-feedback">
                                                This field is mandatory.
                                            </div>
                                        </div>

                                        <br>
                                        
                                        <div class="form-group">
                                            <label for="password" class="mb-1"><strong>Password *</strong></label>
                                            
                                            <input type="password" style="color: black;" v-model="password" class="form-control" id="password" name="password" placeholder="Provide your password" required>

                                            <div class="invalid-feedback">
                                                this field is mandatory.
                                            </div>
                                        </div>

                                        <br>
                                        
                                        <div class="form-group">
                                            <label for="passwordConfirmation" class="mb-1"><strong>Password Confirmation *</strong></label>
                                            
                                            <input type="password" style="color: black;" class="form-control" id="passwordConfirmation" name="passwordConfirmation" placeholder="Provide your password again" required>

                                            <div class="invalid-feedback">
                                                this field is mandatory.
                                            </div>
                                        </div>

                                        <br>
                                        

                                        <div class="text-center">
                                            <button type="submit" class="btn btn-primary text-white btn-block">Login</button>
                                        </div>

                                    </form>

                                    <div class="new-account mt-3">
                                        <p class="">Already have an account ? <a class="text" style="color: #e4032e;" href="#"> Register </a></p>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>


</template>


<style>

    .invalid { border-color: red; }

    #error { color: red }

</style>
