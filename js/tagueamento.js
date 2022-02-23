// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

//Google Analytics

(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date(); a = s.createElement(o),
        m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-12345-6', 'auto');
ga('send', 'pageview');

$('.menu-lista-contato').on('click', function(){
    ga('send', {
        hitType: 'event',
        eventCategory: 'menu',
        eventAction: 'entre_em_contato',
        eventLabel: 'link_externo'
    });
});

$('.menu-lista-download').on('click', function(){
    ga('send', {
        hitType: 'event',
        eventCategory: 'menu',
        eventAction: 'download_pdf',
        eventLabel: 'download_pdf'
    });
});

$('.card').on('click', function() {
    var labelName = $(this).attr('data-name');
    ga('send', {
        hitType: 'event',
        eventCategory: 'analise',
        eventAction: 'ver_mais',
        eventLabel: labelName
    });
});

$('.contato li').on('click', function() {
    var action = $(this).children('input').attr('id');
    if ($(this).children('input').val() != "" ) {
        ga('send', {
            hitType: 'event',
            eventCategory: 'contato',
            eventAction: action,
            eventLabel: 'clicou'
        });
    }
});

$('.contato li').on('focusout', function() {
    const valuesList = ["Nome Teste", "email@dominio.com", "(11) 4455-4455"];
    var action = $(this).children('input').attr('id');
    if ($(this).children('input').val() != "" && valuesList.includes($(this).children('input').val()) == false) {
        ga('send', {
            hitType: 'event',
            eventCategory: 'contato',
            eventAction: action,
            eventLabel: 'preencheu'
        });
    }
});

$('.contato').on('submit', function() {
    ga('send', {
        hitType: 'event',
        eventCategory: 'contato',
        eventAction: 'enviado',
        eventLabel: 'enviado'
    });
});

// End Google Analytics