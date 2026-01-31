<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'


const router = useRouter()
const authentification = ref(false);

async function Account() {
    const respAccount = await fetch("http://localhost:3000/api/users/me", {
        credentials: "include"
    })

    if (respAccount.status === 200) {
        authentification.value = true;
    } else {
        authentification.value = false;
    }
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

async function goToLogin() {
    router.push('/login');
}

async function goToAccount() {
    router.push('/account');
}

async function goToModerationsComments() {
    router.push('/moderator/comments')
}

Account();

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
                <li v-if="!authentification">
                    <button @click=goToLogin() id="Account"> Connexion > </button>
                </li>
                <li v-else>
                    <button @click=goToAccount() id="Account"> Mon compte > </button>
                </li>
            </ul>
        </nav>
    </header id="accueil">

    <h1> Ajouter un Challenge ! </h1>
    <button @click=goToModerationsComments()> Modérations </button>
    <div>
        <br>
        <form action="http://localhost:3000/api/challenges" enctype="multipart/form-data" method="post">
            <div class="form-group">
                <input type="file" class="form-control-file" name="uploaded_file">
                <input type="text" class="title" placeholder="Title" name="title">
                <input type="text" class="description" placeholder="Description" name="description">
                <input type="date" class="date_start" placeholder="Date début du challenge" name="date_start">
                <input type="date" class="date_end" placeholder="Date début du challenge" name="date_end">
                <input type="submit" value="Envoyer" class="btn btn-default">
            </div>
        </form>
    </div>

</template>

<style scoped></style>