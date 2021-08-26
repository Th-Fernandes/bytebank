this.name = "Thiag6o"

function mostrarNome(name) {
    console.log(this.name = name)
}

//console.log(mostrarNome('Thiago'))

const data = {
    ageToDrink:function(n) {
        console.log(this.name)
    }
}

//data.ageToDrink(this)

const neimi = {
    name: 'Joseph'
}

function callName(age) {
    this.age = age
    console.log(this.name, this.age)
}

const bound = callName.bind(neimi)
bound()
