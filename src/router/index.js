import Vue from 'vue'
import Router from 'vue-router'
import MeetingArcher from '@/components/MeetingArcher'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'MeetingArcher',
        component: MeetingArcher
    }]
})