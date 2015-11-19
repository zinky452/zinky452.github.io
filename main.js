$(function () {

    var homeButton = document.getElementById("homeButton")
    var aboutButton = document.getElementById("aboutButton")
    var filmsButton = document.getElementById("filmsButton")
    var newsButton = document.getElementById("newsButton")
    var cvButton = document.getElementById("cvButton")

    var home = document.getElementById("home")
    var about = document.getElementById("about")
    var films = document.getElementById("films")
    var news = document.getElementById("news")
    var cv = document.getElementById("cv")

    var pages = [home, about, films, news, cv]
    //HOME
    $(homeButton).on('click', function () {
        for(i in pages){
            $(pages[i]).addClass("kill");}
        $(home).removeClass("kill");
    });

    //function changePage(page) {
    //    for (i in pages) {
    //        $(pages[i]).addClass("kill");
    //    }
    //    $(page).removeClass("kill");
    //};

    //$(aboutButton).on('click', function changePage(about));
    //    $(filmsButton).on('click', function changePage(films));
    //        $(newsButton).on('click', function changePage(news));
    //            $(cvButton).on('click', function changePage(cv));
    ////ABOUT
    $(aboutButton).on('click', function () {
        for (i in pages) {
            $(pages[i]).addClass("kill");
        }
        $(about).removeClass("kill");
    });
    ////FILMS
    $(filmsButton).on('click', function () {
        for (i in pages) {
            $(pages[i]).addClass("kill");
        }
        $(films).removeClass("kill");
    });
    ////NEWS
    $(newsButton).on('click', function () {
        for (i in pages) {
            $(pages[i]).addClass("kill");
        }
        $(news).removeClass("kill");
    });
    //CV
    $(cvButton).on('click', function () {
        for (i in pages) {
            $(pages[i]).addClass("kill");
        }
        $(cv).removeClass("kill");
    });




    //IMAGE VIEWER

   // var image = document.getElementsByClassName("img");
    
    $(".img").on('click', function () {
        var imgsrc = $(this).children('img').attr("src");

        if ($('#lightbox').length > 0) { // #lightbox exists

            //insert img tag with clicked link's href as src value
            $('#content').html('<img src="' + imgsrc + '" />');

            //show lightbox window - you can use a transition here if you want, i.e. .show('fast')
            $('#lightbox').show();
        }
        else { //#lightbox does not exist 

            //create HTML markup for lightbox window
            var lightbox =
            '<div id="lightbox">' +
                '<p>Click to close</p>' +
                '<div id="content">' + //insert clicked link's href into img src
                    '<img src="' + imgsrc + '" />' +
                '</div>' +
            '</div>';

            //insert lightbox HTML into page
            $('body').append(lightbox);
        }

    $('#lightbox').on('click', function () {
        
            $('#lightbox').remove();

    });
    })

        $("img.lazy").lazyload({
            effect: "fadeIn"
        });
});