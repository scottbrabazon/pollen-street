$(document).ready(function(){

    //hide content
    $('#homepage-header, #hp-intro, #opener, #people, #governance, #investor-information, #contact-us, #footer').fadeOut(0);

    // check cookie
    var visited = Cookies.get("visited");
    //have we visited?
    console.log(visited);


    // load overlay if they haven't visited

    if (visited !== "yes") {
        $('#overlay-content').fadeIn(0);
    } else {
        $('#homepage-header, #hp-intro, #opener, #people, #governance, #investor-information, #contact-us, #footer').fadeIn(0);
    }


    $("#form").on("submit",function(e){

        var country = $("#country");

        if ( country.val() == 'true' ) {
            $('#homepage-header, #hp-intro, #opener, #people, #governance, #investor-information, #contact-us, #footer').fadeIn(0);
            $('#overlay-content').fadeOut(0);
            $(document).scrollTop( $("#homepage-header"));
            Cookies.set("visited","yes", "");
        } else {    
            //set message
            $(this).find(".error-message").show();
        }

        e.preventDefault();

    });

});
