<template>
    <section id="TheTecnologies">
        <h2 id="demoFont" class="animate-blurred-fade-in text-center">knowledge</h2>
        <div class="tecnologies animate-blurred-fade-in">
            <div class="tecnology" v-for="tecnology in tecnologies" :key="tecnology.id">
                <h3 class="text-center">{{ tecnology.title }}</h3>
                <div class="grid justify-center align-middle items-center">
                    <img :src="tecnology.img" :alt="tecnology.title"/>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'TheTecnologies',
    data() {
        return {
            tecnologies: [
                {
                    id: 1,
                    title: 'HTML',
                    img: '/html-5-svgrepo-com.svg'
                },
                {
                    id: 2,
                    title: 'CSS',
                    img: '/css-3-svgrepo-com.svg'
                },
                {
                    id: 3,
                    title: 'JavaScript',
                    img: '/javascript-svgrepo-com.svg'
                },
                // {
                //     id: 4,
                //     title: 'Vue.js',
                //     img: '/vue-svgrepo-com.svg'
                // },
                {
                    id: 5,
                    title: 'Tailwind CSS',
                    img: '/tailwind-svgrepo-com.svg'
                },
                {
                    id: 6,
                    title: 'Bootstrap',
                    img: '/bootstrap-svgrepo-com.svg'
                },
                {
                    id: 7,
                    title: 'Node JS',
                    img: '/nodejs-svgrepo-com.svg'
                },
                {
                    id: 8,
                    title: 'Laravel',
                    img: '/laravel-svgrepo-com.svg'
                },
                // {
                //     id: 9,
                //     title: 'Oracle',
                //     img: '/oracle-svgrepo-com.svg'
                // },
                {
                    id: 10,
                    title: 'MySQL',
                    img: '/mysql-logo-svgrepo-com.svg'
                },
                // {
                //     id: 11,
                //     title: 'Java',
                //     img: '/java-svgrepo-com.svg'
                // },
                // {
                //     id: 12,
                //     title: 'Python',
                //     img: '/python-svgrepo-com.svg'
                // },
                {
                    id: 13,
                    title: 'GitHub',
                    img: '/github-svgrepo-com.svg'
                },
                {
                    id: 14,
                    title: 'PHP',
                    img: '/php2-svgrepo-com.svg'
                },
                {
                    id: 15,
                    title: 'GIT',
                    img: '/git-svgrepo-com.svg'
                }
            ]
        }
    }
}
</script>
