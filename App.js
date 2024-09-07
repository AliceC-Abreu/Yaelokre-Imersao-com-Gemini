function buscar () {
    console.log(dados);
    let section = document.getElementById("resultados-pesquisa")

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (!campoPesquisa) {
        section.innerHTML = "<p>Isso nunca existiu<p>"
        return 
    }

    let resultados = ""

    for (let dado of dados) {
        if (dado.titulo.includes(campoPesquisa)||dado.descrição.includes(campoPesquisa)||dado.tags.includes(campoPesquisa)) {
            resultados += `
        <div class="item-resultado">
                <h2>
                    <a href= "#" target="_blank">${dado.titulo}</a>
                </h2>
                    <p class="descricao-meta">${dado.descrição}</p>
                <a href=${dado.link} target="_blank">Mais Informações</a>
        </div>
    `
        }
}

if(!resultados){
    resultados = "<p>Isso deixou de existir<p>"
}

section.innerHTML = resultados
}
    