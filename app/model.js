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
            $.each(cart, function (idx, cartItem) {
                let book = books[cartItem];
                $(".cart").append(`<div class="cart-item">
                <img src="${book.image}" alt="" class="cart-item-img" />
                <div class="cart-item-info">
                  <p class="cart-item-title">${book.title}</p>
                  <p class="cart-item-cost">$${book.price}</p>
                  <p class="cart-item-stock">In Stock</p>
                  <div class="cart-item-options">
                    <p class="cart-item-qty">Qty:</p>
                    <a href="#books" class="cart-item-change">change</a>
                    <p>|</p>
                    <a href="" class="cart-item-delete">delete</a>
                  </div>
                </div>
              </div>`)
            })
        });

    } else {
        $.get(`pages/${pageID}.html`, function (data) {
            $('#app').html(data);
        });
    }
}

export function navMenuChange(value) {
    $(".expanded-nav").attr("id", value);
}

export function addToCart(itemID) {
    cart.push(itemID);
    console.log(cart);
    $("#cartCount").html(cart.length.toString())
}