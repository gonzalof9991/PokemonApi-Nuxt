// Funcion para traer datos de API
import axios from 'axios';
function getData(){
    const URL = 'https://pokeapi.co/api/v2/pokemon/';
    // Return devuelve los datos que traemos del metodo GET
    return axios.get(URL)
        .then(res => res.data)
        .catch((value) => {
            console.error(value)
        })
}

function getDetail(value){
    return axios.get(value)
        .then(res => res.data)
}

export default {
    getData,
    getDetail
}