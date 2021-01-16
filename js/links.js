const main = document.getElementsByTagName('shortcuts')[0];

var name = localStorage.getItem("siteNames");
var websites = [
    "Facebook",
    "Instagram",
    "Twitter",
    "LinkedIn",
    "Flipkart",
    "Pinterest",
    "Amazon"
];
var webUrl = [
    "http://m.facebook.com",
    "http://www.instagram.com",
    "http://mobile.twitter.com",
    "http://in.LinkedIn.com",
    "http://www.flipkart.com",
    "http://www.pinterest.com",
    "http://www.amazon.in"

];
var webFavicon = [
    "http://m.facebook.com/favicon.ico",
    "http://www.instagram.com/favicon.ico",
    "http://mobile.twitter.com/favicon.ico",
    "http://in.LinkedIn.com/favicon.ico",
    "http://www.flipkart.com/favicon.ico", //missing
    "http://www.pinterest.com/favicon.ico",
    "http://www.amazon.in/favicon.ico"
]

if (typeof(Storage) !== "undefined") {
    // Store

    localStorage.setItem("siteNames", websites);
    localStorage.setItem("siteUrl", webUrl);
    // localStorage.setItem("siteFavicon", webFavicon);


    // Retrieve

    for (i = 0; i < webFavicon.length; i++) {
        // var webLinks = webFavicon.split["/"];
        let articleRow = '<a href="' + webFavicon[i] + '"> <img src="' + webFavicon[i] + '" + "alt="" width="30""> </a>';
        document.getElementById("shortcuts").innerHTML = articleRow;

    }
    // document.getElementById("shortcuts").innerHTML = localStorage.getItem("siteFavicon");
    // document.getElementById("shortcuts").innerHTML = cars[2];
} else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
}


for (var i = 0; i < cars.length; i++) {
    // create a new row
    var newRow = table_sl.insert(table_sl.length);
    for (var j = 0; j < 1; j++) {
        // create a new cell
        var cell = newRow.insertCell(j);

        // add value to the cell
        cell.innerHTML = serial[i];

    }
}