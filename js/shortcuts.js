var elements = [];
window.onload = function() {
    // if (JSON.parse(localStorage.getItem("elements")) == null) {

    if (JSON.parse(localStorage.getItem("elements")) != null) {
        elements = JSON.parse(localStorage.getItem("elements"));
        display();
    } else {
        // var title = "Instagram";
        // var link = "http://instagram.com";
        // var iconLink = "https://www.google.com/s2/favicons?domain_url=http://instagram.com";
        // /*Name,Link,IconLink */
        // elements.push([title, link, iconLink]);

        // localStorage.setItem("elements", JSON.stringify(elements));
        // display();
    }

};

function addElement() {
    if (document.querySelector(".searchTerm").value.trim() != "") {
        var title = document.querySelector(".searchTerm").value.trim();
        var link = document.querySelector(".searchTerm").value.trim();
        var iconLink = "https://www.google.com/s2/favicons?domain_url=http://" +
            document.querySelector(".searchTerm").value.trim();
        /*Name,Link,IconLink */
        elements.push([title, link, iconLink]);
        if (localStorage.getItem("elements") == null) {
            localStorage.setItem("elements", JSON.stringify(elements));
        } else {
            localStorage.setItem("elements", JSON.stringify(elements));
        }
        display();
        // window.location = "https://" + document.querySelector(".searchTerm").value.trim();
        document.querySelector(".searchTerm").value = "";
    }
}

function display() {
    document.querySelector(".links-container").innerHTML = '<div class="col-2 my-2 order-2 addBtn"><a href="#Add_short" data-toggle="modal" class="btn"><img src="icons/plus.svg" alt="" width="20"></a><!-- <input type="button" class="searchButton btn btn-primary float-right" onclick="addElement()" value="Add"> --></div>';
    for (var i = 0; i < elements.length; i++)
        document.querySelector(".links-container").innerHTML +=
        "<div class='col-2 my-2 mr-3 stored-links'>" +
        "<a class='tile' href='https://" + elements[i][1] + "'>" +
        "<img width='30' height='30' src='" + elements[i][2] + "'>" +
        "</a>" +
        "<img hidden width='25' height='25' id='dustbin' class='dustbin' src = 'https://icons.iconarchive.com/icons/papirus-team/papirus-status/512/user-trash-full-icon.png'" +
        " onclick='del(" + i + ")'>" +
        "</div>"

}


function del(index) {
    elements.splice(index, 1);
    if (localStorage.getItem("elements") == null) {
        localStorage.setItem("elements", JSON.stringify(elements));
    } else {
        localStorage.setItem("elements", JSON.stringify(elements));
    }
    display();
}