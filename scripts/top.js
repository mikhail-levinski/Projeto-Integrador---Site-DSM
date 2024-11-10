$(document).ready(function () {
    // Inicialmente, o botão está oculto
    $(".back-to-top").css("display", "none");

    // Mostrar ou ocultar o botão dependendo da rolagem
    $(window).scroll(function() {
        if ($(this).scrollTop() == 0) {
            $(".back-to-top").css("display", "none");
        } else {
            $(".back-to-top").css("display", "block");
        }
    });

    // Rolar suavemente para o topo quando o botão for clicado
    $(".back-to-top").click(function(event) {
        event.preventDefault(); // Impede o comportamento padrão do link
        $("html, body").animate({scrollTop: 0}, 800);
    });
});
