$(document).ready(function(){
    $(document).foundation();
    InitHeadroom();
    ShowMore();
    SystemQuantity();
    MobileVideo();
    MobileMenu();
    InsertReversedLink();
});

$(window).resize(function(){
    SystemQuantity();
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
    $(".js-showmore").each(function(){
        var visible = false;
        var origText = $(this).data("original-text");
        var activeText = $(this).data("active-text");
        var hiddenBlock = "." + $(this).data("hidden-block");
        $(this).text(origText);
        $(this).click(function(){
            if (visible) {
                $(this).text(origText);
                $(hiddenBlock).each(function(){
                    $(this).addClass("hidden");
                });
                visible = false;
            }
            else {
                $(this).text(activeText);
                $(hiddenBlock).each(function(){
                    $(this).removeClass("hidden");
                });
                visible = true;
            }
        });
    });
}

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
        $(".js-hidden-video").addClass("hidden");
        $("#mobile-video-last").before($("#mobile-video-button-block"));
        $("#mobile-video-button-block").removeClass("hidden");
    }
    else {
        $(".smi").removeClass("medium-up-1");
        $(".smi").addClass("medium-up-2");
        $("#mobile-video-button-block").before($("#mobile-video-last"));
        $("#mobile-video-button-block").addClass("hidden");
        $(".js-hidden-video").removeClass("hidden");
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
        });
    }
}