<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import SidebarNavLayout from './components/Base/SidebarNavLayout.vue'
</script>

<template>
  <div dir="rtl">
    <SidebarNavLayout logoAddr="/logo.svg" />
    <!-- <header>
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

      <div class="wrapper">
        <HelloWorld msg="You did it!" />
        
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->

    <RouterView />
  </div>
</template>
