<template>
    <div id="app">
        <h3> Got Jokes? </h3>
        <button @click="initJokes">add joke</button>
        <div>
            
        </div>

        <div>
            <Joke 
                v-for="(joke, index) in $store.state.jokes"
                v-bind:joke="joke"
                v-bind:key="index"
            >

            </Joke>
        </div>
    </div>
</template>

<script>
import {mapActions} from "vuex";
import Joke from "./Joke.vue"

export default {
    methods:mapActions(["initJokes"]),
    components:{
        Joke
    }
}
</script>
  