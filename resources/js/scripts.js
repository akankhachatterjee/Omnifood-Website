$(document).ready(function(){

    $('.js--section').waypoint(function(direction){
        if(direction == "down")
        {
            $('.nav').addClass('sticky');
        }
        else
        {
            $('.nav').removeClass('sticky');
        }
    },
    {
        offset: '60px;'      /*This will do the effect 60px before we touch js--section*/       
    });

    $('.js-scroll-to-plan').click(function(){
        $('html , body').animate({ scrollTop: $('.js-script-plan').offset().top} , 1000);
    });

});

/*direction inside waypoint function checks if we are scrolling down or up*/
/*We can get the waypoint script from link "http://imakewebthings.com/waypoints/". Just download and extract the zip*/