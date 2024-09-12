<template>
  <div class="video-container">
    <div class="video">
      <iframe
        width="100%"
        height="100%"
        :src="'https://www.youtube.com/embed/' + videoId + '?autoplay=1&mute=1&controls=0&rel=0&showinfo=0'"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
      ></iframe>
    
      <div class="video-caption">
        <h1>I love Kristen but Kristen Hates the font</h1>
        <p>Bravo Networks</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.video-container {
  width: 100vw;
  height: calc(100vw * 9 / 16);
  position: relative;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 0 0 20% 20%; /* Add curved effect */
}

.video {
  width: 100%;
  height: 100%;
}

iframe {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Position the text over the video */
.video-caption {
  position: absolute;
  top: 50%; /* Adjust based on where you want it to be vertically */
  left: 5%; /* Adjust the left positioning */
  transform: translateY(-50%); /* Center the text vertically */
  color: white; /* Ensure text is visible over the video */
  text-align: left;
  z-index: 2;
}

.video-caption h1 {
  font-size: 2.9vw; /* Adjust font size */
  width: 75%;
  margin: 0;
}

.video-caption p {
  font-size: 1vw; /* Adjust font size */
  margin-top: 10px;
}

</style>

<script>
export default {
  data() {
    return {
      videoId: 'kDignq3wgJg', // Your YouTube video ID
    };
  }
};
</script>
