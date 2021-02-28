<template>
  <div class="inner">
    <div class="flex flex-2">
      <article v-for="(task,index) in data.tasks" :key="index">
        <div class="image round">
          <img v-bind:src="task.src" alt="Pic 01">
        </div>
        <header>
          <h3 v-html="task.title"></h3>
        </header>
        <p v-html="task.description"></p>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContentById",
  props: {
    data: Object,
  }
};
</script>
