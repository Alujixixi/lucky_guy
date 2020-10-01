<template>
  <div id="app">
    <MainPage/>
  </div>
</template>

<script>
import MainPage from "./components/MainPage";
import './styles/buttons.css'

export default {
  name: 'App',
  components: {
    MainPage,
  }
}
</script>

<style>
  html, body {
    position: fixed;
    width: 100% !important;
    height: 100% !important;
    margin: 0      !important;
    padding: 0    !important;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: 0 auto;
    padding: 0;
    display: flex;
    justify-content: center; /*定义body的里的元素水平居中*/
    position: relative;
    height: 100%;

  }
</style>
