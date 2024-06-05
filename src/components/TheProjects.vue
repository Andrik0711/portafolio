<template>
    <section id="TheProjects">
        <h2 id="demoFont" class="animate-blurred-fade-in text-center">Projects realiced by me</h2>
        <div class="projects animate-blurred-fade-in">
            <div class="project" v-for="project in projects" :key="project.id">
                <h3 class="text-center" >{{ project.title }}</h3>
                <p class="text-justify" >{{ project.description }}</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'TheProjects',
    data() {
        return {
            projects: [
                {
                    id: 1,
                    title: 'Personal Website',
                    description:
                        'Design and development of a personal website using HTML, CSS, JavaScript, and VueJS. The project includes the integration of a personal blog, a portfolio section, and a contact form, offering a platform for professional presentation and direct contact.'
                },
                {
                    id: 2,
                    title: 'Text Correction Web Application',
                    description:
                        'Development of a web application dedicated to text correction at the Polytechnic University of Victoria. The project involves creating an intuitive and functional user interface, as well as implementing features for grammatical and spelling correction, providing an efficient tool for improving written documents.'
                },
                {
                    id: 3,
                    title: 'Website with Artificial Intelligence',
                    description:
                        'Development and deployment of a website integrated with artificial intelligence capabilities.'
                },
                {
                    id: 4,
                    title: 'Inventory System',
                    description:
                        'Design and development of a comprehensive inventory system for a store. It includes product registration, sales, report generation, and inventory control. The system features an admin panel for managing products and sales, as well as a user interface for making purchases and inquiries.'
                },
                {
                    id: 5,
                    title: 'Gym Website',
                    description:
                        'Creation of a website for a gym, showcasing the services offered, schedules, prices, memberships, and statistics. Additionally, it includes a contact form for requesting more information.'
                },
                {
                    id: 6,
                    title: 'IoT House with Website',
                    description:
                        'Creation of a house with Arduino tools built from scratch, implementing motion detection and using the open-source technology Node-RED for the mobile and web interface.'
                }
            ]
        }
    }
}
</script>
