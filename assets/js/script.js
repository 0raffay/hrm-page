$(document).ready(function () {
    header()
});

function header() {
    const toggle = $("#menu-toggle");
    const cross = $("#crossNav");
    const navbar = $(".mobile-nav");
    var nav = false;

    cross.click(function () {
        navbar.fadeOut("fast");
        nav = false;
    });

    toggle.click(function () {
        if (nav == false) {
            $(".mobile-nav").fadeIn("fast");
            nav = true;
        } else {
            $(".mobile-nav").fadeOut("fast");
            nav = false;
        }
    });

    // $('header li a').click(function () {
    //     $('header li a').removeClass('active')
    //     $(this).addClass('active')
    // })

    $(".slideDown").find(".phoneSubMenu").slideUp();
    $(".slideDown").click(function () {
        $(".slideDown").find(".phoneSubMenu").slideUp();
        $(this).find(".phoneSubMenu").slideDown();
    });

    let pPopUp = false;
    $(".partner__btn").click(function () {
        if (!pPopUp) {
            $(".partnerPopUp").slideDown();
            pPopUp = true;
        } else {
            $(".partnerPopUp").slideUp();
            pPopUp = false;
        }
    });
}
