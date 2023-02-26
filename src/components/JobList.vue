<template>
  <main>
    <div class="jobs-div" v-for="(item, index) in pageOfItems" :key="index">
      <SingleJob :data="item" />
    </div>
    <div class="pagination-div">
      <jw-pagination
        :pageSize="5"
        :items="jobs"
        @changePage="onChangePage"
      ></jw-pagination>
    </div>
  </main>
</template>

<script>
import SingleJob from "./SingleJob.vue";

export default {
  components: {
    SingleJob,
  },
  props: ["jobs"],
  data() {
    return {
      pageOfItems: [],
    };
  },
  methods: {
    onChangePage(pageOfItems) {
      this.pageOfItems = pageOfItems;
    },
  },
};
</script>

<style>
main {
  background-color: #f9f8f8;
  width: 100%;
  height: 100%;
  padding-top: 20px;
}
main .jobs-div {
  max-width: 1180px;
  margin: 0 auto;
  padding: 20px;
}

.pagination-div {
  max-width: 400px;
  margin: 0 auto;
}

.pagination {
  display: flex !important;
  gap: 10px !important;
}

.page-item {
  background-color: blue;
  border-radius: 10px;
}
</style>
