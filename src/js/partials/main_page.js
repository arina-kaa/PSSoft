$(document).ready(function(){
    $(document).foundation();
    InitHeadroom();
    InsertReversedLink();
    SystemQuantity();
    ShowMore();
    MobileVideo();
    MobileMenu();
});

$(window).resize(function(){
    SystemQuantity();
    ShowMore();
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

function ShowMore(){
    var width = $( window ).width();
    if (width <= 1006) {
        $(".third-comp").css("display", "none");
    }
    else {
        $(".third-comp").css("display", "block");
    }
    $(".js-showmore").each(function(){
        var visible = false;
        var origText = $(this).data("original-text");
        var activeText = $(this).data("active-text");
        var hiddenBlock = "." + $(this).data("hidden-block");
        var thirdBlock = hiddenBlock + ":not(.third-comp)";
        $(this).text(origText);
        $(this).click(function(){
            if (visible) {
                $(this).text(origText);
                width = $( window ).width();
                if (width > 1006) {
                    $(thirdBlock).slideUp("slow");
                    $(".third-comp").css("display", "block");
                }
                else {
                    $(hiddenBlock).slideUp("slow");
                }
                visible = false;
            }
            else {
                $(this).text(activeText);
                $(hiddenBlock).slideDown("slow");
                visible = true;
            }
        });
    });
}

/* function OpenCompanies(){
    var visible = false;
    var width = $( window ).width();
    $("#button-comp").click(function(){
        if (visible){
            //document.getElementsByClassName('column-bottom-comp').style.display = 'none';
            $(".column-bottom-comp").slideUp("slow");
            //$(".column-bottom-comp").css("display", "none");
            if (width < 1008) {
                $(".third-comp").slideUp("slow");
            }
            visible = false;
        }
        else {
            //document.getElementsByClassName('column-bottom-comp').style.display = 'block';
            $(".column-bottom-comp").slideDown("slow");
            //$(".column-bottom-comp").css("display", "block");
            if (width < 1008) {
                $(".third-comp").slideDown("slow");
            }
            visible = true;
        }
    })
}*/

function SystemQuantity(){
    var width = $( window ).width();
    if (width < 848) {
        $("#system-quantity").removeClass("medium-up-3");
        $("#system-quantity").addClass("medium-up-1");
    }
    else {
        $("#system-quantity").removeClass("medium-up-1");
        $("#system-quantity").addClass("medium-up-3");
    }
}

function MobileVideo(){
    var width = $( window ).width();
    if (width < 623) {
        $(".smi").removeClass("medium-up-2");
        $(".smi").addClass("medium-up-1");
        $(".mobile-video-hidden").css("display", "none");
        $("#mobile-video-last").before($("#mobile-video-button-block"));
        $("#mobile-video-button-block").css("display", "block");
        /* var visible = false;
        $("#mobile-video-button").click(function(){
            if (visible){
                //document.getElementsByClassName('column-bottom-comp').style.display = 'none';
                $(".mobile-video-hidden").slideUp("slow");
                //$(".column-bottom-comp").css("display", "none");
                visible = false;
            }
            else {
                //document.getElementsByClassName('column-bottom-comp').style.display = 'block';
                $(".mobile-video-hidden").slideDown("slow");
                //$(".column-bottom-comp").css("display", "block");
                visible = true;
            }
        })*/
    }
    else {
        $(".smi").removeClass("medium-up-1");
        $(".smi").addClass("medium-up-2");
        $("#mobile-video-button-block").before($("#mobile-video-last"));
        $("#mobile-video-button-block").css("display", "none");
        $(".mobile-video-hidden").css("display", "block");

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