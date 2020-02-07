import Vue from 'vue';
import Vuetify from 'vuetify/lib';

//internationalization - traduz os elementos em inglês do data-table
import pt from 'vuetify/es5/locale/pt'

Vue.use(Vuetify);

Vue.component('Tabela', {
    methods: {
      changeLocale () {
        this.$vuetify.lang.current = 'pt'
      },
    },
  })

export default new Vuetify({
    lang: {
        locales: { pt },
        current: 'pt',
      }
});
