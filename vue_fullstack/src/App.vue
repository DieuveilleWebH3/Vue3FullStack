<script setup>
  
  import NavBar from "./components/NavBar.vue";

</script>

<template>

    <div class="container">
    
        <header>
            <NavBar />
        </header>
        
        <router-view />
    </div>
    
</template>

<style>
@import "bootstrap/dist/css/bootstrap.min.css";
</style>
