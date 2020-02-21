
var campoDigitacao = $(".area-digitacao");
var tempoInicial = $("#tempo-digitacao").text();

$(function() {
    console.log("principal function");
    atualizaTamanhoFrase();
    inicializaContadores();
    inicializaCronometro();
    inicializaMarcadores();
    adicionaFuncaoRemoverNoPlacar();
    $("#botao-reiniciar").click(reiniciaJogo);
    $("#botao-reiniciar").attr("disabled", true);
})

function inicializaMarcadores() {
    var frase = $(".frase").text();
    campoDigitacao.on("input", function() {
        if (frase.startsWith(campoDigitacao.val())) { //if (campoDigitacao.val() == frase.substr(0, campoDigitacao.val().length)) {
            campoDigitacao.addClass("borda-verde");
            campoDigitacao.removeClass("borda-vermelha");
        }
        else {
            campoDigitacao.removeClass("borda-verde");
            campoDigitacao.addClass("borda-vermelha");
        }
    });
}

function atualizaTamanhoFrase() {
    var frase = $(".frase").text();
    var numPalavras = frase.split(" ").length;
    $("#tamanho-frase").text(numPalavras);
}

function inicializaContadores() {
    campoDigitacao.on("input", function() {
        $("#contador-caracteres").text(campoDigitacao.val().length);

        $("#contador-palavras").text(campoDigitacao.val().split(/\S+/).length - 1);
    });
};

function inicializaCronometro() {
    var tempoRestante = $("#tempo-digitacao").text();
    campoDigitacao.one("focus", function() {
        var cronometroID = setInterval(function() {
            tempoRestante--;
            $("#tempo-digitacao").text(tempoRestante);
            if (tempoRestante < 1) {
                clearInterval(cronometroID);
                finalizaJogo();
            }
        }, 1000);
    });
};

function finalizaJogo() {
    campoDigitacao.toggleClass("campo-desativado");
    campoDigitacao.attr("disabled", true);
    $("#botao-reiniciar").attr("disabled", false);
    inserePlacar();
}

function reiniciaJogo() {
    campoDigitacao.attr("disabled", false);
    campoDigitacao.val("");
    $("#contador-caracteres").text("0");
    $("#contador-palavras").text("0");
    $("#tempo-digitacao").text(tempoInicial);
    inicializaCronometro();
    campoDigitacao.removeClass("campo-desativado");
    $("#botao-reiniciar").attr("disabled", true);
    campoDigitacao.removeClass("borda-verde");
    campoDigitacao.removeClass("borda-vermelha");
}
