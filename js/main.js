$(document).ready(function(){

    // Hover on Navigation Bar

    $(".navbar-brand").mouseenter(function() {
        $(this).css("color", "rgb(242, 87, 84)");
    });
    $(".navbar-brand").mouseleave(function() {
        $(this).css("color", "white");
    });


    $(".nav-link").mouseenter(function() {
        $(this).css("margin-left", ".5rem").css("color", "rgb(242, 87, 84)").css("font-weight", "700");
    });
    $(".nav-link").mouseleave(function() {
        $(this).css("margin-left", "0").css("color", "white").css("font-weight", "400");
    });


    // Tooltip    
    $('.tool-download-link').tooltip('toggle');


    // Card flip
    $('.back').hide();

    $('.flip-card').click(function() {
        $(this).toggleClass('flip-card').toggleClass('flip-card-reverse');
        $(this).children().toggle();
    });

    //FAQ
    $('.faq-question-toggle-minus').hide();
    $('.faq-answer-block').hide();

    $('.faq-question-toggle-plus').click(function() {
        $(this).parent().next().toggle();
        $(this).toggle();
        $(this).next().toggle();
    });

    $('.faq-question-toggle-minus').click(function() {
        $(this).parent().next().toggle();
        $(this).toggle();
        $(this).prev().toggle();
    });

});