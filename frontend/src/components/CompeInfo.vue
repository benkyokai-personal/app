<template>
  <div>
    <div class="compe-info" v-for="(compe, index) in compeList" :key="index">
      <v-btn>{{ compe.title }}</v-btn>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CompeInfo",
  data() {
    return {
      compeList: [],
    };
  },
  async created() {
    const response = await axios.get(`/v1/compe`);
    console.log(response);
    this.compeList = response.data;
    console.log(this.compeList);
  },
};
</script>
