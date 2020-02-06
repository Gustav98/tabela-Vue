<template>
  <v-app>
    <v-app-bar
      app
      color="#42949e"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Logo SOC"
          class="shrink mr-2"
          contain
          src="./assets/imgs/soc-logo.png"
          transition="scale-transition"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/Gustav98"
        target="_blank"
        text
      >
        <span class="mr-2">Github Gustavo</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <Tabela/>
    </v-content>
  </v-app>
</template>

<script>
import Tabela from './components/Tabela';

export default {
  name: 'App',

  components: {
    Tabela,
  },

  data: () => ({
    //
  }),
};
</script>
