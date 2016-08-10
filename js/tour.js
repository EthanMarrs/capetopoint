/**
 * Created by ethan on 2016/03/25.
 */

$(".tab-choice").on("click", function() {
    $(".tab").addClass("hidden");
    $(".nav-tabs > li").removeClass("active");
    $(this).addClass("active");
    $("#" + $(this).children(":first").text().toLowerCase()).removeClass("hidden");
    google.maps.event.trigger(map, 'resize');
    map.setCenter(new google.maps.LatLng(latLng[0], latLng[1]));
});