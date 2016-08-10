var count = 0;
var max = 6;

function changeBackground() {
    if (count < max) {
        count++;
    }
    else {
        count = 0;
    }
    $("#cover").attr("src", "images/cover/" + count + ".jpg");
}

setInterval(changeBackground, 4000);