<template>
  <div class="text-center">
      <v-btn
          class="ma-2"
          color="primary"
      >
        Accept
        <v-icon
            end
            icon="mdi-checkbox-marked-circle"
        ></v-icon>
      </v-btn>

      <v-btn
          class="ma-2"
          color="red"
      >
        Decline
        <v-icon
            end
            icon="mdi-cancel"
        ></v-icon>
      </v-btn>
  </div>
</template>

<script setup>
// eslint-disable-next-line
defineProps({
  msg: String
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mc-primary-nav {
  background-color: chocolate;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
