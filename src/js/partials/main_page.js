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
    clearTimeout(window.resizedFinished);
    window.resizedFinished = setTimeout(function(){
        SystemQuantity();
        MobileVideo();
        MobileMenu();
    }, 500); /* таймаут */
});

function InitHeadroom(){
    $("header").headroom();
}

function InsertReversedLink(){
    $(".reversedLink").each(function(){
        var email = $(this).data("main-post-part") + "@" + $(this).data("last-post-part");
        $(this).html(email);
        $(this).attr('href', 'mailto:' + email);
    });
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
    if (($( window ).width()) < (865 - 17)) {
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
    if (($( window ).width()) < (640 - 17)) {
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
    var visible = false;
    var visibleSubmenu = false;
    if (($( window ).width()) <= (1007 - 17)) {
        $("#menu-small").click(function(){
            if (visible){
                $(".dropdown.menu").removeClass("opened-menu");
                visible = false;
                $(".hamburger").toggleClass("is-active", visible);
                $("html").toggleClass("fixed", visible);
                $("body").toggleClass("fixed", visible);
            }
            else {
                $(".dropdown.menu").addClass("opened-menu");
                visible = true;
                $(".hamburger").toggleClass("is-active", visible);
                $("html").toggleClass("fixed", visible);
                $("body").toggleClass("fixed", visible);
            }
        });
        $(".is-dropdown-submenu").addClass("hidden");
        $(".is-dropdown-submenu-parent").click(function () {
            if (visibleSubmenu) {
                visibleSubmenu = false;
                $(".is-dropdown-submenu").addClass("hidden");
            }
            else {
                visibleSubmenu = true;
                $(".is-dropdown-submenu").removeClass("hidden");
            }
        });
    }
}