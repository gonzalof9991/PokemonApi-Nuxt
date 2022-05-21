<template>
  <div>
    <Header/>
    <main>
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
    <footer class="footer">
      <section class="footer__section">
        
      </section>
    </footer>
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
