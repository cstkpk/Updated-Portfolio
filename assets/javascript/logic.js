$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.parallax').parallax();
    // Materialize js to magnify a photo on click
    $('.materialboxed').materialbox();
    // Materialize js to automatically resize the textarea in the contact form
    $('#textarea1').val();
    M.textareaAutoResize($('#textarea1'));

    // When the submit button is clicked, the modal opens up letting the user know that the contact form isn't yet functional
    $("#submit-btn").on("click", function() {
        $(".modal").modal();
        $(".modal").modal("open");
        // Set modal's dismissible option to false
        return false;
    })


});