<template>
    <section id="TheCertificate">
        <h2 id="demoFont" class="animate-blurred-fade-in text-center">My certifications</h2>
        <div class="certificates">
            <div class="certificate" v-for="certificate in certificates" :key="certificate.id">
                <h3 class="text-center">{{ certificate.title }}</h3>
                <p class=" text-justify" >{{ certificate.description }}</p>
                <p>{{ certificate.date }}</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'TheCertificate',
    data() {
        return {
            certificates: [
                {
                    id: 1,
                    title: 'Desarrollo de Aplicaciones Web',
                    description: 'Curso de Desarrollo de Aplicaciones Web en la Universidad Politécnica de Victoria.',
                    date: '2023'
                },
                {
                    id: 2,
                    title: 'Desarrollo de Aplicaciones Móviles',
                    description: 'Curso de Desarrollo de Aplicaciones Móviles en la Universidad Politécnica de Victoria.',
                    date: '2023'
                },
                {
                    id: 3,
                    title: 'Desarrollo de Aplicaciones Móviles con React Native',
                    description: 'Curso de Desarrollo de Aplicaciones Móviles con React Native en la Universidad Politécnica de Victoria.',
                    date: '2023'
                },
                {
                    id: 4,
                    title: 'Desarrollo de Aplicaciones Web con React',
                    description: 'Curso de Desarrollo de Aplicaciones Web con React en la Universidad Politécnica de Victoria.',
                    date: '2023'
                },
                {
                    id: 5,
                    title: 'Desarrollo de Aplicaciones Web con VueJS',
                    description: 'Curso de Desarrollo de Aplicaciones Web con VueJS en la Universidad Politécnica de Victoria.',
                    date: '2023'
                },
                {
                    id: 6,
                    title: 'Desarrollo de Aplicaciones Web con Angular',
                    description: 'Curso de Desarrollo de Aplicaciones Web con Angular en la Universidad Politécnica de Victoria.',
                    date: '2023'
                }
            ]
        }
    }
}
</script>