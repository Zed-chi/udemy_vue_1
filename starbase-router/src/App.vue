<template>
  <div id="app">
    <h3>Star something router</h3>
    <h4>
      <router-link class="link" to="/data/people">Meets guys</router-link>
      |
      <router-link class="link" to="/data/planets">Meet planets</router-link>
    </h4>
    <router-view></router-view>
  </div>
</template>