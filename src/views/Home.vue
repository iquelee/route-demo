<template>
  <div class="home">
    <ul>
      <li>
        <router-link to="/home/news">新闻</router-link>
      </li>
      <li>
        <router-link to="/home/message">消息</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>
