<template>
  <div class="demo-tab">
    <div v-for="post in posts" :key="post">
      {{ post.name }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: []
    }
  },
  async created() {
    const res = await fetch('https://swapi.dev/api/planets/');
    const { results } = await res.json();
    this.posts = results;
  }
}
</script>