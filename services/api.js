import axios from 'axios';
const URL_BASE = 'https://pokeapi.co/api/v2/pokemon/';
const getPokemonAll = async (URL) => {
    let url_get = '';
    url_get = (URL) ? URL : URL_BASE
    return await axios.get(url_get)
        .then(res => {return res.data})
}

const getPokemonId = async (url) => {
    return await axios.get(`${url}`)
        .then( res => {return res.data})
}

export default {
    getPokemonAll,
    getPokemonId
}