import * as MODEL from "./model.js";

function changeRoute() {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace('#', '');
    //   console.log(hashTag + ' ' + pageID);
    if (pageID == "" || pageID == "home") {
        MODEL.changePage(pageID);
    } else if (pageID == "books") {
        MODEL.changePage(pageID, addToCartListener);
    } else {
        MODEL.changePage(pageID);
    }

}

function addToCartListener() {
    $(".books-item-details button").on("click", function (e) {
        let bookID = e.currentTarget.id;
        MODEL.addToCart(bookID);
        console.log(bookID);
    })
}

function initURLListener() {
    $(window).on('hashchange', changeRoute);
    changeRoute();
}

function navbarExpandListener() {
    MODEL.navMenuChange("closed");
    $(".nav-menu").click(function () {
        var elmVal = $(".expanded-nav").attr("id");
        if (elmVal == "closed") {
            elmVal = "open";
        } else {
            elmVal = "closed";
        }
        MODEL.navMenuChange(elmVal);
    });
}

$(document).ready(function () {
    initURLListener();
    navbarExpandListener();
});