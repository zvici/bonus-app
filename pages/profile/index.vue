<template>
  <div>
    Profile
    <b-button @click="onLogout">
      Logout
    </b-button>
  </div>
</template>
<script>
export default {
  middleware: ['check-auth', 'auth'],
  methods: {
    onLogout () {
      this.$store.dispatch('logout')
      this.$router.push('/login')
    }
  }
}
</script>
