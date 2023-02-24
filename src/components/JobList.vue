<template>
  <main>
    <div class="jobs-div" v-for="(item, index) in jobs" :key="index">
      <SingleJob :data="item" />
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
};
</script>

<style scoped>
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
</style>
