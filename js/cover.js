var count = 1;
var max = 6;

function changeBackground() {
    if (count < max) {
        count++;
    }
    else {
        count = 1;
    }
    $("#cover").attr("src", "ethanmarrs.github.io/capetopoint/images/cover/" + count + ".jpg");
}

setInterval(changeBackground, 4000);