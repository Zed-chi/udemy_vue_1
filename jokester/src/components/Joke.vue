<template>
    <div class="joke">
        <p>{{joke.setup}}</p>
        <p>{{joke.punchline}}</p>
    </div>
</template>

<script>
export default {
    props:["joke"]
}
</script>
