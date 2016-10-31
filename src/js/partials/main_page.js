$(document).ready(function(){
    $(document).foundation();
    InitHeadroom();
    InsertReversedLink();
    OpenCompanies();
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
            //$(".column-bottom-comp").css("display", "block");
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
    if (width < 640) {

    }
}