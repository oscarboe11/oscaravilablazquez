$(document).ready(function() {
    $(".accordions").on("click", function() {
        if ($(this).prop("checked")) {
            $(this).prop("checked") = false;
        }
    })
})