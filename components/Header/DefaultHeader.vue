<template>
  <header>
    <div :class="`main ${scrollPosition > 60 ? 'show-shawdow' : ''}`">
      <div class="container-sm main__navbar">
        <nuxt-link to="/" class="logo">
          <img src="@/assets/images/logo/Bonus.svg" alt="">
        </nuxt-link>
        <div class="d-flex">
          <div class="d-flex  align-items-center">
            <b-avatar
              src="https://64.media.tumblr.com/5e1daa3d984b1b848bb396eacadc4750/172c7a777ab87fdd-39/s128x128u_c1/62020e6ac89ceaa7551b80d62ff77b4e4eeea27e.jpg"
            />
            <label for="" class="mx-2 mb-0 font-weight-bold">Thanh Nhã</label>
          </div>
          <div>
            <b-dropdown
              size="lg"
              variant="link"
              toggle-class="text-decoration-none"
              no-caret
              class="show-settings"
            >
              <template #button-content>
                <b-icon icon="caret-down-fill" variant="light" />
              </template>
              <b-dropdown-item href="#">
                Settings
              </b-dropdown-item>
              <b-dropdown-item @click="onLogout">
                Logout
              </b-dropdown-item>
            </b-dropdown>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  data () {
    return {
      scrollPosition: null
    }
  },
  mounted () {
    window.addEventListener('scroll', this.updateScroll)
  },
  methods: {
    updateScroll () {
      this.scrollPosition = window.scrollY
    },
    onLogout () {
      this.$store.dispatch('logout')
      this.$router.push('/login')
    }
  }
}
</script>
<style lang="scss" scoped>
header {
  height: 60px;
  .main {
    background: white;
    height: inherit;
    position: fixed;
    width: 100%;
    z-index: 2;
    .main__navbar {
      align-items: center;
      display: flex;
      justify-content: space-between;
      height: inherit;
    }
    .show-settings ul {
      border: none;
    }
  }
}
.show-shawdow {
  transition: 0.25s linear 0s;
  box-shadow: rgb(31 38 46 / 20%) 0px 1px 2px;
}
</style>
