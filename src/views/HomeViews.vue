<script setup lang="ts">
import PokeBannerHomeVue from '../components/Home/PokeBannerHome.vue';
import PokeButtonVue from '../components/Common/PokeButton.vue';
import { ButtonProps } from "../assets/Modules/Interfaces"


const buttonStart: ButtonProps = {
    classButton: "is-large kanit-300 bg-red-poke white-poke button-red",
    textButton: "Get Started",
    funcButton: () => { console.log(false) }
};
</script>

<template>
    <section class="container has-text-centered">
        <div class="column">
            <PokeBannerHomeVue />
        </div>
        <hr class="opacity-0" />
        <PokeButtonVue :funcButton="buttonStart.funcButton" :textButton="buttonStart.textButton"
            :classButton="buttonStart.classButton" />
    </section>
</template>