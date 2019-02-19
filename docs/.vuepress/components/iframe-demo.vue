<template>
  <iframe :src="url" width="100%" height="400px"></iframe>
</template>
<script>
export default {
  name: 'iframe-demo',
  props: {
    url: String
  }
}
</script>
<style>
  iframe {
    border: 0;
  }
</style>
