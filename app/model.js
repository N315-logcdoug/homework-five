export function changePage(pageID, callback) {
    navMenuChange("closed");
    if (pageID == '' || pageID == "home") {
        $.get(`pages/home.html`, function (data) {
            console.log('data ' + data);
            $('#app').html(data);
        });
        //example
    } else {
        $.get(`pages/${pageID}.html`, function (data) {
            //console.log('data ' + data);
            $('#app').html(data);
        });
    }
}

export function navMenuChange(value) {
    $(".expanded-nav").attr("id", value);
}