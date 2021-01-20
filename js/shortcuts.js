var elements = [];
window.onload = function() {
    if (JSON.parse(localStorage.getItem("elements")) == null) {

        var title = "Facebook";
        var link = "https://facebook.com";
        var iconLink = "https://www.google.com/s2/favicons?domain_url=http://" +
            link;

        elements.push([title, link, iconLink]);
        elements = JSON.parse(localStorage.getItem("elements"));
        display();
    } else if (JSON.parse(localStorage.getItem("elements")) != null) {
        elements = JSON.parse(localStorage.getItem("elements"));
        display();
    }
    // else if (JSON.parse(localStorage.getItem("elements")) == null) {

    //     display();
    // }

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
        "<img width='20' height='20' src='" + elements[i][2] + "'>" +
        "</a>" +
        "<img hidden width='25' height='25' id='dustbin' class='dustbin' " +
        " src = 'https://icons.iconarchive.com/icons/papirus-team/papirus-status/512/user-trash-full-icon.png'" +
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