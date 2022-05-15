<template>
    <div
    :id="detail.id"
    class="div-card shadow d-flex flex-column justify-content-center align-items-center"
    >
        <div class="d-flex flex-row align-items-baseline justify-content-around">
        <h6 class="text-xl mr-2 text-white">{{detail.name}}</h6>    <p class="text-sm mr-2 text-white">PS {{detail.base_experience}}</p>
        </div>
        <div>
            <b-img
            class="img-fluid img-card"
            :src="(detail.sprites) ? detail.sprites.front_default : null"
            >

            </b-img>
        </div>
        <div>
            <p class="font-bold text-white">Detalle</p>
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

