var elements = [];
window.onload = function() {
    if (JSON.parse(localStorage.getItem("elements")) != null) {
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
    document.querySelector(".links-container").innerHTML = "";
    for (var i = 0; i < elements.length; i++)
        document.querySelector(".links-container").innerHTML +=
        "<div class='col-3 my-2 stored-links'>" +
        "<a class='tile' href='https://" + elements[i][1] + "'><div class='tile-icon'><img width='30' height='30' src='" +
        elements[i][2] + "'></div></a>" +
        "<img hidden width='25' height='25' id='dustbin' class='dustbin' " +
        " src = 'https://icons.iconarchive.com/icons/papirus-team/papirus-status/512/user-trash-full-icon.png'" +
        " onclick='del(" + i + ")'>" +
        "</div> </div>"

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