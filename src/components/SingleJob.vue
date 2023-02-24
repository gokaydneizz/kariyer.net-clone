<template>
  <router-link :to="{ name: 'JobDetails', params: { id: data.id } }">
    <article class="job-item">
      <div class="job-container">
        <div class="img-box">
          <img :src="data.companyLogo" alt="company-logo" />
        </div>
        <div class="description">
          <h1 class="job-title">{{ data.jobTitle }}</h1>
          <p class="company-title">{{ data.companyName }}</p>
          <span class="job-location">{{ data.jobLocation }}</span>
        </div>
      </div>
      <div class="features">
        <span class="work-type">{{ data.jobType }}</span>
        <span v-if="data.sponsored === 'true'" class="sponsored"
          >Sponsorlu</span
        >
      </div>
    </article>
  </router-link>
</template>

<script>
export default {
  name: "JobList",
  props: ["data"],
};
</script>

<style lang="css" scoped>
a {
  text-decoration: none;
  color: inherit;
}

.job-item {
  background-color: #fff;
  border-radius: 6px;
  padding: 20px;
  display: grid;
  cursor: pointer;
}

.job-container {
  display: flex;
  gap: 20px;
}

.job-title {
  font-size: 15px;
  color: #000;
}

.job-location {
  font-size: 12px;
  color: grey;
}

.company-title {
  font-size: 14px;
  font-weight: 400;
  color: rgb(26, 24, 24);
}

.img-box {
  padding: 0.25rem;
  background-color: #fff;
  border: 1px solid #dee2e6;
  width: 58px;
  height: 58px;
  overflow: hidden;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.features {
  margin-top: 20px;
}

.work-type {
  font-size: 12px;

  background-color: #f5f5f5;
  padding: 5px;
  justify-self: flex-start;
}

.sponsored {
  font-size: 12px;
  color: #757070;
  margin-left: 10px;
}

.img-box img {
  max-width: 100%;
}
</style>
