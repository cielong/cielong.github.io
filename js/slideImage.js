var slideIndex = 1;
slideDivs();

function slideDivs() {
  showDiv(slideIndex);
  slideIndex++;
  setTimeout(slideDivs, 10000);
}

function showDiv(n) {
    var i;
    var x = document.getElementsByClassName("cover-image");
    if (n > x.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = x.length;
    }
    for (i=0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}
