<template>
  <div class="main">
    <h1><b-icon icon="exclamation-circle-fill" variant="danger" /></h1>
    <h1>Error</h1>
    <h4>
      Trong thế giới Internet rộng lớn này, xin đừng để lạc mất nhau
    </h4>
    <nuxt-link to="/">
      Back to home
    </nuxt-link>
  </div>
</template>
<script>
export default {
  layout: 'empty'
}
</script>
<style lang="scss" scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  background-image: url('@/assets/images/backgrounds/lost.jpg');
  color: white;
  background-size: cover;
  background-position: center;
}
</style>
