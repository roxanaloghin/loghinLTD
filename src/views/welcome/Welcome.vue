<template>
  <div class="inner">
    <div class="flex flex-2">
      <article v-for="(service,index) in services.services" :key="index">
        <div class="image round">
          <img v-bind:src="service.src" alt="Pic 01">
        </div>
        <header>
          <h3 v-html="service.title"></h3>
        </header>
        <p v-html="service.description"></p>
      </article>
    </div>
    <footer>
      <router-link to="/serviceSummary" class="button">Get Started</router-link>
    </footer>
  </div>
</template>
<script>
import servicesSiteData from "../../data/services";

export default {
  name: "WelcomeSummary",
  props: {
    msg: String
  },
  data() {
    return { services: servicesSiteData.services };
  }
};
</script>