<template>
    <div
    :id="detail.id"
    class="card__main"
    >
        <div class="card__title">
            <h6 class="h6__title mr-3">{{detail.name}}</h6>
        </div>
        <figure class="card__picture">
            <b-img
            class="card__img"
            :src="(detail.sprites) ? detail.sprites.front_default : null"
            >

            </b-img>
        </figure>
        <div class="card__footer">
            <p class="p__footer">Detalle</p>
        </div>
        
    </div>
</template>
<script>
import api from '~/services/api';
export default {
    name:'Card',
    props: ['url'],
    data(){
        return{
            detail: []
        }
    },
    async created(){
        await this.getPokemonId();
        this.changeImage(this.detail.id,this.detail);
        
    },
    computed:{
        showSrc(){
            try {
                return this.detail;    
            } catch (error) {
                console.error(error)
            }
            
        }
    },
    methods:{
        async getPokemonId(){
            await api.getPokemonId(this.url)
                .then(res => {
                    this.detail = res;
                    
                })
        },
        changeImage(id,detail){
            try {
                let div = document.getElementById(`${id}`)
                //console.log(div);
                let type = detail.types[0].type.name;
                //console.log(detail.types[0].type.name);
                div.style.background = 'url('+`/img/${type}.png`+')';
            } catch (error) {
                console.error(error)
            }
            
        }
    },
    watch:{
        async url(){
            await this.getPokemonId();
            this.changeImage(this.detail.id,this.detail);
        }
    }
}
</script>
<style scoped>

</style>

