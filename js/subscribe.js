// Align Modal vertically center
$(document).ready(function(){
    function alignModal(){
        var modalDialog = $(this).find(".md1");
        
        // Applying the top margin on modal to align it vertically center
        modalDialog.css("margin-top", Math.max(10, ($(window).height() - modalDialog.height()) / 2));
    }
    // Align modal when it is displayed
    $(".modal").on("shown.bs.modal", alignModal);
    
    // Align modal when user resize the window
    $(window).on("resize", function(){
        $(".modal:visible").each(alignModal);
    });   
});


/** Subscribe Email Validation **/
$('.sub-btn').click(function() {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if($('#subscribe-email').val().length == '0') {
        $('.error-msg').hide();
        $('.no-email-msg').show();
    } else if (regex.test($('#subscribe-email').val())) {
        $('#subscribeModal').modal('show');
        $('.error-msg').hide();
        $('.no-email-msg').hide();
    } else {
        $('.no-email-msg').hide();
        $('.error-msg').show();
    }
});
