<template>
  <section>
    <div class="page-login">
      <b-card class="card-login shadow rounded">
        <b-card-title class="text-center font-weight-bold">
          B<label for="">o</label>nus
        </b-card-title>
        <b-form @submit.prevent="onSubmit">
          <b-form-group
            id="input-group-email"
            label="Email:"
            label-for="input-email"
          >
            <b-form-input
              id="email"
              v-model="form.email"
              type="email"
              placeholder="Enter email"
              required
              :disabled="disabled"
            />
          </b-form-group>
          <b-form-group
            id="input-group-password"
            label="Password:"
            label-for="input-password"
          >
            <b-form-input
              id="password"
              v-model="form.password"
              type="password"
              placeholder="Enter password"
              required
              :disabled="disabled"
            />
          </b-form-group>
          <div class="text-center">
            <b-overlay
              :show="busy"
              rounded
              opacity="0.6"
              spinner-small
              spinner-variant="success"
              class="d-inline-block"
            >
              <b-button type="submit" variant="success">
                Login
              </b-button>
            </b-overlay>
            <hr>
            <span>Have not your account?
              <nuxt-link to="/register">Register here</nuxt-link></span>
          </div>
        </b-form>
      </b-card>
    </div>
  </section>
</template>
<script>
export default {
  layout: 'auth',
  data () {
    return {
      form: {
        email: '',
        password: ''
      },
      busy: false,
      disabled: false,
      isLogin: true
    }
  },
  head: {
    title: 'Login'
  },
  methods: {
    onSubmit () {
      this.confirmPasswordState = null
      this.busy = true
      this.disabled = true
      this.$store
        .dispatch('authenticateUser', {
          email: this.form.email,
          password: this.form.password,
          isLogin: true
        })
        .then((result) => {
          // eslint-disable-next-line no-console
          if (result.success) {
            this.$bvToast.toast(`Account: ${this.form.email}`, {
              title: `Login ${'success' || 'default'}`,
              variant: 'success',
              solid: true
            })
            this.busy = false
            this.disabled = false
            this.$router.push('/')
          }
        })
        .catch((e) => {
          this.$bvToast.toast(`${e.data.error.message}`, {
            title: 'Login failed',
            variant: 'danger',
            solid: true
          })
          this.busy = false
          this.disabled = false
        })
    }
  }
}
</script>
<style lang="css" scoped>
section {
  background-color: rgb(20, 203, 118);
  background-image: linear-gradient(
    to top left,
    rgb(255, 255, 255) 50%,
    rgba(255, 255, 255, 0) 50%
  );
  background-size: 100% 100%, 50px 50px;
  background-position: left top, left bottom;
  background-repeat: no-repeat;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.page-login {
  width: 400px;
}
.page-login .card-login {
  width: 90%;
  margin: auto;
}
.page-login .card-title {
  color: black;
  font-size: 2rem;
}
.page-login .card-title label {
  color: var(--green);
}
.b-overlay-wrap,
.btn {
  width: 100%;
}
</style>
