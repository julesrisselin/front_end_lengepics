<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const route =  useRoute();
const router = useRouter();
const id_participation = route.params.id;
const participation = ref([]);
const user = ref([]);

console.log(route.params.id)

const paramsPart = new URLSearchParams();
paramsPart.append("id_participation", id_participation);



async function getParticipations(){
    const respPart = await fetch(`http://localhost:3000/api/participations?id_participation=${paramsPart}`)
    const dataPart = await respPart.json();
    participation.value = dataPart;
    console.log(participation.value.data.user_id)
    const paramsUser = new URLSearchParams();
    paramsUser.append("user_id", participation.value.data.user_id);

    const respUser = await fetch(`http://localhost:3000/api/users?user_id=${paramsUser}`)
    const dataUser = await respUser.json();
    console.log(dataUser);
    user.value = dataUser;
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

async function goToAllParticipations() {
    router.push('/participations');
}

async function goToLogin() {
    router.push('/login');
}

getParticipations();
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
                    <button @click=goToAllParticipations()> Toutes les participations </button>
                </li>
                <li>
                    <button @click=goToLogin()> Connexion > </button>
                </li>
            </ul>
        </nav>
    </header id="accueil">

    <div>
        <img :src= "'http://localhost:3000/' +  participation.data.picture_updated_url" id ="picture"></img>    
    </div>
    <div>
        <h3> Fait par {{  user.data.name }} {{  user.data.firstname }} le {{ participation.data.date_submission }}</h3>
    </div>
    <div>
        <h3> Pour le challenge N°{{ participation.data.id_challenge }} </h3>
    </div>

    <form action="http://localhost:3000/api/votes" method="post">
        <div class="form-group">
            <input type="number" max="5" class="vote" placeholder="note de créativité" name="note_creativity">
            <input type="number" max="5" class="vote" placeholder="note de technique" name="note_technique">
            <input type="number"max="5" class="vote" placeholder="note respect du thème" name="note_on_theme">
            <input type="submit" value="Envoyer" class="btn btn-default">
        </div>
    </form>
    <br>
    <form action="http://localhost:3000/api/comments" method="post">
        <div class="form-group">
            <input type="text" class="comments" placeholder="Entrez un commentaires" name="comments">
            <input type="submit" value="Envoyer" class="btn btn-default">
        </div>
    </form>


</template>

<style scoped>
#picture {
    max-height: 150px;
    max-width: 150px;
}
</style>