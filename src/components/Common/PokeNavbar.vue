<script setup lang="ts">
import { onMounted } from "vue";
//FONTAWESOME COMPONENT
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
//COMPONENTS
import PokeButtonVue from "./PokeButton.vue";
//INTERFACES
import { ButtonProps } from "../../assets/Modules/Interfaces"

//SOCIAL LINK PARAMETERS
const twitterLink = import.meta.env.VITE_TWITTER_LINK;
const instagramLink = import.meta.env.VITE_INSTAGRAM_LINK;
const githubLink = import.meta.env.VITE_GITHUB_LINK;


//DATA

/* Proprietà bottoni social */
const twitterBtn: ButtonProps = {
    classButton: "bg-red-poke white-poke button-red",
    funcButton: (social?: string) => {
        if (typeof (social) === "string") {
            window.open(social);
        }
    }
}
const instagramBtn: ButtonProps = {
    classButton: "bg-black-poke white-poke button-black",
    funcButton: (social?: string) => {
        if (typeof (social) === "string") {
            window.open(social);
        }
    }
}

//MOUNTED
onMounted(() => {
    openHamburgerMenu()
})

//METHODS
const openHamburgerMenu = () => {
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {
            const target = el.dataset.target;
            const $target = document.getElementById(target);

            el.classList.toggle('is-active');
            $target?.classList.toggle('is-active');

        });
    });
}

</script>

<template>
    <nav class="navbar bg-white-poke bb-gray kanit-800 sticky-position" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">

            <!-- Hamburger Menu for mobile -->
            <a role="button" class="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div id="navMenu" class="navbar-menu">
            <div class="navbar-start">
                <router-link to="/" class="navbar-item">
                    Home
                </router-link>
                <a class="navbar-item">
                    About
                </a>
                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                        Pokemon
                    </a>
                    <div class="navbar-dropdown fade-in">
                        <a class="navbar-item">
                            Complete List
                        </a>
                        <a class="navbar-item">
                            Abilities
                        </a>
                        <a class="navbar-item">
                            Natures
                        </a>
                        <a class="navbar-item">
                            Types
                        </a>
                    </div>
                </div>


                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                        Moves
                    </a>
                    <div class="navbar-dropdown fade-in">
                        <a class="navbar-item">
                            Categories
                        </a>
                    </div>
                </div>
                <a class="navbar-item">
                    Berries
                </a>
            </div>
            <div class="navbar-end" style="display:flex; justify-content:center">
                <div class="navbar-item">
                    <div class="buttons">

                        <PokeButtonVue :classButton="twitterBtn.classButton"
                            :funcButton="() => twitterBtn.funcButton(twitterLink)">
                            <FontAwesomeIcon icon="fa-brands fa-twitter" />
                        </PokeButtonVue>

                        <PokeButtonVue :classButton="instagramBtn.classButton"
                            :funcButton="() => instagramBtn.funcButton(instagramLink)">
                            <FontAwesomeIcon icon="fa-brands fa-instagram" />
                        </PokeButtonVue>

                        <PokeButtonVue :classButton="twitterBtn.classButton"
                            :funcButton="() => twitterBtn.funcButton(twitterLink)">
                            <FontAwesomeIcon icon="fa-brands fa-github" />
                        </PokeButtonVue>

                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>