<script setup>
import TheHeader from './components/TheHeader.vue'
import TheHome from './components/TheHome.vue'
import AboutMe from './components/AboutMe.vue'
import TheExperience from './components/TheExperiences.vue'
import TheProjects from './components/TheProjects.vue'
// import TheContact from './components/TheContact.vue'
// import TheSchool from './components/TheSchool.vue'
// import TheFooter from './components/TheFooter.vue'
</script>

<template>
    <header>
        <TheHeader />
    </header>

    <main>
        <TheHome />
        <AboutMe />
        <TheExperience />
        <TheProjects />
        <!--
        <TheContact />
        <TheSchool /> -->
    </main>

    <footer>
        <!-- <TheFooter /> -->
    </footer>
</template>

<style scoped>
@media (min-width: 1024px) {
}
</style>
