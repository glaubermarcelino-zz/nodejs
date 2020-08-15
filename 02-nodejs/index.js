/**
 * 0 - Obter os dados do usuário
 * 1 - Obter os dados do telefone de acordo com o usuario informado
 * 2 - Obtendo os dados do Endereço do usuario informado
 */
//Importando uma biblioteca para conversão de função com callback
const util = require('util')
const ObterEnderecoAsync = util.promisify(ObterEnderecoUsuario)


function ObterUsuario() {
    return new Promise(function resolveUsuario(resolve, reject) {
        setTimeout(() => {
            return resolve({
                id: 1,
                nome: 'Glauber Marcelino',
                dataNascimento: new Date()
            })
        }, 3000)
    })

}

function ObterTelefonePorUsuario(usuarioId) {
    return new Promise(function resolveTelefone(resolve, reject) {
        setTimeout(() => {
            return resolve({
                ddd: '79',
                telefone: '99650-5521'
            })
        }, 1000)
    })
}

function ObterEnderecoUsuario(usuarioId) {
    return new Promise(function resolveEndereco(resolve,reject){
    setTimeout(() => {
        return resolve({
            logradouro:'Rua',
            endereco: 'joão Ouro',
            numero: '101'
        })

    }, 1000)
})
}

function resolveUsuario(erro, usuario) {
    console.log('Usuário: ', usuario);
}
//Executando o metodo principal
main()
//1º Passo adicionar a palavra async => automaticamente ela retornará uma Promise
async function main(){
try{
    console.time('medida-promise')
    const usuario = await ObterUsuario()
    // const telefone = await ObterTelefonePorUsuario(usuario.id)
    // const endereco = await ObterEnderecoUsuario(usuario.id)
    const resultado = await Promise.all([
        ObterTelefonePorUsuario(usuario.id),
        ObterEnderecoUsuario(usuario.id)
    ])
    const telefone = resultado[0]
    const endereco = resultado[1]

    console.log(`
        Nome: ${usuario.nome},
        Telefone: (${telefone.ddd}) ${telefone.telefone},
        Endereço: ${endereco.logradouro} ${endereco.endereco},Nº ${endereco.numero}`
        )
        console.timeEnd('medida-promise')
}
catch(error){
   console.error("Algo esta errado",error)
}
}
// const usuario = ObterUsuario()
// usuario
//     .then(function (resultado) {
//         //Resolvo a promise para passar o objeto para o proximo THEN
//         return ObterEnderecoAsync(resultado.id)
//             .then(function (result) {
//                 return {
//                     usuario:
//                     {
//                         usuario: resultado
//                     },
//                     endereco: result
//                 }
//             })
//     })
//     .then(function resolverTelefone(result) {
//         return ObterTelefonePorUsuario(result.usuario.id)
//             .then(function (resultado) {
//                 return {
//                     usuario: result.usuario,
//                     endereco: result.endereco,
//                     telefone: resultado
//                 }
//             })
//     })
//     .then(function (resultado) {
//         console.log('Usuário ', resultado);
//     })
//     .catch(function (erro) {
//         console.error('Erro ', erro)
//     })

// ObterUsuario(function resolveUsuario(erro, usuario) {
//     //null || "" || 0
//     if (erro) {
//         console.error('Ocorreu um erro ao obter o Usuário', erro)
//         return
//     }
//     ObterEnderecoUsuario(usuario.id, function resolveEndereco(erro1, endereco) {
//         if (erro1) {
//             console.error('Ocorreu um erro ao obter o Endereço', erro1)
//             return
//         }

//         ObterTelefonePorUsuario(usuario.id, function resolveTelefone(erro2, telefone) {
//             if (erro2) {
//                 console.log('Ocorreu um erro ao obter o Telefone', erro2)
//                 return
//             }

//             console.log(`
//                 Nome: ${usuario.nome},
//                 Endereço: ${endereco.endereco},${endereco.numero}
//                 Telefone:(${telefone.ddd}) ${telefone.telefone} 
//             `);
//         })
//     })
// })





