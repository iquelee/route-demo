<template>
  <ul>
    <li>新闻编号：{{ id }}</li>
    <li>新闻标题：{{ title }}</li>
  </ul>
</template>

<script>
export default {
  name: 'Detail',
  props: ['id', 'title'],
  mounted () {
    console.log(this.$route)
  }
}
</script>
