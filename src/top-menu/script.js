$(document).ready(function () {
    $("#myLinks").on("click", "a", function (event) {
        event.preventDefault();
        // var id = $(this).attr('href'),
        //     top = $(id).offset().top;
        // $('body,html').animate({scrollTop: top}, 5000);

    });
});
// hamburger menu
function myFunction() {
    let x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
$(document).ready(function () {

    $('.first-button').on('click', function () {

        $('.animated-icon1').toggleClass('open');
        // $('.animated-icon1').toggleClass('btnColorDark');
    });
});
