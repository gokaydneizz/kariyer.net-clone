<template>
  <main>
    <header>
      <div class="header-div">
        <img
          src="https://aday-spage.mncdn.com/Knet_img_KnetLogo.9108e1e.svg?v=22564"
          alt="kariyer-logo"
        />
        <div class="input input-position-container">
          <input
            type="text"
            placeholder="Pozisyon veya şirket ara"
            v-model="positionName"
          />
          <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
        </div>
        <div class="input input-city-container">
          <input
            type="text"
            placeholder="Şehir veya ilçe ara"
            v-model="cityName"
          />
          <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
        </div>
        <button @click="searchJob" class="search-btn">İş Ara</button>
      </div>
    </header>
    <section>
      <JobList :jobs="filteredJobs" />
    </section>
  </main>
</template>

<script>
import JobList from "@/components/JobList.vue";
import axios from "axios";

export default {
  name: "HomePage",
  components: {
    JobList,
  },
  data() {
    return {
      jobs: [],
      positionName: "",
      cityName: "",
      filteredJobs: [],
    };
  },
  methods: {
    fetchJobs() {
      const url = "http://localhost:8080/data.json";
      axios
        .get(url)
        .then((response) => {
          this.jobs = response.data;
          this.filteredJobs = response.data;
        })
        .catch((error) => {
          console.log(error);
          // do something show div etc.
        });
    },
    searchJob: function () {
      const jobPosition = this.positionName.toLowerCase();
      const jobCityName = this.cityName.toLowerCase();
      const jobPositionLengthControl = jobPosition.trim().length > 0;
      const jobCityNameLengthControl = jobCityName.trim().length > 0;

      if (!jobPosition && !jobCityName) {
        this.filteredJobs = this.jobs;
      }

      if (jobCityNameLengthControl && jobPositionLengthControl) {
        this.filteredJobs = this.jobs.filter((job) => {
          return (
            job.jobTitle.toLowerCase().includes(jobPosition) &&
            job.jobLocation.toLowerCase().includes(jobCityName)
          );
        });
      }

      if (jobPositionLengthControl) {
        this.filteredJobs = this.jobs.filter((job) => {
          return job.jobTitle.toLowerCase().includes(jobPosition);
        });
      }
      if (jobCityNameLengthControl) {
        this.filteredJobs = this.jobs.filter((job) => {
          return job.jobLocation.toLowerCase().includes(jobCityName);
        });
      }
    },
  },
  created() {
    this.fetchJobs();
  },
};
</script>

<style scoped>
header {
  position: relative;
  z-index: 10;
  box-shadow: 2px 8px 5px 0px rgb(230, 223, 223);
  background-color: #fff;
}
.header-div {
  display: flex;
  gap: 3rem;
  padding: 20px;
  margin: 0 auto;
  max-width: 1180px;
}

.input {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #c2c2c2;
  border-radius: 2px;
  padding: 8px 10px;
  gap: 10px;
  position: relative;
}

.input input {
  outline: none;
  border: none;
}

.input input::placeholder {
  font-size: 14px;
  font-weight: 400;
}

.input:focus-within {
  border: 2px solid #8316b5;
  box-shadow: 2px 2px 4px 1px rgb(0 0 0 / 10%);
}

.input.input-position-container {
  width: 300px;
}

.input-position-container input {
  width: 100%;
}

.input-city-container {
  widows: 100%;
}

.search-btn {
  font-size: 14px;
  font-family: Roboto-Medium, -apple-system, BlinkMacSystemFont, Segoe UI,
    Helvetica Neue, Arial, Noto Sans, sans-serif !important;
  background-color: #8316b5;
  color: #fff;
  padding: 8px 26px;
  border-radius: 8px;
  outline: none;
  box-shadow: none;
  border: none;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s linear;
}

.search-btn:hover {
  background-color: #6a1293;
  border-color: #621088;
}

@media only screen and (max-width: 600px) {
  .header-div {
    flex-wrap: wrap;
  }
}
</style>
