var count = 1;
var max = 5;

while(true) {

  setTimeout(changeImage, 2000);
  changeImage(count);

  if(count > max) {
    //count = 0;
    break;
  }
  else {
    count++;
  }
}

function changeImage(num) {
  $(".cover").css("background-image", "url(../images/cover/"+ num +".jpg)")
}
