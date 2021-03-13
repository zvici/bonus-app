<template>
  <b-card class="mb-2">
    <template #header>
      <div>
        <b-avatar variant="success" class="font-weight-bold">
          +5
        </b-avatar>
        <b-avatar
          variant="info"
          src="https://thispersondoesnotexist.com/image"
        />
      </div>
      <div>
        <b-dropdown
          size="lg"
          variant="link"
          toggle-class="text-decoration-none"
          no-caret
        >
          <template #button-content>
            <b-icon icon="three-dots-vertical" variant="dark" />
          </template>
          <b-dropdown-item href="#">
            Action
          </b-dropdown-item>
          <b-dropdown-item href="#">
            Another action
          </b-dropdown-item>
          <b-dropdown-item href="#">
            Something else here...
          </b-dropdown-item>
        </b-dropdown>
      </div>
    </template>
    <b-card-text>
      <label for="" class="font-weight-bold">{{ user }}:</label> @linhmeu +{{
        point
      }}
      {{ content }}
    </b-card-text>
    <b-img :src="image" fluid alt="Responsive image" />
    <template #footer>
      <div class="react-comments-info">
        <div>
          <label
            v-for="(item, index) in icon"
            :key="index"
          >{{ item.num }} {{ item.icon }}
          </label>
        </div>
        <a href="">10 comments</a>
      </div>
      <div class="react-comments-button">
        <a href=""><fa icon="thumbs-up" class="react mr-1" />React</a>
        <a
          @click="() => (isComment = !isComment)"
        ><fa icon="comment" class="comment mr-1" />Comments</a>
        <a href=""><fa icon="heart" class="heart mr-1" />Add On</a>
      </div>
      <div v-if="isComment" class="comments-input">
        <b-form-input placeholder="Enter your name" />
      </div>
    </template>
  </b-card>
</template>
<script>
export default {
  props: {
    content: {
      type: String,
      required: true,
      default: ''
    },
    point: {
      type: Number,
      required: true,
      default: 0
    },
    user: {
      type: String,
      required: true,
      default: ''
    },
    image: {
      type: String,
      required: true,
      default: ''
    },
    title: {
      type: String,
      required: true,
      default: ''
    },
    icon: {
      type: Array,
      required: true,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: ['']
    }
  },
  data () {
    return {
      isComment: false
    }
  }
}
</script>
<style lang="scss" scoped>
.card-header {
  align-items: center;
  background-color: white;
  display: flex;
  justify-content: space-between;
  padding: 10px 0px 0px 15px;
  border: none;
}
.card-body {
  label {
    color: #00c58e;
    margin: 0;
  }
}
.card-footer {
  background-color: white;
  transition: 0.25s all ease-in;
  .react-comments-info {
    display: flex;
    justify-content: space-between;
    align-self: center;
    label {
      background-color: rgba($color: #3384cc, $alpha: 0.1);
      border: 0.5px rgba($color: #3384cc, $alpha: 0.5) solid;
      border-radius: 20px;
      padding: 2px 4px;
      margin-right: 4px;
    }
  }
  .react-comments-button {
    padding: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    a:link,
    a:visited {
      font-weight: bold;
      color: #7c7c7c;
      text-decoration: none;
    }
    a:hover {
      cursor: pointer;
      color: #00c58e;
    }
  }
}
</style>
