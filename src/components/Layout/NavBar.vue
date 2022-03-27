<template>
  <nav class="navbar is-success" role="navigation" aria-label="main navigation">
    <div class="container is-max-desktop px-2">
      
      <div class="navbar-brand">
        <div @click="$router.push({ name: 'notes' })"
          class="navbar-item is-size-4 is-family-monospace is-clickable">
          Noteballs
        </div>

        <a 
          aria-label="menu" 
          @click.prevent="showMobileNav = !showMobileNav"
          class="navbar-burger" 
          :class="{ 'is-active': showMobileNav }"
          aria-expanded="false"
          data-target="navbarBasicExample"
          ref="navbarBorgarRef"
          role="button">

          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div 
        id="navbarBasicExample" 
        class="navbar-menu"
        :class="{ 'is-active': showMobileNav }"
        ref="menuRef"
      >
        <div class="navbar-end">
          <router-link @click="showMobileNav = false" to="/" class="navbar-item" active-class="is-active">Notes</router-link>
          <router-link @click="showMobileNav = false" to="/stats" class="navbar-item" active-class="is-active">Stats</router-link>
        </div>
      </div>

    </div>
  </nav>
</template>

<script setup>

  import { ref } from 'vue'
  import { onClickOutside } from '@vueuse/core'

  /*
    mobile nav
  */

  const showMobileNav = ref(false) 

  /*
    click outside to close
  */

  const menuRef = ref()
  const navbarBorgarRef = ref()

  onClickOutside(menuRef, (/*event*/) => {
    showMobileNav.value = false
  }, {
    ignore: [navbarBorgarRef]
  })
</script>

<style>
@media (max-width: 1023px) {
  .navbar-menu {
    /* position over the top */
    position: absolute;
    left: 0;
    width: 100%;
  }
}
</style>