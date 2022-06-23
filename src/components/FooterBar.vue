<template>
  <div class="footer">
    <p class="copy-right">© producted by Y.R.Chen</p>
  </div>
</template>

<script>
export default {
  name: "FooterBar",
}
</script>

<style lang="scss" scoped>
.footer{
  position: fixed;
  width: 100vw;
  height: 30px;
  bottom: 0;
  background: $support-green;
  text-align: center;
  .copy-right{
    line-height: 30px;
    font-size: $secondary-text-size;
    color: $secondary-text-color;
  }
}
</style>