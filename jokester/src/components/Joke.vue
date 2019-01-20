<template>
    <div class="joke">
        <p>{{joke.setup}}</p>
        <p>{{joke.punchline}}</p>
        <button @click="removeJoke(index)">&times;</button>
    </div>
</template>

<script>
import {mapActions} from "vuex";
export default {
    methods:mapActions([
        "removeJoke"
    ]),
    props:["joke", "index"]
}
</script>
