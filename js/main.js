$(document).ready(function(){

    // Burger Menu Activation

    $(".burger-menu__open-button, .burger-menu__close-button").click(function(){
        $("#burger-menu").toggleClass("closed");
    });

    // Burger Menu Close

    $("#burger-menu nav a").click(function(){
        $("#burger-menu").toggleClass("closed");
    });
    

    // Accordion

    $('.dropdown').click(function() {
        //Hide all other drop downs that are visible, and remove the class 'selected'
        $(this).toggleClass('selected').find("i").toggleClass("fa-plus-circle fa-minus-circle");
        $(this).siblings('.selected').removeClass('selected').find('ul:visible').slideUp('fast', function() {
                $(this).closest("div").find("i").toggleClass("fa-plus-circle fa-minus-circle");
        });

        //Show/Hide dropdowns
        $('ul:first', this).stop(true, true).slideToggle('fast');

    });

    $('ul.contents').click(function (e) {
        e.stopPropagation();
    });

    $('ul.contents li a').click(function() {
    	});


    //Smooth Scroll

    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
    // On-page links
        if (location.pathname.replace(/^\//, '') 
        == this.pathname.replace(/^\//, '') 
        && location.hostname == this.hostname) {
        // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
            // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 500);
            }
        }
    });

    // Click event for closing popups
    
    $(".pop-up-portfolio__close, .hp-people-profile__close").on("click", function(){
        $.featherlight.close();
    });


    // Insert year

    let year = new Date().getFullYear();
    document.getElementById("date").innerHTML = year;

});



  