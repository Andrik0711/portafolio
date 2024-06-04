<template>
    <section id="TheProjects">
        <h2 id="demoFont" class="animate-blurred-fade-in text-center">Projects realiced by me</h2>
        <div class="projects">
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
                    title: 'Sitio Web Personal',
                    description:
                        'Diseño y desarrollo de un sitio web personal, utilizando HTML, CSS, JavaScript y VueJS. El proyecto incluye la integración de un blog personal, una sección de portafolio y un formulario de contacto, ofreciendo una plataforma para la presentación profesional y el contacto directo.'
                },
                {
                    id: 2,
                    title: 'Aplicación Web para la Corrección de Texto',
                    description:
                        'Desarrollo de una aplicación web dedicada a la corrección de texto en la Universidad Politécnica de Victoria. El proyecto involucra la creación de una interfaz de usuario intuitiva y funcional, así como la implementación de funciones para la corrección gramatical y ortográfica, proporcionando una herramienta eficiente para la mejora de documentos escritos.'
                },
                {
                    id: 3,
                    title: 'Sitio Web con Inteligencia Artificial',
                    description:
                        'Desarrollo y despliegue de un sitio web integrado con capacidades de inteligencia artificial.'
                },
                {
                    id: 4,
                    title: 'Sistema de Inventarios',
                    description:
                        'Diseño y desarrollo de un sistema integral de inventarios para una tienda. Donde se pueden registrar productos, realizar ventas, generar reportes y llevar un control de inventario. El sistema incluye un panel de administración para la gestión de productos y ventas, así como una interfaz de usuario para la realización de compras y consultas.'
                },
                {
                    id: 5,
                    title: 'Sitio Web para un Gimnasio',
                    description:
                        'Creación de un sitio web para un gimnasio, donde se pueden encontrar los servicios que se ofrecen, horarios, precios, altas, bajas y estadisticas. Además, se incluye un formulario de contacto para solicitar más información.'
                },
                {
                    id: 6,
                    title: 'Casa IoT con Sitio Web',
                    description:
                        'Creción de una Casa con herramientas de Arduino contruida desde cero, implementando detección de moviemiento y usando la tecnologia open sources de Node Red para la interfaz móvil y web.'
                }
            ]
        }
    }
}
</script>
