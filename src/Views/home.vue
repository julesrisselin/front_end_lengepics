<script setup>
import { ref } from 'vue'
const votes = ref([]);
const selectValue = ref([]);
const pictureInfos = ref([]);

async function init() {
    const resp = await fetch("http://localhost:3000/api/votes/2")
    const data = await resp.json();
    votes.value = data;
    console.log(votes);
}

async function getPicture() {
    const resp = await fetch("http://localhost:3000/api/challenges/current")
    const data = await resp.json();
    pictureInfos.value = data;
    console.log(pictureInfos);
}

init();
getPicture();

import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

const search = computed({
    get() {
        return route.query.search ?? ''
    },
    set(search) {
        router.replace({ query: { search } })
    }
})
</script>

<template>
    <header>
        <nav>
            <ul>
                <li>
                    <RouterLink to="/"> Accueil </RouterLink>
                </li>
                <li>
                    <RouterLink to="/participation"> Challenge </RouterLink>
                </li>
                <li>
                    <RouterLink to="/participations"> Participations </RouterLink>
                </li>
                <li>
                    <RouterLink to="/login"> Connexion </RouterLink>
                </li>
            </ul>
        </nav>
    </header id="accueil">

    <div id="img_accueil">
        <img src="@/assets/images/accueil/accueil.jpg"> </img>
    </div>

    <div id="first_scare">
        <div id="second_scare">
            {{ pictureInfos.data.data.picture }}
        </div>
        <h2>   {{ pictureInfos.data.data.title_theme }} </h2>
        <h3> {{ pictureInfos.data.data.description_theme }} </h3>
    </div>
</template>

<style scoped></style>