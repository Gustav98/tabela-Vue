<template>
    <v-simple-table dark>
        <template v-slot:default>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th class="text-left">Título</th>
                            <th class="text-left">Popularidade</th>
                            <th class="text-left">Nota</th>
                            <th class="text-left">Data de lançamento</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in items" :key="item.id">
                            <td>{{ item.title }}</td>
                            <td>{{ item.popularity }}</td>
                            <td>{{ item.vote_average }}</td>
                            <td>{{ item.release_date }}</td>
                        </tr>
                    </tbody>
                </table>
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
          items: null,
          baseUrl: 'https://api.themoviedb.org/3',
          apiKey: 'cb75470b86738319c092b41e2a9583da',
      }
  },
  created(){
      this.getDados()
  },
  methods: {
    getDados(){
        axios.get(this.baseUrl + '/movie/popular?api_key=' + this.apiKey + '&language=pt-BR').then(response => {
            this.items = response.data.results;
        }).catch( error => console.log(error));
    }
  }
};
</script>
