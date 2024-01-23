$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
});

    $("#btn-cancelar").click(function() {
        $("form").slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
        const novoItem = $('<li style="display: none;"></li>');
        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem);
        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoDaNovaImagem}" title="ver imagem em tamanho real" target="_black">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        // Mostrando o item que acabou de ser adicionado
        $(novoItem).fadeIn(500)
        $('#endereco-imagem-nova').val('')
    })
})