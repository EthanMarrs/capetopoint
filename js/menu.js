/**
 * Created by ethan on 2016/03/30.
 */

$("#hamburger").on("click", function() {
    var menu = $("#mobile-menu");

    if (menu.hasClass("hidden")) {
        menu.removeClass("hidden");
    }
    else {
        menu.addClass("hidden");
    }
});


