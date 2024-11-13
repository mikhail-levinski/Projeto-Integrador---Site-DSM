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

    // Rolar suavemente para seções específicas quando os links de navegação são clicados
    $(document).ready(function() {
        var navbarHeight = $('.navbar').outerHeight(); // Obtém a altura da navbar
    
        $('a.nav-link').click(function(event) {
            event.preventDefault(); // Impede o comportamento padrão do link
            var target = $($.attr(this, 'href'));
    
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - navbarHeight // Ajusta a rolagem considerando a altura da navbar
                }, 800); // Define a duração da animação
            }
        });
    });
    
});
