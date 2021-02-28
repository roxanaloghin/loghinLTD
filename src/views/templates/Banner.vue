<template>
  <div class="inner">
    <header>
      <h1 v-html="menuName"></h1>
      <p v-html="description"></p>
    </header>
  </div>
</template>

<script>
export default {
  name: "Banner",
  props: {
    menuName: String,
    description: String
  }
};
</script>

<style scoped>
.flex {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  align-items: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
}
</style>
