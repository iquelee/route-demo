<template>
  <div class="main">
    <ul>
      <li>
        <router-link to="/home">首页</router-link>
      </li>
      <li>
        <router-link to="/about">关于</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Main'
}
</script>
