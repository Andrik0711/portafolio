<template>
    <section id="TheSchool">
        <h2 id="demoFont" class="animate-blurred-fade-in text-center">Educación</h2>
        <div class="schools">
            <div class="school" v-for="school in schools" :key="school.id">
                <h3 class="text-center">{{ school.title }}</h3>
                <p class=" text-justify" >{{ school.description }}</p>
                <p>{{ school.date }}</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'TheSchool',
    data() {
        return {
            schools: [
                {
                    id: 1,
                    title: 'Ingeniería en Tecnologías de la Información',
                    description: 'UNIVERSIDAD POLITÉCNICA DE VICTORIA.',
                    date: 'Abril, 2024'
                },
                {
                    id: 2,
                    title: 'Técnico en Programación',
                    description: 'CENTRO DE BACHILLERATO TECNOLÓGICO INDUSTRIAL Y DE SERVICIOS NO. 119',
                    date: 'Agosto, 2020'
                },
                {
                    id: 3,
                    title: 'Curso de Desarrollo de Aplicaciones Web',
                    description: 'Universidad Politécnica de Victoria.',
                    date: '2023'
                }
            ]
        }
    }
}
</script>