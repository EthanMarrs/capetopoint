var count = 1;
var max = 4;

function changeBackground() {
    if (count < max) {
        count++;
    }
    else {
        count = 1;
    }
    $("#cover").css("background-image", "url(../images/cover/" + count + ".jpg)");
}

setInterval(changeBackground, 4000);