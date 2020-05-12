<template>
  <div id="app">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
         style="position:absolute;width:0;height:0;visibility:hidden">
      <defs>
        <symbol id="icon-github" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1132" ><path d="M512 128C299.872 128 128 299.872 128 512c0 169.6 110.016 313.6 262.624 364.384 19.264 3.52 26.24-8.256 26.24-18.496 0-9.152-0.352-33.28-0.48-65.28-106.88 23.136-129.376-51.488-129.376-51.488-17.504-44.384-42.624-56.256-42.624-56.256-34.88-23.744 2.624-23.232 2.624-23.232 38.496 2.752 58.752 39.488 58.752 39.488 34.24 58.752 89.856 41.76 111.744 32 3.52-24.864 13.504-41.76 24.384-51.36-85.248-9.632-174.88-42.624-174.88-189.76 0-42.016 15.008-76.256 39.488-103.136-3.872-9.6-17.12-48.736 3.744-101.6 0 0 32.256-10.24 105.632 39.36A367.584 367.584 0 0 1 512 313.76c32.64 0.128 65.504 4.352 96.128 12.864 73.376-49.6 105.504-39.36 105.504-39.36 20.992 52.864 7.872 92 3.84 101.6 24.64 26.88 39.392 61.12 39.392 103.136 0 147.52-89.728 179.872-175.232 189.504 13.76 11.744 25.984 35.232 25.984 71.008 0 51.36-0.352 92.736-0.352 105.376 0 10.24 6.848 22.24 26.368 18.496C786.112 825.504 896 681.6 896 512c0-212.128-171.872-384-384-384z" p-id="1133"></path></symbol>
      </defs>
    </svg>
    <div class="loading" v-show="!loading">
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve">
        <rect x="0" y="10.3333" width="4" height="10.3333" fill="#e0a80d">
          <animate attributeName="height" attributeType="XML" values="5;21;5" begin="0s" dur="0.6s" repeatCount="indefinite"></animate>
          <animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0s" dur="0.6s" repeatCount="indefinite"></animate>
        </rect>
        <rect x="10" y="11.6667" width="4" height="7.66667" fill="#e0a80d">
          <animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate>
          <animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate>
        </rect>
        <rect x="20" y="7.66667" width="4" height="15.6667" fill="#e0a80d">
          <animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate>
          <animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate>
        </rect>
      </svg>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data(){
      return {
        loading:false,
      }
    }
  }
</script>

<style lang="scss">
  @import "./scss/style.scss";
</style>
