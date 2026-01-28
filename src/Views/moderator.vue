<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const comments = ref([]);
const router = useRouter()


async function getComments() {
    const resp = await fetch("http://localhost:3000/api/comments")
    const data = await resp.json();
    comments.value = data;
}

async function goToCurrentChallenge() {
    router.push('/currentChallenge');
}

async function goToAccueil() {
    router.push('/');
}

async function goToCurrentParticipations() {
    router.push('/currentParticipations');
}

async function goToParticipations() {
    router.push('/participations');
}

async function goToAccount() {
    router.push('/account');
}

async function goToAddChallenge() {
    router.push('/moderator');
}

getComments();
</script>

<template>
    <header>
        <nav>
            <ul>
                <li>
                    <button @click=goToAccueil()> Accueil </button>
                </li>
                <li>
                    <button @click=goToCurrentChallenge()> Challenge </button>
                </li>
                <li>
                    <button @click=goToCurrentParticipations()> Participations de la semaine </button>
                </li>
                <li>
                    <button @click=goToParticipations()> Toutes les participations </button>
                </li>
                <li>
                    <button @click=goToAccount()> Mon compte </button>
                </li>
            </ul>
        </nav>
    </header id="accueil">

    <h1> Les commentaires </h1>
    <button @click=goToAddChallenge()> Ajouter un challenge ! </button>
    <div>
        <br>
        <li v-for="(comments) in comments.data">
            {{ comments.content }}
            <button @click=Unvisible()> Non visible </button>
        </li>
    </div>
    <br>

</template>

<style scoped></style>