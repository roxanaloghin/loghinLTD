<template>
  <div class="inner">
    <div class="flex flex-2">
      <article v-for="(aboutUs,index) in subMenuItems" :key="index">
        <div class="image round">
          <img v-bind:src="aboutUs.src" alt="Pic 01">
        </div>
        <header>
          <h3 v-html="aboutUs.title"></h3>
        </header>
        <p v-html="aboutUs.description"></p>
        <footer>
          <router-link
            :to="{
                name:routerSubMenu,
                params:{
                  id:aboutUs.id
                }}"
            class="button"
          >Get Started</router-link>
        </footer>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: "Content",
  props: {
    subMenuItems: Array,
    routerSubMenu: String
  },
  data() {
    return { aboutUs: aboutUsSiteData.aboutUs };
  }
};
</script>
