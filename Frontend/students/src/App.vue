<template>
  <v-app>
    
    <v-main>
      <SideBar/>
      <NavBar/>
      <StudentsList/>

    </v-main>
  </v-app>
</template>

<script>
import SideBar from './components/SideBar';
import NavBar from './components/NavBar';
import StudentsList from './components/StudentsList';


export default {
  name: 'App',

  components: {
    SideBar,
    NavBar,
    StudentsList

  },
  

  data: () => ({
    //
    
  }),
   
};


</script>
