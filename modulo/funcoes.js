/*******************************************************************
 * Objetivo: Criar Funções para Manipular os dados de alunos e cursos de uma escola
 * Data: 22/11/2024
 * Autor: Gustavo Rocha Gomes
 * Versão: 1.0
 *******************************************************************/

var arquivo_curso = require('./cursos.js')
var arquivo_aluno = require('./alunos.js')
const ListaAlunos = arquivo_aluno.alunos
const { stat } = require('fs')
const { log } = require('console')

const listaDeCursos = function(){
    nomeCurso = []
    let listaCursos = {
                        cursos:[]
                    }
    let status = true

    arquivo_curso.cursos.forEach(function(item){
        listaCursos.cursos.push(item)
    })

    if(nomeCurso = ""){
        status = false
        return status
    }else{
        return listaCursos
    }
}

const listaDeAlunos = function(){
    nomesAlunos = []
    let listaDeAlunos = {
                            alunos: []
                        }
    let status = true

    arquivo_aluno.alunos.forEach(function(item){
        listaDeAlunos.alunos.push(item)
    })

    if(nomesAlunos = ""){
        status = false
        return status
    }else{
        return listaDeAlunos
    }
}

const listaAlunoMatricula = function(matricula){
    let descricaoEncontrada

    let status = false
    ListaAlunos.forEach(function(item){
        if(item.matricula == matricula){
            descricaoEncontrada = item
            status = true
        }
    })
        if(status == true){
            return descricaoEncontrada
        }else{
            return status
        }
    
}

const listaAlunoCurso = function(curso){
    let alunos = {
                    curso: curso,
                    alunos: []
                }
    let status = false

    arquivo_aluno.alunos.forEach(function(item){
        item.curso.forEach(function(item2){
            if(item2.sigla == curso){
                alunos.alunos.push(item)
                status = true
            }
        })    
    })

    if (status == true){
        return alunos
    }else{
        return status
    }
}

const statusAluno = function(status){
    listaDeStatus = {
                        listaStatus: []
                    }
    let status2 = false
    arquivo_aluno.alunos.forEach(function(item){
        if(item.status == status){
            status2 = true
        }
        listaStatus =   {
            foto: item.foto,
            nomeAluno: item.nome,
            matricula: item.matricula,
            sexo: item.sexo,
            cursoAluno: '',
            statusAluno: status        
        }
        item.curso.forEach(function(item2){
            listaStatus.cursoAluno = item2
        })
        listaDeStatus.listaStatus.push(listaStatus)
    })

    if (status2 == true){
        return listaDeStatus
    }else{
        return status2
    }
}

const cursoStatus = function(curso, status){
    let alunosCurso = {
                        listaAlunosStatus: []
                        }
    let statusTF = false

    ListaAlunos.forEach(function(item){
        item.curso.forEach(function(item2){
        if(item2.sigla == curso){
                item2.disciplinas.forEach(function(item3){
                    if(item3.status = status){
                        statusTF = true
                        alunosCurso.listaAlunosStatus.push(item)
                    }
                })
                }
            })    
        })
        if(statusTF){
        return alunosCurso
        }else{
            return false
        }
        
        
    
}

const cursoAnoConclusao = function(curso, anoConclusao){
    let listaCursoAno = {
                            cursoAno: []
                        } 
    let status = false  

    arquivo_aluno.alunos.forEach(function(item){
        item.curso.forEach(function(item2){
            if(item2.sigla == curso){
                if(item2.conclusao == anoConclusao){
                    listaCursoAno.cursoAno.push(item)
                    status = true
                }
            }
        })
    })

    if(status == true){
        return listaCursoAno
    }else{
        return status
    }
}




module.exports = {
    listaDeCursos,
    listaDeAlunos,
    listaAlunoMatricula,
    listaAlunoCurso,
    statusAluno,
    cursoStatus,
    cursoAnoConclusao
}

