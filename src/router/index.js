import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import News from '../views/News.vue'
import Message from '../views/Message'
import Main from '../views/Main'
import Detail from '../views/Detail'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    children: [
      {
        path: 'home',
        name: 'Home',
        component: Home,
        children: [
          {
            path: 'news',
            name: 'News',
            component: News,
            children: [
              {
                path: 'detail',
                name: 'Detail',
                component: Detail,
                props ($route) {
                  return { id: $route.query.id, title: $route.query.title }
                }
              }
            ]
          }, {
            path: 'message',
            name: 'Message',
            component: Message
          }
        ]
      },
      {
        path: 'about',
        name: 'About',
        component: About
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
