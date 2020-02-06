<template>
    <v-simple-table dark>
        <template v-slot:default>
            <div>
                <v-card-title>
                    Filmes em cartaz no Brasil
                    <v-spacer></v-spacer>
                    <v-text-field
                        v-model="search"
                        label="Procure o filme aqui"
                        single-line
                        hide-details
                    ></v-text-field>
                </v-card-title>
                <v-data-table 
                :search="search"
                :items="items"
                :headers="columns"
                >
                 <template v-slot:items="props">
                    <td class="text-xs-center">{{ props.item.title }}</td>
                    <td class="text-xs-center">{{ props.item.popularity }}</td>
                    <td class="text-xs-center">{{ props.item.vote_average  }}</td>
                    <td class="text-xs-center">{{ props.item.release_date }}</td>
                </template>
                </v-data-table>
            </div>
        </template>
    </v-simple-table>
</template>


<script>
import axios from 'axios'
export default {
  name: 'Tabela',
  data(){
      return{
          search: '',
          items: [],
          baseUrl: 'https://api.themoviedb.org/3',
          apiKey: 'cb75470b86738319c092b41e2a9583da',
          loading: true,
          errored: false,
          columns: [
          {
            text: 'Título',
            sortable: false,
            value: 'title',
          },
          { text: 'Popularidade', value: 'popularity' },
          { text: 'Média de Votos', value: 'vote_average' },
          { text: 'Data de lançamento', value: 'release_date' },
        ],
      }
  },
  mounted(){
      this.getDados()
  },
  methods: {
    getDados(){
        axios
        .get(this.baseUrl + '/movie/now_playing?api_key=' + this.apiKey + '&language=pt-BR&region=BR').then(response => {
            this.items = response.data.results;
        })
        .catch( error => {
            console.log(error)
            this.errored = true
        })
        .finally(() => this.loading = false);
    }
  }
};
</script>
