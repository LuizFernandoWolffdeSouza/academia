const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
function entrar() {
    rl.question('Digite o seu nome', (resposta) => {
        if (resposta.toString().trim().toLowerCase() != "") {
            console.log("Bem vindo ao menu de menu de medidas")
            menu()
        } else {
            console.log("Por favor, digite o seu nome corretamente")
            rl.close()
        }
    })
}
entrar()
let antropómetrico = []
let macros = []




function menu() {
    console.log(`Menu de opções
   1.Tira medidas antropómetricas
   2. Listar medidas antropómetricas
   3. calcular macros
   4. exibir macros
   5. sair `)
    rl.question(`Escolha uma das opções abaixo`, (resposta) => {
        switch (resposta) {
            case '1':
                medidaantropometrica()
                break
            case '2':
                listantropometrica()
                break
            case '3':
                calculomacro()
                break
            case '4':
                exibirmacros()
                break
            case '5':
                rl.close()
                break
            default:
                menu()
                break;
        }
    })
}
//1-Cadastrar medidas antropométricas
function medidaantropometrica() {
    rl.question('Digite  a sua idade: ', (idade) => {
        rl.question('Digite o seu peso: ', (peso) => {
            rl.question('Digite a sua altura: ', (altura = toString()) => {
                calculoimc = peso / (altura * altura)
                antropómetrico.push({ idade: idade, peso: peso, altura: altura, })
                console.log(`${calculoimc}`)
                menu()
            })
        })
    })
}
//2-Exibir listas antropométricas
function listantropometrica() {
    if (antropómetrico.length == 0) {
        console.log("nenhum  dado encontrado")
    }
    else {
        for (let i = 0; i < antropómetrico.length; i++) {
            console.log(`A sua idade é${antropómetrico[i].idade}`)
            console.log(`O seu peso é ${antropómetrico[i].peso}`)
            console.log(`A sua altura é ${antropómetrico[i].altura}`)
            console.log(`O seu cálculo de IMC é ${calculoimc.toFixed(2)}`)
            menu()
        }
    }
}


//3-Calculadora de macros
function calculomacro() {
     var calculogordura
     let calculoproteina
    rl.question('Digite o seu peso', (peso) => {
        rl.question('Digite o quanto você quer de proteína: 1.8kg, 2.0 kg ou 2.2 kg:', (proteina = toString().trim()) => {
            rl.question('Digite a quantidade de gordura: 0.5kg, 0.7kg ou 1kg:', (gordura=toString().trim()) => {
                if (proteina == "2.0" || proteina == "1.8" || proteina == "2.2") {
                    calculoproteina = peso * proteina


                }
                else if (gordura == "0.5" || gordura == '0.7' || gordura == "1.0") {
                    calculogordura = peso * gordura
                }
                macros.push({ proteina: calculoproteina, gordura: calculogordura })
                console.log( "A proteína ficou em " + calculoproteina)
                console.log( "A gordura ficou em " + calculogordura)
                menu()


        })


        })
    })
}
if (calculomacro()!= listantropometrica) {
    console.log("cacete")
    
}
