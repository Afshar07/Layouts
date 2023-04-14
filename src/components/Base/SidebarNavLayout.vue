<template>
  <header class="header">
    <nav class="header__nav">
      <button type="button" class="header__burger-icon">
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
</template>
<script lang="ts">
interface ISidebarProps {
  logoAddr: string
}
</script>
<script setup lang="ts">
const props = defineProps<ISidebarProps>()
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
}

/* Small devices (tablets) */
@media screen and (min-width: 576px) and (max-width: 767.98px) {
  /* Styles for screens between 576px and 767.98px wide (tablets) */
}

/* Medium devices (desktops and laptops) */
@media screen and (min-width: 768px) and (max-width: 991.98px) {
  /* Styles for screens between 768px and 991.98px wide (desktops and laptops) */
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
}
</style>
