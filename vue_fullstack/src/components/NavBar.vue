<script>

    import { RouterLink } from "vue-router";
    import router from "../router";

    const navigateToSignIn = () => {
        router.push({ name: "signin" });
    };


    import {
    MDBNavbar,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBCollapse,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem
  } 
  
  from 'mdb-vue-ui-kit';
  import { ref } from 'vue';
  export default {
    components: {
      MDBNavbar,
      MDBNavbarToggler,
      MDBNavbarBrand,
      MDBNavbarNav,
      MDBNavbarItem,
      MDBCollapse,
      MDBDropdown,
      MDBDropdownToggle,
      MDBDropdownMenu,
      MDBDropdownItem
    },

    setup() {
      const collapse6 = ref(false);
      const dropdown9 = ref(false);
      return {
        collapse6,
        dropdown9
      }
    }
  };

</script>


<template>

    <!--
    <nav class="navbar navbar-expand-lg navbar-light bg-light">

        <router-link to="/" class="navbar-brand">Home</router-link>

        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">

            <li class="nav-item active">
                <router-link to="/signup" class="nav-link">Register</router-link>
            </li>
            
            
            <li class="nav-item active">
                <router-link to="/about" class="nav-link">About</router-link>
            </li>
        </ul>

        <div class="nav-item my-2 my-lg-0">
            <button class="btn btn-primary" @click="navigateToSignIn">
                Login
            </button>
        </div>

    </nav>
    -->

    
    
  <MDBNavbar expand="lg" light bg="light" container>
    <!-- Toggle button -->
    <MDBNavbarToggler
      target="#navbarCenterAlignExample"
      @click="collapse6 = !collapse6"
    ></MDBNavbarToggler>

    <!-- Collapsible wrapper -->
    <MDBCollapse id="navbarCenterAlignExample" v-model="collapse6">
      <MDBNavbarNav center class="mb-2 mb-lg-0">
        <!-- Center links -->
        <MDBNavbarItem to="/" active>
          Home
        </MDBNavbarItem>

        <MDBNavbarItem to="/about" href="#" active>
          About
        </MDBNavbarItem>

        
        <!-- Navbar dropdown -->
        <MDBDropdown class="nav-item" v-model="dropdown9">
          <MDBDropdownToggle
            tag="a"
            class="nav-link"
            @click="dropdown9 = !dropdown9"
            >Connexion</MDBDropdownToggle
          >

        <!-- The logic here is : when no user is connected, visitors see dropdown for login and register -->
        <MDBDropdownMenu>
            <MDBDropdownItem to="/signin" href="#"> Login </MDBDropdownItem>
            <MDBDropdownItem to="/signup" href="#"> Register </MDBDropdownItem>
        </MDBDropdownMenu>

        <!-- The logic here is : when a user is connected, they see dropdown for logout and profile -->
        <!--
        <MDBDropdownMenu>
            <MDBDropdownItem to="/profile" href="#"> Profile </MDBDropdownItem>
            <MDBDropdownItem to="/logout" href="#"> Logout </MDBDropdownItem>
        </MDBDropdownMenu>
        -->

        </MDBDropdown>

        <MDBNavbarItem
          to="#"
          disabled
          tabindex="-1"
          aria-disabled="true"
        >
          Disabled
        </MDBNavbarItem>
        <!-- Center links -->
      </MDBNavbarNav>
    </MDBCollapse>
    <!-- Collapsible wrapper -->
  </MDBNavbar>

</template>


<style>

</style>
