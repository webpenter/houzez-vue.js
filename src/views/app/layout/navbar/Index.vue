<template>
  <div id="navbar">
   <Logo/>
    <div id="nav-links">
      <ul id="nav-links-ul">
        <Nav/>
        <CreateListingBtn/>
      </ul>
    </div>
    <div id="nav-links" class="nav-links-mobile">
      <ul id="nav-links-ul">
        <Nav/>
        <CreateListingBtn/>
        <LoginSignupBtns/>
      </ul>
    </div>
    <div class="create-listing">
      <LoginSignupMainBtns/>
      <CreateListingMainBtn/>
    </div>
    <div id="hamburger-container">
      <i class="fa-solid fa-bars"></i>
      <i class="fa-solid fa-xmark"></i>
    </div>
  </div>
</template>

<script setup>
import {onMounted} from "vue";
import Nav from "@/views/app/layout/navbar/Nav.vue";
import CreateListingBtn from "@/views/app/layout/navbar/CreateListingBtn.vue";
import CreateListingMainBtn from "@/views/app/layout/navbar/CreateListingMainBtn.vue";
import Logo from "@/views/app/layout/navbar/Logo.vue";
import LoginSignupBtns from "@/views/app/layout/navbar/LoginSignupBtns.vue";
import LoginSignupMainBtns from "@/views/app/layout/navbar/LoginSignupMainBtns.vue";

onMounted(() => {
  const bars = document.querySelector("#hamburger-container .fa-bars");
  const xmark = document.querySelector("#hamburger-container .fa-xmark");
  const navLinks = document.querySelector(".nav-links-mobile");

  bars.style.display = "inline";
  xmark.style.display = "none";
  navLinks.style.display = "none";

  document.getElementById("hamburger-container").addEventListener("click", function () {
    if (bars.style.display === "none") {
      bars.style.display = "inline";
      xmark.style.display = "none";
      navLinks.style.display = "none";
    } else {
      bars.style.display = "none";
      xmark.style.display = "inline";
      navLinks.style.display = "block";
    }
  });
});
</script>