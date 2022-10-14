var books = [
    {
        id: 0,
        title: "Twilight Box Set",
        image: "images/twilight-box-set.jpg",
        price: 99.99,
    },
    {
        id: 1,
        title: "Harry Potter Box Set",
        image: "images/hp-box-set.jpg",
        price: 100,
    },
    {
        id: 2,
        title: "Game of Thrones Box Set",
        image: "images/got-box-set.jpg",
        price: 100,
    },
    {
        id: 3,
        title: "Finding Me",
        image: "images/finding-me.jpg",
        price: 27.99,
    },
    {
        id: 4,
        title: "The Autobiography of Martin Luther King Jr.",
        image: "images/mlk-biography.jpg",
        price: 19.99,
    },
    {
        id: 5,
        title: "The Autobiography of Martin Eleanor Roosevelt",
        image: "images/elenor-roosevelt-biography.jpg",
        price: 17.99,
    },
    {
        id: 6,
        title: "Misery",
        image: "images/misery.jpg",
        price: 19.99,
    },
    {
        id: 7,
        title: "Frankenstein",
        image: "images/frankenstein.jpg",
        price: 15.99,
    },
    {
        id: 8,
        title: "Phantoms",
        image: "images/phantoms.jpg",
        price: 19.99,
    },
    {
        id: 9,
        title: "Winnie the Pooh",
        image: "images/winnie-the-pooh.jpg",
        price: 19.99,
    },
    {
        id: 10,
        title: "The Cat and the Hat",
        image: "images/cat-and-the-hat.jpg",
        price: 15.99,
    },
    {
        id: 11,
        title: "Fun Facts About Space",
        image: "images/fun-facts-about-space.jpg",
        price: 7.99,
    }
];

var cart = [];

var loggedIn = false;

export function changePage(pageID, callback) {
    navMenuChange("closed");
    if (pageID == '' || pageID == "home") {
        $.get(`pages/home.html`, function (data) {
            $('#app').html(data);
        });
    } else if (pageID == "books") {
        $.get(`pages/${pageID}.html`, function (data) {
            $('#app').html(data);
            callback();
        });
    } else if (pageID == "cart") {
        $.get(`pages/${pageID}.html`, function (data) {
            $('#app').html(data);
            cartRefresh();
            callback();
        });
    }
    else if (pageID == "account") {
        $.get(`pages/${pageID}.html`, function (data) {
            $('#app').html(data);
            callback();
        });
    } else {
        $.get(`pages/${pageID}.html`, function (data) {
            $('#app').html(data);
        });
    }
}

function cartRefresh() {
    $.each(cart, function (idx, cartItem) {
        let book = books[cartItem.id];
        $(".cart").append(`<div class="cart-item">
            <img src="${book.image}" alt="" class="cart-item-img" />
            <div class="cart-item-info">
              <p class="cart-item-title">${book.title}</p>
              <p class="cart-item-cost">$${book.price}</p>
              <p class="cart-item-stock">In Stock</p>
              <div class="cart-item-options">
                <p class="cart-item-qty">Qty: ${cartItem.qty}</p>
                <a href="#books" class="cart-item-change">change</a>
                <p>|</p>
                <p id="${cartItem.id}" class="cart-item-delete">delete</p>
              </div>
            </div>
          </div>`)
    })
}

export function navMenuChange(value) {
    $(".expanded-nav").attr("id", value);
}

export function getCartCount() {
    let cartQty = 0;
    cart.forEach(cartItem => {
        cartQty += cartItem.qty;
    })
    return cartQty;
}

export function cartDelete(id) {
    cart.forEach(function callback(cartItem, cartIdx) {
        if (id == cartItem.id) {
            cart.splice(cartIdx, 1)
        }
    })
    $("#cartCount").html(getCartCount().toString())

    //Very dumb code to refresh the html content without refreshing the page
    window.location.hash = "home";
    window.location.hash = "cart";
}

export function addToCart(itemID) {
    let isDuplicate = false;
    cart.forEach(cartItem => {
        if (cartItem.id == itemID) {
            cartItem.qty++;
            isDuplicate = true;
        }
    })
    if (isDuplicate == false) {
        cart.push({ id: itemID, qty: 1 });
    }
    $("#cartCount").html(getCartCount().toString())
}

export function login() {
    loggedIn = true;
    console.log(loggedIn);
    window.location.hash = "home";
    //changePage("home");
};

export function getLoginStatus() {
    return loggedIn;
}