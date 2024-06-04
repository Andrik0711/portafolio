<script setup>
    import TheHeader from './components/TheHeader.vue';
</script>

<template>
    <div>
        <!-- Encabezado -->
        <header>
            <TheHeader />
        </header>

        <!-- Contenido principal -->
        <main>
            <router-view />
        </main>
    </div>
</template>