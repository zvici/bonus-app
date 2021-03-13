<template>
  <b-card class="mb-2 input-feed">
    <template #header>
      <b-button variant="outline-success" class="mb-2 font-weight-bold">
        + Amount
      </b-button>
      <b-button variant="outline-success" class="mb-2 font-weight-bold">
        # Recipient
      </b-button>
      <b-button variant="outline-success" class="mb-2 font-weight-bold">
        @ Hashtag
      </b-button>
    </template>
    <b-form-textarea
      id="inputcreate"
      rows="3"
      placeholder="Enter the last words of your life ..."
    />
    <template #footer>
      <b-button variant="success" class="font-weight-bold">
        Give
      </b-button>
    </template>
  </b-card>
</template>
<style lang="scss" scoped>
.input-feed {
  #inputcreate {
    border: none;
  }
  #inputcreate:focus {
    border: none;
    box-shadow: none;
  }
  .card-header {
    background-color: white;
    border: none;
    padding: 10px;
  }
  .card-body {
    border: none;
    padding: 10px;
  }
  .card-footer {
    background-color: white;
    border: none;
    padding: 10px;
    justify-content: flex-end;
    display: flex;
  }
}
</style>
