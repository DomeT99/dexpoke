<script setup lang="ts">
import { onMounted } from "vue";
//FontAwesome Component
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

onMounted(() => {
    openHamburgerMenu()
})

function openHamburgerMenu() {

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
    <nav class="navbar bg-white-poke bb-gray" role="navigation" aria-label="main navigation">
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
                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                        Pokemon
                    </a>
                    <div class="navbar-dropdown">
                        <router-link to="/pokelist" class="navbar-item">
                            Complete List
                        </router-link>
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
                    <div class="navbar-dropdown">
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
                        <button class="button bg-red-poke">
                            <FontAwesomeIcon class="white-poke" icon="fa-brands fa-twitter" />
                        </button>
                        <button class="button bg-black-poke">
                            <FontAwesomeIcon class="white-poke" icon="fa-brands fa-instagram" />
                        </button>
                        <button class="button bg-white-poke">
                            <FontAwesomeIcon class="black-poke" icon="fa-brands fa-github" />
                        </button>
                    </div>
                </div>
            </div>
        </div>

    </nav>
</template>