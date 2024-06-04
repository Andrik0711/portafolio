<template>
    <section id="TheExperiences">
        <h2 id="demoFont" class="animate-blurred-fade-in text-center">Experiences</h2>
        <div class="experiences">
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
                    title: 'Pasante de Desarrollo',
                    description: 'Pasante de Desarrollo en Gobierno del Estado de Tamaulipas.',
                    date: 'Junio - Agosto, 2019'
                },
                {
                    id: 2,
                    title: 'Desarrollador Web',
                    description: 'Desarrollador de aplicaciones web en la Universidad Politécnica de Victoria.',
                    date: 'Septiembre - Diciembre, 2023'
                },
                {
                    id: 3,
                    title: 'Desarrollador Full Stack',
                    description: 'Desarrollador Full Stack en el Colegio de Bachilleres del Estado de Tamaulipas (COBAT) Oficina Central.',
                    date: 'Enero - Abril, 2024'
                }
            ]
        }
    }
}
</script>
