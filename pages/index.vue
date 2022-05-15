<template>
  <div>
    <Header/>
    <main>
      <section >
        <b-container
        fluid
        >
          <b-row
          class="row-count d-flex justify-content-center align-items-center"
          >
            <b-col>
              <h2 class="text-center text-white">{{showCount}} de 1126 <b class="color-pokemon">Pokemones</b></h2>
            </b-col>
          </b-row>
        </b-container>
        <b-container class="mt-5">
          <b-row class="mb-5">
            <b-col
            class="d-flex flex-row justify-content-center"
            >
              <div
              :class="(previous) ? 'btn-pokemon cursor-pointer shadow mr-5' : 'btn-pokemon shadow mr-5 cursor-not-allowed opacity-2'"
              @click="() => {
                if(previous){
                  changeUrl('previous')
                }
                
              }"
              >
                Anterior
              </div>
              <div
              @click="() => {
                if(next){
                  changeUrl('next')
                }
                else{

                }
                
              }"
              class="btn-pokemon cursor-pointer shadow mr-5"
              >
                {{(count === 1126) ? 'Iniciar de nuevo' : 'Siguiente'}}
              </div>
            </b-col>
          </b-row>
          <b-row>
            <b-col
            v-for="p in pokemones"
            :key="p.id"
            xl="4"
            class="mb-5"
            >
              <Card
              :url="p.url"
              />
            </b-col>
          </b-row>
        </b-container>
      </section>
    </main>
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
      next: '',
      previous: '',
      count:0,
      stop: false,
      url_old : 'https://pokeapi.co/api/v2/pokemon/'
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
          console.log(res.results.length)
          this.count += res.results.length;
          this.next = res.next;
          this.previous = res.previous;
        })
    },
    async changeUrl(type){
       let url = (type === 'next') ? this.next : this.previous;
       await api.getPokemonAll(url)
        .then(res => {
          this.pokemones = res.results;
          if(type === 'next'){
            this.count += res.results.length;
          }
          else{
            this.count -= res.results.length;
          }
          
          this.next = res.next;
          this.previous = res.previous;
        })
    }
  }
  
}
</script>
