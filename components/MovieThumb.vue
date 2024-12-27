<template>
  <div class="movie-thumb">
    <a :href="url" target="_blank" rel="noopener noreferrer">
      <img :src="thumb" :alt="`Thumbnail for ${title}`" />
      <h3>{{ title }}</h3>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    
    thumb: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.movie-thumb {
  width: 300px;
  text-align: center;
  background: #222;
  border-radius: 15px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.movie-thumb img {
  width: 100%;
  height: auto;
  border-bottom: 3px solid #444;
}

.movie-thumb h3 {
  font-size: 1.2rem;
  color: #fff;
  margin: 10px 0;
}

.movie-thumb a {
  text-decoration: none;
  color: inherit;
}

.movie-thumb:hover {
  transform: scale(1.05);
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.3);
}
</style>