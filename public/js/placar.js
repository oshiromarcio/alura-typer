
function inserePlacar() {
    var corpoTabela = $(".placar").find("tbody");
    var row = novaLinha("Oshiro", $("#contador-palavras").text());
    insereExclusaoBotaoRemover(row);
    corpoTabela.append(row);
}

function insereExclusaoBotaoRemover(linha) {
    linha.find(".botao-remover").click(removeLinha);
}

function novaLinha(usuario, palavras) {
    /* Coluna Excluir */
    var icon = $("<i>").addClass("small").addClass("material-icons").text("delete");
    var link = $("<a>").addClass("botao-remover").attr("href", "#");
    link.append(icon);

    /* Monta linha */
    var row = $("<tr>").append($("<td>").text(usuario));
    row.append($("<td>").text(palavras));
    row.append($("<td>").append(link));

    return row;
}

function removeLinha(event) {
    event.preventDefault();
    $(this).parent().parent().remove();
}

function adicionaFuncaoRemoverNoPlacar() {
    linhas = $("tbody").find("tr").each(function(index) {
        insereExclusaoBotaoRemover($(this));
    });
}
