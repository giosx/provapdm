let listaAlunos = [
    {
        nome: "Kayky",
        idade: 16,
        materias: [
            {
                nome: "TIA",
                presenca: 75,
                nota: 10
            },
            {
                nome: "PDM",
                presenca: 90,
                nota: 10
            },
        ],
        matriculadoEm: "2024/02/23",
        numeroChamada: 1221
    },
    {
        nome: "Ana",
        idade: 17,
        materias: [
            {
                nome: "BD1",
                presenca: 100,
                nota: 10
            },
            {
                nome: "PDM",
                presenca: 90,
                nota: 7.5
            },
        ],
        matriculadoEm: "2024/04/23",
        numeroChamada: 1222
    },
    {
        nome: "Matheus",
        idade: 20,
        materias: [
            {
                nome: "TIA",
                presenca: 79,
                nota: 8.5
            },
            {
                nome: "PDM",
                presenca: 60,
                nota: 6.5
            },
        ],
        matriculadoEm: "2024/02/25",
        numeroChamada: 1223
    },
    {
        nome: "Jorge",
        idade: 19,
        materias: [
            {
                nome: "TIA",
                presenca: 100,
                nota: 10
            },
            {
                nome: "PDM",
                presenca: 79,
                nota: 10
            },
        ],
        matriculadoEm: "2024/02/29",
        numeroChamada: 1224
    },
    {
        nome: "Richard",
        idade: 18,
        materias: [
            {
                nome: "BD2",
                presenca: 74,
                nota: 10
            },
            {
                nome: "BD1",
                presenca: 90,
                nota: 7
            },
        ],
        matriculadoEm: "2024/12/23",
        numeroChamada: 1225
    },
]

export function listarAlunos(){
    for(var i = 0; i < alunos.length; i++) {
        if(listaAlunos[i].nome === "Kayky"){
          aluno = alunos[i];
          return;
        }
    }
}

export function buscarAlunoPeloNumeroDaChamada(){
    for (let i = 0; i < listaAlunos.length; i++) {
        if (listaAlunos[i] === numeroChamada) {
            console.log(Encontrei ${nome} na posição ${i})
        }
    }
}

export function listarAlunosAprovados(materia) {
    if (materia.nota >= 6 && materia.presenca >= 75) {
        
        console.log("APROVADO")
        console.log("NOTA: " + materia.nota)
        console.log("PRESENCA: " + materia.presenca)
        return
    }
}

export function listarAlunosAprovados(materia) {
    if (materia.nota < 6 && materia.presenca < 75) {
    
        console.log("REPROVADO: ")
        console.log("NOTA: " + materia.nota)
        console.log("PRESENCA: " + materia.presenca)
        return
    }
}

export function listarAlunoPorMesMatricula(){
    for (let i = 0; i < listaAlunos.length; i++) {
        if (listaAlunos[i] === matriculadoEm) {
            console.log(Encontrei ${nome} na posição ${i})
        }
    }
}