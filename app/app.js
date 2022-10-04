import * as MODEL from "./model.js";

function changeRoute() {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace('#', '');
    //   console.log(hashTag + ' ' + pageID);
    if (pageID == "" || pageID == "home") {
        MODEL.changePage(pageID);
    } else {
        MODEL.changePage(pageID);
    }

}

function initURLListener() {
    $(window).on('hashchange', changeRoute);
    changeRoute();
}

$(document).ready(function () {
    initURLListener();
});