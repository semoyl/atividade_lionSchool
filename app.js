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

app.get('/v1/lion-school/alunos/filtro/status', cors(), async function (request, response) {

    let uf = request.query.status

    let statusAluno = alunosCursos.statusAluno(uf)

    if(statusAluno){
        response.status(200) //Sucesso
        response.json(statusAluno)
    }else{
        response.status(404) //Not Found
        response.json({'status': 404, 'message': 'Não foi possivel encontrar nenhum item de retorno.'})
    }

})

app.get('/v1/lion-school/alunos/filtro/curso/status', cors(), async function (request, response) {

    let uf = request.query.curso

    let status = request.query.status

    let statusCurso = alunosCursos.cursoStatus(uf, status)

    if(statusCurso){
        response.status(200) //Sucesso
        response.json(statusCurso)
    }else{
        response.status(404) //Not Found
        response.json({'status': 404, 'message': 'Não foi possivel encontrar nenhum item de retorno.'})
    }

})

app.get('/v1/lion-school/alunos/filtro/curso/ano', cors(), async function (request, response) {

    let uf = request.query.curso

    let conclusao = request.query.conclusao

    let anoConclusao = alunosCursos.cursoAnoConclusao(uf, conclusao)

    if(anoConclusao){
        response.status(200) //Sucesso
        response.json(anoConclusao)
    }else{
        response.status(404) //Not Found
        response.json({'status': 404, 'message': 'Não foi possivel encontrar nenhum item de retorno.'})
    }

})

app.listen('8080', function(){
    console.log('API aguardando requisições . . .')
})

