<script setup>
import { ref } from 'vue'
const votes = ref([]);
const selectValue = ref([]);

async function init (){
    const resp = await fetch("http://localhost:3000/api/votes/2")
    const data = await resp.json();
    votes.value = data;
}

init();

</script>

<template>
    <header> 
        <nav>
            <ul>
            <li><a href=""> Accueil </a></li>
            <li><RouterLink to="/test"> TEST </RouterLink></li>
            <li> <a href =""> Participations </a></li>
            <li> <a href =""> Connexion </a></li>
            </ul>
        </nav> 
    </header id="accueil">
        <div id="first_scare">

        </div>
        <div id="second_scare">
            <h2>CHALLENGE DE LA SEMAINE !</h2>
            <h3> (THÈME DE LA SEMAINE) </h3>

        </div>
        <div id="img_accueil">
            <img src="@/assets/images/accueil/accueil.jpg"> </img>
        </div>

    <section>



    </section>





    <select id="select" v-model="selectValue"> 
        <option v-for ="(vote, i) in votes" :value ="vote">
            {{ vote.note_technique }}
        </option>
    </select>
</template>

<style scoped></style>
