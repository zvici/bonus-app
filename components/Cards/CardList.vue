<template>
  <b-col col sm="3" class="p-2">
    <b-card
      :title="keyword"
      :img-src="picture"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
    >
      <b-card-text>
        {{ keyword }}
      </b-card-text>
      <b-button href="#" variant="primary">
        Go somewhere
      </b-button>
    </b-card>
  </b-col>
</template>
<script>
export default {
  props: {
    keyword: {
      type: String,
      required: true
    },
    picture: {
      type: String,
      required: true
    }
  }
}
</script>
