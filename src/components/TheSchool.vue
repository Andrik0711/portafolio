<template>
    <section id="TheSchool">
        <h2 id="demoFont" class="animate-blurred-fade-in text-center">Education</h2>
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
                    title: 'Information Technology Engineering',
                    description: 'POLYTECHNIC UNIVERSITY OF VICTORIA.',
                    date: 'April, 2024'
                },
                {
                    id: 2,
                    title: 'Technician in Programming',
                    description: 'INDUSTRIAL AND SERVICES TECHNOLOGICAL BACCALAUREATE CENTER NO. 119',
                    date: 'August, 2020'
                },
                {
                    id: 3,
                    title: 'Web Application Development Course',
                    description: 'Polytechnic University of Victoria.',
                    date: '2023'
                }
            ]
        }
    }
}
</script>