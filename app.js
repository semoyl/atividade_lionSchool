/*******************************************************************
 * Objetivo: Criar uma API para processar as funções
 * Data: 29/11/2024
 * Autor: Gustavo Rocha Gomes
 * Versão: 1.0
 *******************************************************************/

const express       = require('express')
const cors          = require('cors')
const bodyParser    = require('body-parser')

const app = express()

app.use((request, response, next)=>{

    response.header('Access-Control-Allow-Origin', '*')

    response.header('Access-Control-Allow-Methods', 'GET')

    app.use(cors())

    next()
})

const alunosCursos = require ('./modulo/funcoes.js')

app.get('/v1/lion-school/cursos', cors(), async function (request, response) {

    let dadosCursos = alunosCursos.listaDeCursos()

    if(dadosCursos){
        response.status(200) //Sucesso
        response.json(dadosCursos)
    }else{
        response.status(404) //Not Found
        response.json({'status': 404, 'message': 'Não foi possivel encontrar nenhum item de retorno.'})
    }

})

app.get('/v1/lion-school/alunos', cors(), async function (request, response) {

    let dadosAlunos = alunosCursos.listaDeAlunos()

    if(dadosAlunos){
        response.status(200) //Sucesso
        response.json(dadosAlunos)
    }else{
        response.status(404) //Not Found
        response.json({'status': 404, 'message': 'Não foi possivel encontrar nenhum item de retorno.'})
    }

})

app.get('/v1/lion-school/alunos/filtro', cors(), async function (request, response) {

    let statusFC = request.query.statusA

    let curso1 = request.query.curso

    let statusARE = request.query.status

    let conclusao = request.query.anoConclusao


    if(statusFC != "" && statusFC != undefined){
        let statusFimConc = alunosCursos.statusAluno(statusFC)
        response.status(200)
        response.json(statusFimConc)
    }else if(curso1 != "" && curso1 != undefined && statusARE != "" && statusARE!= undefined){
        let statusCurso = alunosCursos.cursoStatus(curso1, statusARE)
        response.status(200)
        response.json(statusCurso)
    }else if(curso1 != "" && curso1 != undefined && conclusao != "" && conclusao != undefined){
        let anoConclusao = alunosCursos.cursoAnoConclusao(curso1, conclusao)
        response.status(200)
        response.json(anoConclusao)
    }else{
        response.status(404) //Not Found
        response.json({'status': 404, 'message': 'Não foi possivel encontrar nenhum item de retorno.'})
    }
})

app.get('/v1/lion-school/alunos/:matricula', cors(), async function (request, response) {

    let uf = request.params.matricula

    let matriculaAlunos = alunosCursos.listaAlunoMatricula(uf)



    if(matriculaAlunos){
        response.status(200) //Sucesso
        response.json(matriculaAlunos)
    }else{
        response.status(404) //Not Found
        response.json({'status': 404, 'message': 'Não foi possivel encontrar nenhum item de retorno.'})
    }

})

app.get('/v1/lion-school/alunos/cursos/:curso', cors(), async function (request, response) {

    let uf = request.params.curso

    let cursoAlunos = alunosCursos.listaAlunoCurso(uf)

    if(cursoAlunos){
        response.status(200) //Sucesso
        response.json(cursoAlunos)
    }else{
        response.status(404) //Not Found
        response.json({'status': 404, 'message': 'Não foi possivel encontrar nenhum item de retorno.'})
    }

})




app.listen('8080', function(){
    console.log('API aguardando requisições . . .')
})

