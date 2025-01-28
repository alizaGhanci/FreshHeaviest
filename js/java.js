
$(document).ready(function() {
    let menu = $('header .nav1 .menu');
    let cross = $('header .nav1 .cross');
    let Sidenav = $('header .nav2 .section');

    menu.on('click', function() {
        Sidenav.addClass('Showsidenav').removeClass('Hidesidenav');
        menu.css("display", "none");  // Correctly use jQuery .css() method
        cross.css("display", "flex");  // Correctly use jQuery .css() method
    });

    cross.on('click', function() {
        Sidenav.addClass('Hidesidenav').removeClass('Showsidenav');
        menu.css("display", "flex");  // Correctly use jQuery .css() method
        cross.css("display", "none");  // Correctly use jQuery .css() method
    });
});

  

   
