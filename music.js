$(document).ready(function() {
    $("input").on("click", function() {
        if ($(this).prop("checked")) {
            alert($this)
            $(this).prop("checked") = false;
        }
    })
})