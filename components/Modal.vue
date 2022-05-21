<template>
    <div class="modal__pokemon">
        <section class="section__modal">
            <div class="header__modal">
                <div class="header__text">
                    <h3>#00{{detail.id}} {{detail.name}}</h3>
                </div>
                <div class="header__close">
                    X
                </div>
            </div>
            <div class="body__modal">
                <figure
                class="body__picture"
                v-if="detail.sprites"
                >
                    <img :src="detail.sprites.front_default" class="body__img">
                </figure>
                <div class="body__texts">
                    <p>lorem</p>
                </div>
            </div>
           
        </section>
    </div>
</template>
<script>
import api from '~/services/api';
export default {
    name:'Modal',
    props:['url'],
    data(){
        return{
            detail: []
        }
    },
    async created(){
        await this.getPokemonId();
        
    },
    methods:{
         async getPokemonId(){
            await api.getPokemonId(this.url)
                .then(res => {
                    this.detail = res;
                    
                })
        },
    }
}
</script>