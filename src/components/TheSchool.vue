<template>
    <section id="TheSchool">
        <h2 id="demoFont" class="animate-blurred-fade-in text-center">Education</h2>
        <div class="schools animate-blurred-fade-in">
            <div class="school" v-for="school in schools" :key="school.id">
                <h3 class="text-center">{{ school.title }}</h3>
                <p class="text-justify">{{ school.description }}</p>
                <p>{{ school.date }}
                    <a v-if="school.img" :href="school.img" target="_blank" class="text-blue-500 hover:underline"
                        >View Certificate</a
                    >
                </p>
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
                    date: 'April 18, 2024.',
                    img: ''
                },
                {
                    id: 2,
                    title: 'Technician in Programming',
                    description:
                        'INDUSTRIAL AND SERVICES TECHNOLOGICAL BACCALAUREATE CENTER NO. 119',
                    date: 'August 14, 2020.',
                    img: ''
                },
                {
                    id: 3,
                    title: 'Introduction to Cybersecurity',
                    description: 'CISCO NETWORKING ACADEMY.',
                    date: 'July 17, 2022.',
                    img: 'certificates/I2CS__1_.webp'
                },
                {
                    id: 4,
                    title: 'CCNA: Introduction to Networks',
                    description: 'CISCO NETWORKING ACADEMY.',
                    date: 'December 06, 2021.',
                    img: 'certificates/CCNAITN__1_.webp'
                },
                {
                    id: 5,
                    title: 'CCNA: Switching, Routing, and Wireless Essentials',
                    description: 'CISCO NETWORKING ACADEMY.',
                    date: 'March 17, 2022.',
                    img: 'certificates/CCNASRWE__1_.webp'
                },
                {
                    id: 6,
                    title: 'CCNA: Enterprise Networking, Security, and Automation',
                    description: 'CISCO NETWORKING ACADEMY.',
                    date: 'February, 2023.',
                    img: 'certificates/CCNAENSA__1_.webp'
                },
                {
                    id: 7,
                    title: 'Constancia BUAP',
                    description: 'MERITORIUS AUTONOMOUS UNIVERSITY OF PUEBLA.',
                    date: 'November 20, 2023.',
                    img: 'certificates/CONACIC2023_ID_23.webp'
                },
                {
                    id: 7,
                    title: 'Google User Experience (UX) Design Professional Certificate',
                    description: 'COURSERA.',
                    date: 'October 13, 2023.',
                    img: 'certificates/Coursera-4262QND299G6.webp'
                }
            ]
        }
    }
}
</script>