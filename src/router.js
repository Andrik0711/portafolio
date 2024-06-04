import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/TheHome.vue'
import About from './components/AboutMe.vue'
import TheContact from './components/TheContact.vue'
import Experience from './components/TheExperiences.vue'
import Projects from './components/TheProjects.vue'
import School from './components/TheSchool.vue'
import Technologies from './components/TheTechnologies.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/contact',
        name: 'Contact',
        component: TheContact
    },
    {
        path: '/experience',
        name: 'Experience',
        component: Experience
    },
    {
        path: '/projects',
        name: 'Projects',
        component: Projects
    },
    {
        path: '/school',
        name: 'School',
        component: School
    },
    {
        path: '/technologies',
        name: 'Technologies',
        component: Technologies
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
