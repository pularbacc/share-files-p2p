<template>
  <div>
    <h1>Test page</h1>
    <div class="container">
      <quill-editor v-model="messInput" spellcheck="false"> </quill-editor>
    </div>
  </div>
</template>
<script>
export default {};
</script>


<style scoped>
.container{
    height: 600px;
    background-color: turquoise;
    overflow: auto;
}
</style>