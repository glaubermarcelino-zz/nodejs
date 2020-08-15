const axios = require('axios')
const URL = 'https://swapi.co/api/people'

async function obterPessoas(nome){
    const url = `${URL}/?search=${nome}&format=json`
    const response = await axios.get(url)
    return response.data
}

obterPessoas('r2')
.then(function(resultado){
    return resultado
})
.catch(function(error){
    console.error('Algo deu errado',error);
})

//Se a chave for o mesmo nome do objeto/Valor n?o ? necess?rio passar o valor
module.exports = {
    obterPessoas
}