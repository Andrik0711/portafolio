<template>
    <div class="grid grid-cols-1 md:grid-cols-2 mt-20">
        <div class="justify-self-center place-content-center animate-fade-in-right">
            <svg
                id="hvr-svg"
                fill="currentColor"
                width="100%"
                height="100%"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M1.293,11.293l4-4A1,1,0,1,1,6.707,8.707L3.414,12l3.293,3.293a1,1,0,1,1-1.414,1.414l-4-4A1,1,0,0,1,1.293,11.293Zm17.414-4a1,1,0,1,0-1.414,1.414L20.586,12l-3.293,3.293a1,1,0,1,0,1.414,1.414l4-4a1,1,0,0,0,0-1.414ZM13.039,4.726l-4,14a1,1,0,0,0,.686,1.236A1.053,1.053,0,0,0,10,20a1,1,0,0,0,.961-.726l4-14a1,1,0,1,0-1.922-.548Z"
                />
            </svg>
        </div>
        <div class="justify-self-start self-center text-4xl md:text-8xl animate-fade-in-left">
            <p id="demoFont">Hi!, Welcome to my web site.</p>
        </div>
    </div>
</template>

<style>

/* Home Section */
.grid {
    display: grid;
    gap: 20px;
    padding: 50px 15px;
    background-color: #f0f2f5;
}

.grid-cols-1 {
    grid-template-columns: 1fr;
}

@media (min-width: 768px) {
    .md\\:grid-cols-2 {
        grid-template-columns: repeat(2, 1fr);
    }
}

.my-4 {
    margin-top: 1rem;
    margin-bottom: 1rem;
}

.justify-self-center {
    justify-self: center;
}

.place-content-center {
    display: flex;
    justify-content: center;
    align-items: center;
}

.text-4xl {
    font-size: 2.25rem;
}

@media (min-width: 768px) {
    .md\\:text-8xl {
        font-size: 6rem;
    }
}

.justify-self-start {
    justify-self: start;
}

.self-center {
    align-self: center;
}

#demoFont {
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    color: #343a40;
    text-align: center;
}

.animate-fade-in-right {
    animation: fadeInRight 1s ease-in-out;
}

.animate-fade-in-left {
    animation: fadeInLeft 1s ease-in-out;
}

.animate-fade-in-up {
    animation: fadeInUp 1s ease-in-out;
}

@keyframes fadeInRight {
    from {
        opacity: 0;
        transform: translateX(-50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes fadeInLeft {
    from {
        opacity: 0;
        transform: translateX(50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(50px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

svg {
    width: 100%;
    height: auto;
    max-width: 300px;
    fill: #007bff;
    transition: fill 0.3s;
}

svg:hover {
    fill: #0056b3;
}
</style>


