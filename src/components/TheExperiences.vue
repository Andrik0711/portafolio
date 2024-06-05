<template>
    <section id="TheExperiences">
        <h2 id="demoFont" class="animate-blurred-fade-in text-center">Experience</h2>
        <div class="experiences animate-blurred-fade-in">
            <div class="experience" v-for="experience in experiences" :key="experience.id">
                <h3 class="text-center">{{ experience.title }}</h3>
                <p class=" text-justify" >{{ experience.description }}</p>
                <p>{{ experience.date }}</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'TheExperiences',
    data() {
        return {
            experiences: [
                {
                    id: 1,
                    title: 'Development Intern',
                    description: 'Development Intern at the Government of the State of Tamaulipas.',
                    date: 'June - August, 2019'
                },
                {
                    id: 2,
                    title: 'Web Developer',
                    description: 'Web application developer at the Polytechnic University of Victoria.',
                    date: 'September - December, 2023'
                },
                {
                    id: 3,
                    title: 'Full Stack Developer',
                    description: 'Full Stack Developer at the College of Bachelors of the State of Tamaulipas (COBAT) Central Office.',
                    date: 'January - April, 2024'
                }
            ]
        }
    }
}
</script>

