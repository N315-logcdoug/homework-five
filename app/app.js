import * as MODEL from "./model.js";

function changeRoute() {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace('#', '');
    if (pageID == "" || pageID == "home") {
        MODEL.changePage(pageID);
    } else if (pageID == "books") {
        MODEL.changePage(pageID, addToCartListener);
    } else if (pageID == "account") {
        MODEL.changePage(pageID, loginListener);
    } else if (pageID == "cart") {
        // if (MODEL.getLoginStatus() == true) {
        //     MODEL.changePage("cart");
        // } else {
        //     MODEL.changePage("account", loginListener);
        // }
        MODEL.changePage("cart", cartDeleteListener);
    } else {
        MODEL.changePage(pageID);
    }

}

function addToCartListener() {
    $(".books-item-details button").on("click", function (e) {
        let bookID = e.currentTarget.id;
        MODEL.addToCart(bookID);
    })
}

function cartDeleteListener() {
    $(".cart-item-delete").on("click", function (e) {
        let cartItemID = e.currentTarget.id;
        MODEL.cartDelete(cartItemID);
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

function loginListener() {
    $("#login-submit").on("click", function (e) {
        let email = $("#login-email").val();
        let pw = $("#login-pw").val();

        if (email == "") {
            alert('Please enter your Email')
        } else if (pw == "") {
            alert('Please enter your password')
        } else {
            MODEL.login();
        }
    });

    $("#signup-submit").on("click", function (e) {
        let firstName = $("#f-name").val();
        let lastName = $("#l-name").val();
        let email = $("#signup-email").val();
        let pw = $("#signup-pw").val();

        if (firstName == "") {
            alert('Please enter your First Name')
        } else if (lastName == "") {
            alert('Please enter your Last Name')
        } else if (email == "") {
            alert('Please enter your Email')
        } else if (pw == "") {
            alert('Please enter your password')
        } else {
            alert('Account registered')
        }
    });
}

$(document).ready(function () {
    initURLListener();
    navbarExpandListener();
});