// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyAYABhDynyFu_vDOVN2kF8dLTYYyArfw3Y",
//     authDomain: "my-portfolio-7de9f.firebaseapp.com",
//     projectId: "my-portfolio-7de9f",
//     storageBucket: "my-portfolio-7de9f.appspot.com",
//     messagingSenderId: "476583123335",
//     appId: "1:476583123335:web:919309f8ebb207a262db22",
//     measurementId: "G-2E0XSZW3SM"
// };
// // Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore(app);

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


});





