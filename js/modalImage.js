/* This function is copied from W3 school[https://www.w3schools.com/howto/howto_css_modal_images.asp] with little modification
*/
function showimage(imageId) {
    var img = document.getElementById(imageId);
    var modal = document.getElementById('modal-img');
    var modalImg = document.getElementById("img");
    var captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }
}
