<template>
  <div>
    <default-header />
    <b-container fluid="sm" class="d-flex">
      <sidebar-menu />
      <Nuxt />
    </b-container>
    <default-footer />
  </div>
</template>
<script>
import DefaultHeader from '@/components/Header/DefaultHeader'
import DefaultFooter from '@/components/Footer/DefaultFooter'
import SidebarMenu from '@/components/Sidebar/SidebarMenu'
export default {
  components: {
    DefaultHeader,
    DefaultFooter,
    SidebarMenu
  }
}
</script>
<style></style>
