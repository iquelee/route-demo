<template>
  <div class="news">
    <ul>
      <li v-for="item in newsList" :key="item.id">
        <router-link :to="{
            name: 'Detail',
            query: {
              id: item.id,
              title: item.title
            }
            }">
          {{ item.title }}
        </router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'News',
  data () {
    return {
      newsList: [
        { id: '001', title: '新闻001' },
        { id: '002', title: '新闻002' },
        { id: '003', title: '新闻003' }
      ]
    }
  }
}
</script>
