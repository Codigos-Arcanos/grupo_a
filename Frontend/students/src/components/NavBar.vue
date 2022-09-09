<template>
  <v-app-bar
    app
    color="blue-grey lighten-1"
    dark
  >
    <div class="d-flex align-center">
      <v-img
        alt="+A Educação"
        class="shrink mr-2"
        contain
        src="../../public/68747470733a2f2f6d616973616564752e636f6d2e62722f68756266732f736974652d677275706f2d612f6c6f676f2d6d6169732d612d656475636163616f2e737667.svg"
        transition="scale-transition"
        width="70"
      />
      
    </div>

    <v-spacer></v-spacer>

    <v-btn
      href="https://maisaedu.com.br/"
      target="_blank"
      text
    >
      <span class="mr-2">Conheça +A Educação</span>
      <v-icon>mdi-open-in-new</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
  export default {
    name: 'NavBar',

    data: () => ({
     
    }),
  }
</script>
