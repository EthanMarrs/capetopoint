var count = 1;
var max = 4;

function changeBackground() {
    if (count < max) {
        count++;
    }
    else {
        count = 1;
    }
    $("#cover").attr("src", "/images/cover/" + count + ".jpg");
}

setInterval(changeBackground, 4000);