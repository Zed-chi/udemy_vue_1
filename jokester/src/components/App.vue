<template>
    <div id="app">
        <h3> Got Jokes? </h3>
        <button @click="initJokes">add joke</button>
        <div>
            {{$store.state}}
        </div>
    </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
    methods:mapActions(["initJokes"])
}
</script>
  