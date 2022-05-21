<template>
  <div>
    <Header/>
    <main>
      <section class="section__img">

      </section>
      <section class="next">
        <div 
        @click="changeUrl()"
        class="next__button">
          Cargar Pokemones
        </div>
      </section>
      <section class="section__main" >
        <div
        v-for="p in pokemones"
        :key="p.id"
        class="section__card">
          <Card
          :url="p.url"
          />
        </div>

        
      </section>
    </main>
    <Footer/>
  </div>
</template>

<script>
import api from '~/services/api';
export default {
  name: 'IndexPage',
  data(){
    return{
      data: [],
      pokemones: [],
      url_old : 'https://pokeapi.co/api/v2/pokemon/',
      showModal: false,
      urlModal: ''
    }
  },
  created(){
    this.getPokemonAll();
  },
  computed:{
    showCount(){
      return this.count;
    }
  },
  methods:{
    async getPokemonAll(){
      await api.getPokemonAll()
        .then(res => {
          this.pokemones = res.results;
          this.next = res.next;
        })
    },
    async changeUrl(){
       let url = this.next;
       await api.getPokemonAll(url)
        .then(res => {
          this.pokemones = res.results;
          this.next = res.next;
        })
    },
    changeModal(url){
      this.showModal = false; 
      this.urlModal = url;
      setTimeout(() => {
        this.showModal = true;
      },1000);
    }
  }
  
}
</script>
