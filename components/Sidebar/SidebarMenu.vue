<template>
  <section class="side-bar pr-2 pt-2">
    <b-list-group class="pt-2">
      <b-list-group-item to="/" active-class>
        <b-icon icon="house-fill" class="mr-3" />Home
      </b-list-group-item>
      <b-list-group-item to="/reward">
        <b-icon icon="cart-fill" class="mr-3" />Reward
      </b-list-group-item>
      <b-list-group-item to="/awards">
        <b-icon icon="gift-fill" class="mr-3" />Awards
      </b-list-group-item>
      <b-list-group-item to="/analytics">
        <b-icon icon="bar-chart-fill" class="mr-3" />Analytics
      </b-list-group-item>
      <b-list-group-item to="/integrations">
        <b-icon icon="plug-fill" class="mr-3" />Integrations
      </b-list-group-item>
    </b-list-group>
  </section>
</template>
<style lang="scss" scoped>
.side-bar {
  width: 24%;
  height: min-content;
  position: sticky;
  top: calc(60px);
  left: 0px;
  border-radius: 5px;
}
.list-group-item-action {
  color: rgb(200, 204, 208);
  border: none;
  font-weight: 600;
}
.nuxt-link-exact-active {
  color: #00c58e;
  border-right: #00c58e solid 3px;
}
.list-group {
  border-radius: 0;
  background-color: white;
}
</style>
