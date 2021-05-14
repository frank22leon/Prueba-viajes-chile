$(document).ready(function () {

   
        var altura = $('.menu').offset().top;
        
        $(window).on('scroll', function(){
            if ( $(window).scrollTop()  > 40){
                $('.menu').addClass('bg-info').removeClass('bg-transparent');
            } else {
                $('.menu').addClass('bg-transparent').removeClass('bg-info');
            }
        });
    
  
    
    $('[data-toggle="popover"]').popover()

    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
});


