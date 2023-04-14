<template>
  <header class="header">
    <nav class="header__nav">
      <button type="button" class="header__burger-icon" @click="toggleSidebar">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <a class="header__logo" href="/">
        <img :src="props.logoAddr" alt="Logo!" />
      </a>
    </nav>
  </header>
  <main class="main">
    <transition name="slide" :appear="false">
      <aside class="main__aside" :class="isSidebarOpen ? 'main__aside-open' : 'main__aside-close'">
        test
      </aside>
    </transition>
  </main>
</template>
<script lang="ts">
interface ISidebarProps {
  logoAddr: string
}
</script>
<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps<ISidebarProps>()

const isSidebarOpen = ref(false)

function toggleSidebar() {
  isSidebarOpen.value = !isSidebarOpen.value
}
</script>
<style scoped>
.header {
  box-shadow: 0px 0px 24px 0px rgba(0, 0, 0, 0.1);
  width: 100%;
}
.header__nav {
  display: flex;
  flex-direction: row;
  justify-items: center;
  justify-content: space-between;
}
.header__burger-icon svg {
  display: none;
}
.header__logo {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.main {
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 4rem);
  display: flex;
  position: relative;
}
/* Extra small devices (phones) */
@media screen and (max-width: 575.98px) {
  /* Styles for screens up to 575.98px wide (phones) */
  .header {
    padding: 0.8rem;
  }
  .header__burger-icon svg {
    display: block;
    width: 1.7rem;
    height: 1.7rem;
  }
  .header__logo {
    max-width: 2rem;
    height: 100%;
  }
  .main__aside {
    position: fixed;
    right: -100%;
    top: 4rem;
    width: 80%;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
    border-left: 1rem solid black;
  }
  .main__aside-open {
    animation-name: slide-in;
  }
  .main__aside-close {
    animation-name: slide-out;
  }
}

/* Large devices (large desktops and wide screens) */
@media screen and (min-width: 992px) {
  .header {
    padding: 1rem 3rem;
    max-height: 4rem;
  }
  .header__logo {
    max-width: 2.3rem;
    height: 100%;
  }
  /* Styles for screens wider than 1200px (extra large desktops and wide screens) */
  .main__aside {
    position: static;
    width: 20%;
    height: 100%;
    min-height: calc(100vh - 4rem);
    border-left: 1rem solid black;
  }
}
.slide-enter-active,
.slide-leave-active {
  transition: right 0.5s ease-in-out;
}
.slide-enter-from,
.slide-leave-to {
  right: -100%;
}
.slide-enter-to,
.slide-leave-from {
  right: 0;
}
@keyframes slide-out {
  0% {
    right: 0;
  }
  100% {
    right: -100%;
  }
}

@keyframes slide-in {
  0% {
    right: -100%;
  }
  100% {
    right: 0;
  }
}
</style>
