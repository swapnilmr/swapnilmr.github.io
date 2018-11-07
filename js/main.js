$(function () {
    $(document).scroll(function () {
        var $nav = $("#mainNav");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });

    $("a.nav-link").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });

    $('[data-toggle="tooltip"]').tooltip();

    var graphicAnime = anime({
        targets: '#graphic path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInCubic',
        duration: 3000,
        autoplay: false
    });

    var uiAnime = anime({
        targets: '#UI path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInCubic',
        duration: 3000,
        autoplay: false
    });

    var developAnime = anime({
        targets: '#development path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInCubic',
        duration: 3000,
        autoplay: false
    });

    var waypoint1 = $('#graphic').waypoint(function () {
        graphicAnime.play();
    }, {
        offset: '50%'
    });

    var waypoint2 = $('#UI').waypoint(function () {
        uiAnime.play();
    }, {
        offset: '50%'
    });

    var waypoint3 = $('#development').waypoint(function () {
        developAnime.play();
    }, {
        offset: '50%'
    });


});