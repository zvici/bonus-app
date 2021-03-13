<template>
  <section>
    <div class="page-register">
      <b-card class="card-register shadow rounded">
        <b-card-title class="text-center font-weight-bold">
          Register Account
        </b-card-title>
        <b-form @submit.prevent="onSubmit">
          <b-row>
            <b-form-group
              id="input-group-fristName"
              label="First name:"
              label-for="input-firstname"
              class="col-sm-6"
            >
              <b-form-input
                id="input-firstname"
                type="text"
                placeholder="Enter first name"
                :disabled="disabled"
              />
            </b-form-group>
            <b-form-group
              id="input-group-lastName"
              label="Last name:"
              label-for="input-lastname"
              class="col-sm-6"
            >
              <b-form-input
                id="input-lastname"
                type="text"
                placeholder="Enter last name"
                :disabled="disabled"
              />
            </b-form-group>
          </b-row>
          <b-form-group
            id="input-group-phone"
            label="Phone: "
            label-for="input-phone"
          >
            <b-form-input
              id="input-phone"
              type="text"
              placeholder="Enter phone"
              :disabled="disabled"
            />
          </b-form-group>
          <b-form-group
            id="input-group-birthday"
            label="Birthday: "
            label-for="input-birthday"
          >
            <b-form-datepicker id="input-birthday" />
          </b-form-group>
          <b-form-group
            id="input-group-email"
            label="Email:"
            label-for="input-email"
          >
            <b-form-input
              id="input-email"
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
            description="Password must be 6 characters or more"
          >
            <b-form-input
              id="current-password"
              v-model="form.password"
              type="password"
              placeholder="Enter password"
              required
              :disabled="disabled"
            />
          </b-form-group>
          <b-form-group
            id="input-group-confirmpassword"
            label="Confirm password:"
            label-for="input-confirmpassword"
          >
            <b-form-input
              id="new-password"
              v-model="form.confirmPassword"
              type="password"
              placeholder="Enter confirm password"
              required
              :disabled="disabled"
              :state="confirmPasswordState"
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
                Submit
              </b-button>
            </b-overlay>
            <hr>
            <span>Have your account?
              <nuxt-link to="/login">Login here</nuxt-link></span>
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
        password: '',
        confirmPassword: ''
      },
      busy: false,
      disabled: false,
      confirmPasswordState: null
    }
  },
  head: {
    title: 'Register'
  },
  methods: {
    checkValidPassword () {
      return this.form.password === this.form.confirmPassword
    },
    onSubmit () {
      const validPassword = this.checkValidPassword()
      if (validPassword) {
        this.confirmPasswordState = null
        this.busy = true
        this.disabled = true
        this.$store
          .dispatch('authenticateUser', {
            email: this.form.email,
            password: this.form.password,
            isLogin: false
          })
          .then((result) => {
            if (result.success) {
              this.$bvToast.toast(
                `Account: ${this.form.email} You will be redirected to the login page in 3 seconds`,
                {
                  title: `Register ${'success' || 'default'}`,
                  variant: 'success',
                  solid: true
                }
              )
              this.busy = false
              this.disabled = false
              setTimeout(() => {
                this.$router.push('/login')
              }, 2000)
            }
          })
          .catch((e) => {
            this.$bvToast.toast(`${e.data.error.message}`, {
              title: `Register ${'failed' || 'default'}`,
              variant: 'danger',
              solid: true
            })
            this.busy = false
            this.disabled = false
          })
      } else {
        this.confirmPasswordState = false
      }
    }
  }
}
</script>
<style lang="css" scoped>
section {
  background-color: rgb(20, 203, 118);
  background-image: linear-gradient(
    to bottom right,
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
.page-register {
  width: 400px;
}
.page-register .card-login {
  width: 90%;
  margin: auto;
}
.page-register .card-title {
  color: var(--green);
}
.b-overlay-wrap,
.btn {
  width: 100%;
}
</style>
