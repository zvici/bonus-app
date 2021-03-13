<template>
  <div class="d-flex main">
    <div class="content-left pt-2">
      <create-feed />
      <feed
        v-for="(feed, index) in listfeeds"
        :key="index"
        :content="feed.content"
        :point="feed.point"
        :user="feed.user"
        :image="feed.image"
        :title="feed.title"
        :icon="feed.icon"
      />
    </div>
    <div class="content-right p-2">
      <div class="content-right__body">
        <b-card class="text-center border-0 rounded mb-2">
          <b-card-text>
            You have <label class="font-weight-bold"> 25 point</label> to redeem
          </b-card-text>
          <b-button variant="outline-success" class="mb-2">
            Pick a reward
          </b-button>
          <a href="">or give a gift 🎁</a>
        </b-card>
        <b-card class="text-center border-0 rounded">
          <b-embed
            type="iframe"
            aspect="16by9"
            src="https://www.youtube.com/embed/Rb1cv3T5HF8?rel=0"
            allowfullscreen
          />
        </b-card>
      </div>
    </div>
  </div>
</template>
<script>
import Feed from '@/components/Feeds/Feed'
import CreateFeed from '@/components/Feeds/CreateFeed'
export default {
  components: {
    Feed,
    CreateFeed
  },
  middleware: ['check-auth', 'auth'],
  async asyncData ({ $axios }) {
    // eslint-disable-next-line nuxt/no-this-in-fetch-data
    let listfeeds = []
    await $axios
      .$get('https://nuxt-demo-nha-default-rtdb.firebaseio.com/feeds.json')
      .then((data) => {
        // eslint-disable-next-line no-console
        listfeeds = data
        // eslint-disable-next-line no-console
        console.log(data)
      })
    return { listfeeds }
  }
}
</script>
<style scoped lang="scss">
.main {
  width: 76%;
  .content-left {
    width: 67.6%;
  }
  .content-right {
    width: 32.4%;
    .content-right__body {
      height: min-content;
      position: sticky;
      top: calc(70px);
      left: 0px;
      button {
        display: block;
        width: 99%;
        margin: auto;
      }
    }
  }
}
</style>
