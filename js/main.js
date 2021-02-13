function consultaCEP() {
    $(".bar-progress").show();
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/";
    $.ajax({
        url: url,
        type: "GET",
        success: function (response) {
            console.log(response);
            $("#titulo").html("CEP: " + response.cep);
            $("#logradouro").html(response.logradouro);
            $("#complemento").html(response.complemento);
            $("#bairro").html(response.bairro);
            $("#localidade").html(response.localidade);
            $("#uf").html(response.uf);
            $("#ibge").html(response.ibge);
            $("#gia").html(response.gia);
            $("#ddd").html(response.ddd);
            $("#siafi").html(response.siafi);
            $(".cep").show();
            $(".bar-progress").hide();
        }
    });
}


$(function () {
    $(".cep").hide();
    $(".bar-progress").hide();
});
