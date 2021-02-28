<template>
<div class="hello">
  <body>
    <header id="header">
      <router-view name="navigation"></router-view>
    </header>
    <section id="banner">
      <router-view name="banner"></router-view>
    </section>
    <section id="two" class="wrapper align-center">
      <router-view name="navigationItem"></router-view>
    </section>
    <!-- Three -->
    <section id="three" class="wrapper align-center">
      <router-view name="content"></router-view>
    </section>
    <!-- Footer -->
    <footer id="footer">
      <router-view name="contactForm"></router-view>
    </footer>
  </body>
</div>
</template>

<script>
import infoSiteData from "../data/info";
import emailjs from "emailjs-com";

export default {
  name: "HomePage",
  props: {
    msg: String
  },
  data() {
    return { infoSiteData };
  }
};
</script>
 
<style scoped>
@import "../assets/css/main.css";

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.white {
  color: blue;
}
</style>
