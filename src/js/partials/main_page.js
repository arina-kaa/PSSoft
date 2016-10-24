$(document).ready(function(){
    $(document).foundation();
    InitHeadroom();
    InsertReversedLink();
});

function InitHeadroom(){
    $("header").headroom();
}

function InsertReversedLink(){
    var emailE = ('info' + '@' + 'institutps' + '.ru');
    var link = $('#reversedLink');

    link.html(emailE);
    link.attr('href', 'mailto:' + emailE);
}