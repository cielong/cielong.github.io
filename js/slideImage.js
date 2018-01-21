var slideIndex = 1;
slideDivs();

function slideDivs() {
  showDiv(slideIndex);
  slideIndex++;
  setTimeout(slideDivs, 10000);
}

function currentDiv(n) {
    showDivs(slideIndex=n);
}

function showDiv(n) {
    var i;
    var x = document.getElementsByClassName("cover-img");
    var dots = document.getElementsByClassName("badge");
    if (n > x.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = x.length;
    }

    for (i=0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    for (i=0; i<dots.length;i++) {
        dots[i].className = dots[i].className.replace(" badge-white", "");
    }

    x[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " badge-white";
}

