var siteUrl = document.getElementById("siteUrl");
var siteName = document.getElementById("siteName");
var subBtn = document.getElementById("sub-Btn");
var clr = document.getElementsByClassName("form-control");
var sites;
if (localStorage.getItem("sitesList") == null) {
    sites = [];
}
else {
    sites = JSON.parse(localStorage.getItem("sitesList"));
    display();
}

subBtn.onclick = function () {
   
        add();
   
    clear();
    display();
    subBtn.innerHTML = "Submit";//to back again to orginal name after update
}
deletebtn = function (index) {
    sites.splice(index, 1);
    localStorage.setItem("sitesList", JSON.stringify(sites))
    display()
}
function add() {
    if (siteName.value.length != 0) {

        document.getElementById("nameReq").innerHTML = "";
    }
    else {
        document.getElementById("nameReq").innerHTML = "Name is required";

    }
    if (siteUrl.value.length != 0) {
        document.getElementById("urlReq").innerHTML = "";
        var site = {
            name: siteName.value,
            url: siteUrl.value,
        }
        sites.push(site);
        localStorage.setItem("sitesList", JSON.stringify(sites))
    }
    else {
        document.getElementById("urlReq").innerHTML = "URL is required";

    }
}
function display() {
    var cols = "";
    for (var i = 0; i < sites.length; i++) {
        var x = "<a class=\"btn btn-primary m-1 ml-4\" href=\"http://" + sites[i].url + "\" id=\"link\" target=\"_blank\">visit</a>";
        cols += "<div class=\"add row \"><h2>" + sites[i].url + "</h2>" + x + "<button class=\"btn btn-danger m-1 delete-btn\" onclick=\"deletebtn(" + i + ")\" id=\"dBtn\">Delete</button><button class=\"btn btn-info m-1 update-btn\" onclick=\"update(" + i + ")\" id=\"uBtn\">Update</button> </div>";
    }
    document.getElementById("try").innerHTML = cols;
}
function clear() {
    for (var i = 0; i < clr.length; i++) {
        clr[i].value = "";
    }
}
function search(searchTxt) {
    var cols = "";
    for (var i = 0; i < sites.length; i++) {
        if (sites[i].url.toLowerCase().includes(searchTxt.toLowerCase())) {
            var x = "<a class=\"btn btn-primary m-1 ml-4\" href=\"http://" + sites[i].url + "\" id=\"link\" target=\"_blank\">visit</a>";
            cols += "<div class=\"add row \"><h2>" + sites[i].url + "</h2>" + x + "<button class=\"btn btn-danger m-1 delete-btn\" onclick=\"deletebtn(" + i + ")\" id=\"dBtn\">Delete</button> <button class=\"btn btn-info m-1 update-btn\" onclick=\"update(" + i + ")\" id=\"uBtn\">Update</button></div>";
        }

    }
    document.getElementById("try").innerHTML = cols;
}

function update(index) {
    siteUrl.value = sites[index].url;
    siteName.value = sites[index].name;
    subBtn.innerHTML = "update";//change button name to update 
   
    deletebtn(index);
}




