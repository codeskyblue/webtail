/*
 * common.js
 * Copyright (C) 2015 hzsunshx <hzsunshx@onlinegame-14-51>
 *
 * Distributed under terms of the MIT license.
 */

/* javascript common use */

$(function(){
    $(document).on("click", "input.click-select", function(e) {
        $(e.target).select();
    });

    $("ul.nav>li>a").each(function(){
        var href = $(this).attr("href");
        if (location.pathname == href){
            $(this).parent("li").addClass("active");
        }
    })

    $("i.fa").tooltip();
})

function setCookie(c_name, value, exdays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
    document.cookie = c_name + "=" + c_value;
}

function getCookie(c_name) {
    var i, x, y, ARRcookies = document.cookie.split(";");
    for (i = 0; i < ARRcookies.length; i++) {
        x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
        y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
        x = x.replace(/^\s+|\s+$/g, "");
        if (x == c_name) {
            return unescape(y);
        }
    }
}

//var tailApp = angular.module('app');

//navApp.run(function ($rootScope, gettextCatalog) {
//});
