var lista = document.querySelector(".div-list");
var input = document.querySelector(".ipt");
var botao = document.querySelector(".btn-list")
var Atividades = []

function mostrarAtividades() {
    lista.innerHTML = "";
    for (atividade of Atividades) {
        var criarAtividade = document.createElement("li");
        var textoTarefa = document.createTextNode(atividade);
        const Link = document.createElement("a")
        const linkTest = document.createTextNode("X")
        Link.appendChild(linkTest);
        const pos = Atividades.indexOf(atividade);
        Link.setAttribute("onclick", `deletarTarefa(${pos})`);
        criarAtividade.appendChild(textoTarefa)
        lista.appendChild(criarAtividade)
        criarAtividade.appendChild(Link);
    }
}
mostrarAtividades();

function addTarefa() {
    if (input.value == "") {
        console.log("eai irmao")
    } else {
        let textIPT = input.value;
        Atividades.push(textIPT);
        input.value = "";
        mostrarAtividades();
    }
}
botao.setAttribute("onclick", "addTarefa()")

function deletarTarefa(pos) {
    Atividades.splice(pos, 1)
    mostrarAtividades();
}