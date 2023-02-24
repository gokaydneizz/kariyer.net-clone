<template>
  <div class="job-detail-container">
    <router-link :to="{ path: '/' }">
      <img
        src="https://aday-spage.mncdn.com/Knet_img_KnetLogo.9108e1e.svg?v=22564"
        alt="kariyer-logo"
        class="header-img"
      />
    </router-link>
    <header>
      <div class="left-side">
        <h1>{{ job.jobTitle }}</h1>
        <span>{{ job.companyName }}</span>
        <span class="location">{{ job.jobLocation }}</span>
      </div>
      <div class="right-side">
        <div class="buttons">
          <button class="apply-button">Başvur</button>
          <button class="save-button">Kaydet</button>
        </div>
        <div class="update-time">{{ job.updatedTime }} önce güncellendi.</div>
      </div>
    </header>
    <section class="detail-container">
      <div class="detail-item">
        <div>Çalışma Şekli</div>
        <span>{{ job.jobType }}</span>
      </div>
      <div class="detail-item">
        <div>Tecrübe</div>
        <span>{{ job.qualification }}</span>
      </div>
      <div class="detail-item">
        <div>Departman</div>
        <span>{{ job.department }}</span>
      </div>
    </section>

    <h1 class="explanation">İş tanımı</h1>
    <p class="job-desc">{{ job.description }}</p>
    <img :src="job.companyLogo" alt="" class="companylogo" />
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "JobDetail",
  data() {
    return {
      id: "",
      job: [],
    };
  },
  methods: {
    fetchJobs() {
      const url = "http://localhost:8080/data.json";
      axios
        .get(url)
        .then((response) => {
          this.job = response.data.filter((data) => {
            return data.id === this.$route.params.id;
          })[0];
        })
        .catch((error) => {
          console.log(error);
          // do something show div etc.
        });
    },
  },
  created() {
    this.fetchJobs();
  },
};
</script>

<style scoped>
body {
  background-color: #f5f5f5;
}

.header-img {
  margin-bottom: 40px;
  cursor: pointer;
}

.job-detail-container {
  max-width: 800px;
  margin: 3rem auto;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 1px 5px 0 rgb(0 0 0 / 10%);
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.buttons button {
  height: 40px;
  width: 100px;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s linear;
}

.buttons button:hover {
  opacity: 0.8;
}

.left-side h1 {
  font-size: 16px;
  font-weight: 500;
}

.left-side .location {
  color: gray;
}

.left-side .company-name {
  font-size: 16px;
}

.right-side .buttons {
  display: flex;
  gap: 10px;
}

.right-side .buttons {
  margin-bottom: 20px;
}

.update-time {
  font-size: 15px;
  color: gray;
}

.apply-button {
  background-color: #8317b4;
  color: #fff;
}

.save-button {
  border: 1px solid #8317b4 !important;
  background-color: #fff;
  color: #8317b4;
}

.left-side,
.right-side {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.detail-container {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 10px;
}

.detail-item div {
  color: gray;
  padding-bottom: 10px;
}

.explanation {
  font-size: 20px;
  margin-bottom: 20px;
  margin-top: 20px;
}

.companylogo {
  padding-top: 40px;
  max-width: 100%;
}
</style>
