console.log("Olá, mundo!"); 

$("#btn-novatarefa").click(function (e) {
    e.preventDefault();

    $('.inputbox').slideDown({
        start: function () {
            $(this).css({ display: "flex" });
        }
})
});


$('#btn-adc').on('click', function (e) {
    e.preventDefault();
    console.log('oi')

    const inputnometarefa = $('#nome-tarefa').val();
    const novatarefa = $('ul');

    $(`<li class="nomelista">${inputnometarefa}</li>`).appendTo(novatarefa);
    $('#nome-tarefa').val('');

});

$(".formtarefa").on('reset', function (e) {
    e.preventDefault();
    $('.inputbox').slideUp();
    $('#nome-tarefa').val('');

});

$('ul').on('click', '.nomelista', function () { 
    var listasel = $(this);
    $(listasel).toggleClass('riscado');

});

