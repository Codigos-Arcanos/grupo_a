<template>
  <v-container
    class="py-8 px-6"
    fluid
  >
  
    <v-row>
      <v-col
        v-for="card in cards"
        :key="card"
        cols="12"
      >
        <v-card>
          <v-subheader>Alunos</v-subheader>

          <v-card>
            <v-card-title>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
              ></v-text-field>
            </v-card-title>
            <v-data-table
              :headers="headers"
              :items="students"
              :search="search"
            ></v-data-table>
          </v-card>
  
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import api from "../connection/api";

export default {
  name: 'StudentsList',

  data: () => ({
    search: '',
    cards: ['Alunos'],
    drawer: null,
    students:[],
     headers:  [
          {
            text: 'RA',
            align: 'start',
            sortable: false,
            value: 'ra',
          },
          {
            text: 'Nome',
            value: 'nome',
          },
          { 
            text: 'CPF',
            value: 'cpf' 
          },
          { 
            text: 'Comandos',
            value: 'comandos' 
          }
        
        ],
  }),


  created() {
    this.getStudents();
  },

  methods: {
     getStudents() {
      
       api
         .get("/students")
         .then((res) => {
           this.students = res.data;
           console.log(this.students)
         })
         .catch((error) => {
           console.log(error);
         });
     },
   
   },
  }
</script>
