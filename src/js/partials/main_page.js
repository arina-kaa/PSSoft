$(document).ready(function(){
    $(document).foundation();
    InitHeadroom();
    InsertReversedLink();
    OpenCompanies();
    MobileVideo();
    MobileMenu();
});

$(window).resize(function(){
    MobileVideo();
    MobileMenu();
});

function InitHeadroom(){
    $("header").headroom();
}

function InsertReversedLink(){
    var emailE = ('info' + '@' + 'institutps' + '.ru');
    var link = $("#reversedLink");

    link.html(emailE);
    link.attr('href', 'mailto:' + emailE);
}

function OpenCompanies(){
    var visible = false;
    $("#button-comp").click(function(){
        if (visible){
            $("#button-comp").text("Все IT-компании");
            //document.getElementsByClassName('column-bottom-comp').style.display = 'none';
            $(".column-bottom-comp").slideUp("slow");
            //$(".column-bottom-comp").css("display", "none");
            visible = false;
        }
        else {
            $("#button-comp").text("Скрыть IT-компании");
            //document.getElementsByClassName('column-bottom-comp').style.display = 'block';
            $(".column-bottom-comp").slideDown("slow");
            //$(".column-bottom-comp").css("display", "block");
            visible = true;
        }
    })
}

function MobileVideo(){
    var width = $( window ).width();
    if (width < 623) {
        $("#mobile-video-last").before($("#mobile-video-button-block"));
        $("#mobile-video-button-block").css("display", "block");
        $("#video-button").css("display", "none");
        var visible = false;
        $("#mobile-video-button").click(function(){
            if (visible){
                $("#mobile-video-button").text("Все новости");
                //document.getElementsByClassName('column-bottom-comp').style.display = 'none';
                $(".mobile-video-hidden").slideUp("slow");
                //$(".column-bottom-comp").css("display", "none");
                visible = false;
            }
            else {
                $("#mobile-video-button").text("Скрыть новости");
                //document.getElementsByClassName('column-bottom-comp').style.display = 'block';
                $(".mobile-video-hidden").slideDown("slow");
                //$(".column-bottom-comp").css("display", "block");
                visible = true;
            }
        })
    }
    else {
        $("#mobile-video-button-block").before($("#mobile-video-last"));
        $("#mobile-video-button-block").css("display", "none");
        $("#video-button").css("display", "block");
    }
}

function MobileMenu(){
    var width = $( window ).width();
    var visible = false;
    if (width <= 990) {
        $("#menu-small").click(function(){
            if (visible){
                $(".dropdown.menu").css("display", "none");
                $(".menu-item").css("display", "none");
                visible = false;
                $("html").toggleClass("fixed", visible);
            }
            else {
                $(".dropdown.menu").css("display", "block");
                $(".menu-item").css("display", "block");
                visible = true;
                $("html").toggleClass("fixed", visible);
            }
        })
    }
}